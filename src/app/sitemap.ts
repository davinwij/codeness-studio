import { prisma } from "@/lib/prisma";
import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://codeness.studio";

type SitemapArticle = {
    slug: string;
    updatedAt: Date;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/articles`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    try {
        // Dynamic article pages
        const articles: SitemapArticle[] = await prisma.article.findMany({
            where: { published: true },
            select: { slug: true, updatedAt: true },
            orderBy: { createdAt: "desc" },
        });

        const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
            url: `${SITE_URL}/articles/${article.slug}`,
            lastModified: article.updatedAt,
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));

        return [...staticPages, ...articlePages];
    } catch (error) {
        console.error("Database error in sitemap generation:", error);
        return staticPages;
    }
}
