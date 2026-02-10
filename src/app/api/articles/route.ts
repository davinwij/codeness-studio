import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .substring(0, 120);
}

// GET /api/articles — List all published articles
export async function GET() {
    try {
        const articles = await prisma.article.findMany({
            where: { published: true },
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                thumbnailUrl: true,
                createdAt: true,
            },
        });

        return NextResponse.json({ articles });
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        return NextResponse.json(
            { error: "Failed to fetch articles" },
            { status: 500 }
        );
    }
}

// POST /api/articles — Webhook for creating articles (n8n)
export async function POST(request: Request) {
    // Validate API key
    const apiKey = request.headers.get("x-api-key");
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    try {
        const body = await request.json();
        const { title, slug, excerpt, content, thumbnailUrl, published } = body;

        // Validate required fields
        if (!title || !excerpt || !content || !thumbnailUrl) {
            return NextResponse.json(
                {
                    error: "Missing required fields",
                    required: ["title", "excerpt", "content", "thumbnailUrl"],
                },
                { status: 400 }
            );
        }

        // Generate slug from title if not provided
        const articleSlug = slug || slugify(title);

        // Check for duplicate slug
        const existing = await prisma.article.findUnique({
            where: { slug: articleSlug },
        });
        if (existing) {
            return NextResponse.json(
                { error: `Article with slug "${articleSlug}" already exists` },
                { status: 409 }
            );
        }

        const article = await prisma.article.create({
            data: {
                title,
                slug: articleSlug,
                excerpt,
                content, // HTML string from n8n
                thumbnailUrl,
                published: published !== undefined ? published : true,
            },
        });

        return NextResponse.json({ article }, { status: 201 });
    } catch (error) {
        console.error("Failed to create article:", error);
        return NextResponse.json(
            { error: "Failed to create article" },
            { status: 500 }
        );
    }
}
