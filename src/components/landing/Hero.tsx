"use client";

import { Fragment } from "react";
import Image from "next/image";
import { content, type Lang } from "@/components/landing/content";

type HeroProps = {
    lang: Lang;
};

export default function Hero({ lang }: HeroProps) {
    const t = content[lang].hero;
    const items = t.description.items;
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background — soft pastel gradient corners matching business card */}
            <div className="absolute inset-0 bg-white">
                {/* Top-left pastel glow */}
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-200/40 via-yellow-100/30 to-transparent blur-3xl" />
                {/* Bottom-right pastel glow */}
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-sky-200/40 via-teal-100/30 to-transparent blur-3xl" />
                {/* Center teal subtle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-100/20 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
                {/* Logo Mark */}
                <div className="flex justify-center mb-8 animate-fade-in">
                    <div className="relative animate-float">
                        <Image
                            src="/Codeness%20Logo%20Main.png"
                            alt="Codeness Studio logo"
                            width={160}
                            height={160}
                            className="h-24 w-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Company Name */}
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-brand tracking-tight animate-fade-in-up opacity-0 delay-100">
                    {t.title}
                </h1>

                {/* Tagline — italic serif, matching business card */}
                <p className="mt-6 text-xl sm:text-2xl lg:text-3xl italic text-gray-500 font-light tracking-wide animate-fade-in-up opacity-0 delay-200" style={{ fontFamily: "'Georgia', serif" }}>
                    {t.tagline}
                </p>

                {/* Subheadline */}
                <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-gray-500 leading-relaxed animate-fade-in-up opacity-0 delay-300">
                    {t.description.lead}{" "}
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        const isSecondLast = index === items.length - 2;
                        return (
                            <Fragment key={item}>
                                <span className="text-brand font-medium">{item}</span>
                                {!isLast && (isSecondLast ? ` ${t.description.conjunction} ` : ", ")}
                            </Fragment>
                        );
                    })}{" "}
                    {t.description.tail}
                </p>

                {/* CTA */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-400">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand/30 hover:bg-brand-dark hover:shadow-brand/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                    >
                        {t.ctaPrimary}
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#services"
                        className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-8 py-4 text-base font-semibold text-gray-600 hover:border-brand hover:text-brand transition-all duration-300"
                    >
                        {t.ctaSecondary}
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-20 animate-bounce">
                    <svg className="w-6 h-6 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
