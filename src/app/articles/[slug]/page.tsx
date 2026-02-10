import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone, ArrowLeft, Clock, Calendar } from "lucide-react";
import { prisma } from "@/lib/prisma";

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate static paths for all articles
export async function generateStaticParams() {
    try {
        const articles = await prisma.article.findMany({
            where: { published: true },
            select: { slug: true },
        });
        return articles.map((article: { slug: string }) => ({ slug: article.slug }));
    } catch (error) {
        console.error("Database error in generateStaticParams:", error);
        return [];
    }
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = await prisma.article.findUnique({
        where: { slug, published: true },
        select: { title: true, excerpt: true, thumbnailUrl: true },
    });

    if (!article) {
        return { title: "Article Not Found" };
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codeness.studio";

    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: "article",
            images: [
                {
                    url: article.thumbnailUrl,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
            url: `${siteUrl}/articles/${slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [article.thumbnailUrl],
        },
    };
}

async function getArticle(slug: string) {
    try {
        return await prisma.article.findUnique({
            where: { slug, published: true },
        });
    } catch (error) {
        console.error("Database error in getArticle:", error);
        return null;
    }
}

function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

function estimateReadingTime(html: string): number {
    const text = html.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

export default async function ArticleDetailPage({ params }: Props) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        notFound();
    }

    const readingTime = estimateReadingTime(article.content);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codeness.studio";

    // JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        image: article.thumbnailUrl,
        datePublished: article.createdAt.toISOString(),
        dateModified: article.updatedAt.toISOString(),
        author: {
            "@type": "Organization",
            name: "Codeness Studio",
            url: siteUrl,
        },
        publisher: {
            "@type": "Organization",
            name: "Codeness Studio",
            logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/Codeness%20Logo%20Main.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteUrl}/articles/${article.slug}`,
        },
    };

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Back link */}
            <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 pt-8">
                <Link
                    href="/articles"
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Articles
                </Link>
            </div>

            {/* Article Header */}
            <article className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 pt-8 pb-16">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.createdAt)}
                    </span>
                    <span className="text-gray-200">|</span>
                    <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {readingTime} min read
                    </span>
                </div>

                {/* Title */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                    {article.title}
                </h1>

                {/* Excerpt */}
                <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                    {article.excerpt}
                </p>

                {/* Thumbnail */}
                <div className="relative mt-10 aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={article.thumbnailUrl}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority
                    />
                </div>

                {/* Content */}
                <div
                    className="mt-12 prose prose-lg prose-gray max-w-none
            prose-headings:font-heading prose-headings:text-gray-900 prose-headings:tracking-tight
            prose-a:text-brand prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md
            prose-strong:text-gray-900
            prose-blockquote:border-brand prose-blockquote:text-gray-600
            prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-brand-700 prose-code:text-sm
            prose-pre:bg-gray-900 prose-pre:text-gray-100"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </article>

            {/* CTA Section */}
            <section className="relative py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand to-brand-400" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Interested in Working With Us?
                    </h2>
                    <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                        We help businesses build scalable digital solutions. Let&apos;s talk about your
                        next project.
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
