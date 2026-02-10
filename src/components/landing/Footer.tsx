"use client";

import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
import { content, type Lang } from "@/components/landing/content";

type FooterProps = {
    lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
    const t = content[lang].footer;
    const year = new Date().getFullYear();
    const copyright = t.copyright.replace("{year}", String(year));
    return (
        <>
            {/* CTA Section */}
            <section
                id="contact"
                className="relative py-24 sm:py-32 overflow-hidden"
            >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand to-brand-400" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

                {/* Decorative circles */}
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full border border-white/10" />
                <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-white/5 blur-2xl" />

                <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        {t.ctaTitle}
                    </h2>
                    <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                        {t.ctaDescription}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:hello@codeness.studio"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-brand shadow-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            {t.ctaPrimary}
                        </a>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            {t.ctaSecondary}
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60">
                        <span className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            hello@codeness.studio
                        </span>
                        <span className="hidden sm:inline text-white/20">|</span>
                        <span className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            +62 812 3456 7890
                        </span>
                        <span className="hidden sm:inline text-white/20">|</span>
                        <span className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            www.codeness.studio
                        </span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Image
                                src="/Codeness%20Logo%20with%20Text.png"
                                alt="Codeness Studio"
                                width={200}
                                height={40}
                                className="h-7 w-auto"
                            />
                        </div>

                        {/* Tagline */}
                        <p className="text-xs text-gray-500 italic" style={{ fontFamily: "'Georgia', serif" }}>
                            {t.tagline}
                        </p>

                        {/* Copyright */}
                        <p className="text-xs text-gray-500">
                            {copyright}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
