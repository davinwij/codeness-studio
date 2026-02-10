import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/articles/[slug] — Get single article by slug
export async function GET(
    _request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;

        const article = await prisma.article.findUnique({
            where: { slug, published: true },
        });

        if (!article) {
            return NextResponse.json(
                { error: "Article not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ article });
    } catch (error) {
        console.error("Failed to fetch article:", error);
        return NextResponse.json(
            { error: "Failed to fetch article" },
            { status: 500 }
        );
    }
}
