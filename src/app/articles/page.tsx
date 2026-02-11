import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";

type ArticleListItem = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    thumbnailUrl: string;
    createdAt: Date;
};

export const metadata: Metadata = {
    title: "Articles",
    description:
        "Insights, tips, and updates from Codeness Studio on web development, microservices architecture, and UI/UX design.",
    openGraph: {
        title: "Articles | Codeness Studio",
        description:
            "Insights, tips, and updates on web development, microservices, and UI/UX design.",
        type: "website",
    },
};

async function getArticles(): Promise<ArticleListItem[]> {
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
        return articles;
    } catch (error) {
        console.error("Database error in getArticles:", error);
        return [];
    }
}

function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

export default async function ArticlesPage() {
    const articles = await getArticles();

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 sm:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50/30" />
                <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-brand-100/30 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-brand-100/20 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
                        Blog & Insights
                    </span>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                        Our{" "}
                        <span className="text-brand">Articles</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Discover insights, best practices, and the latest trends in web
                        development, microservices architecture, and UI/UX design.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    {articles.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-50 flex items-center justify-center">
                                <Calendar className="w-8 h-8 text-brand-400" />
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-gray-900">
                                No articles yet
                            </h3>
                            <p className="mt-2 text-gray-500">
                                Stay tuned — new content is coming soon!
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {articles.map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/articles/${article.slug}`}
                                    className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                                        <Image
                                            src={article.thumbnailUrl}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col p-6">
                                        <p className="text-xs text-brand-600 font-medium mb-2">
                                            {formatDate(article.createdAt)}
                                        </p>
                                        <h2 className="font-heading text-lg font-semibold text-gray-900 group-hover:text-brand transition-colors duration-200 line-clamp-2">
                                            {article.title}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                                            {article.excerpt}
                                        </p>
                                        <div className="mt-4 flex items-center text-sm font-medium text-brand group-hover:gap-2 transition-all duration-200">
                                            Read more
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand to-brand-400" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                        Let&apos;s discuss how we can help you build a sustainable digital culture.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:hello@codeness.studio"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-brand shadow-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Contact Us
                        </a>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
