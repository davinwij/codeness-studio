"use client";

import {
    CheckCircle2,
    Lightbulb,
    ShieldCheck,
    Users,
    Zap,
    Eye,
    Lock,
    Headset,
} from "lucide-react";
import { content, type Lang } from "@/components/landing/content";

type WhyUsProps = {
    lang: Lang;
};

export default function WhyUs({ lang }: WhyUsProps) {
    const t = content[lang].whyUs;
    const reasonIcons = [
        CheckCircle2,
        Lightbulb,
        Zap,
        Users,
        Eye,
        Lock,
        ShieldCheck,
        Headset,
    ];
    return (
        <section id="why-us" className="relative py-24 sm:py-32 bg-gray-50/50">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand text-sm font-medium mb-4">
                        {t.badge}
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        {t.titlePrefix}{" "}
                        <span className="text-brand">{t.titleHighlight}</span>
                        {t.titleSuffix}
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                        {t.description}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.reasons.map((reason, index) => {
                        const Icon = reasonIcons[index];
                        return (
                            <div
                                key={index}
                                className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
                            >
                                <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand transition-colors duration-300">
                                    <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-base font-bold text-gray-900 mb-1">
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Client Segments */}
                <div className="mt-20">
                    <h3 className="font-heading text-2xl font-bold text-gray-900 text-center mb-10">
                        {t.segmentsTitle}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {t.segments.map((segment, i) => (
                            <div
                                key={i}
                                className="text-center p-8 bg-white rounded-3xl border border-gray-100 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{segment.emoji}</div>
                                <h4 className="font-heading text-lg font-bold text-gray-900 mb-2">
                                    {segment.label}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {segment.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
