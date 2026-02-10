"use client";

import {
    Search,
    PenTool,
    LayoutDashboard,
    Code2,
    ShieldCheck,
    Rocket,
    TrendingUp,
} from "lucide-react";
import { content, type Lang } from "@/components/landing/content";

type ProcessProps = {
    lang: Lang;
};

export default function Process({ lang }: ProcessProps) {
    const t = content[lang].process;
    const stepIcons = [
        Search,
        PenTool,
        LayoutDashboard,
        Code2,
        ShieldCheck,
        Rocket,
        TrendingUp,
    ];
    return (
        <section id="process" className="relative py-24 sm:py-32 bg-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-50/50 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-50/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand text-sm font-medium mb-4">
                        {t.badge}
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        {t.title}{" "}
                        <span className="text-brand">{t.titleAccent}</span>
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                        {t.description}
                    </p>
                </div>

                {/* Steps — timeline */}
                <div className="relative">
                    {/* Center line (desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand/20 via-brand/40 to-brand/20" />

                    <div className="space-y-12 lg:space-y-0">
                        {t.steps.map((step, index) => {
                            const Icon = stepIcons[index];
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className="relative lg:flex lg:items-center lg:mb-16 last:lg:mb-0">
                                    {/* Desktop: alternating layout */}
                                    <div
                                        className={`lg:w-1/2 ${isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:ml-auto"
                                            }`}
                                    >
                                        <div className="flex items-start gap-4 lg:gap-6">
                                            {/* Left side icon (mobile + left items) */}
                                            <div
                                                className={`shrink-0 ${isLeft ? "lg:order-last" : ""
                                                    }`}
                                            >
                                                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center border border-brand/10 shadow-sm">
                                                    <Icon className="w-6 h-6 text-brand" />
                                                </div>
                                            </div>
                                            <div className={isLeft ? "lg:text-right" : ""}>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-xs font-bold text-brand bg-brand-50 px-2 py-0.5 rounded-full">
                                                        0{index + 1}
                                                    </span>
                                                </div>
                                                <h3 className="font-heading text-lg font-bold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-500 text-sm leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center dot (desktop) */}
                                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand border-4 border-white shadow-md" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
