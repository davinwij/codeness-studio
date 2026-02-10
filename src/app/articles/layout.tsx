import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

type ArticleLayoutProps = {
    children: React.ReactNode;
};

export const metadata: Metadata = {
    title: {
        template: "%s | Codeness Studio",
        default: "Articles | Codeness Studio",
    },
};

export default function ArticleLayout({ children }: ArticleLayoutProps) {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/Codeness%20Logo%20with%20Text.png"
                                alt="Codeness Studio"
                                width={180}
                                height={40}
                                className="h-8 w-auto"
                                priority
                            />
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/"
                                className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
                            >
                                <span className="flex items-center gap-1">
                                    <ArrowLeft className="w-4 h-4" />
                                    Home
                                </span>
                            </Link>
                            <Link
                                href="/articles"
                                className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
                            >
                                Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 py-8">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Image
                            src="/Codeness%20Logo%20with%20Text.png"
                            alt="Codeness Studio"
                            width={200}
                            height={40}
                            className="h-7 w-auto"
                        />
                        <p
                            className="text-xs text-gray-500 italic"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            Start Your Digital Culture with Us
                        </p>
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Codeness Studio. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
