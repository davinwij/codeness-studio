"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { content, type Lang } from "@/components/landing/content";

type NavbarProps = {
    lang: Lang;
    onLangChange: (lang: Lang) => void;
};

export default function Navbar({ lang, onLangChange }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const t = content[lang];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = t.navbar.links;
    const languages: Array<{ label: string; value: Lang }> = [
        { label: "ID", value: "id" },
        { label: "EN", value: "en" },
    ];

    const NavLink = ({ link, mobile = false }: { link: any; mobile?: boolean }) => {
        const isHash = link.href.startsWith("#");
        const className = mobile
            ? "block px-4 py-3 text-sm font-medium text-gray-600 hover:text-brand hover:bg-brand-50 rounded-xl transition-colors"
            : "text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-200 relative group";

        if (isHash) {
            return (
                <a
                    href={link.href}
                    onClick={() => mobile && setMobileOpen(false)}
                    className={className}
                >
                    {link.label}
                    {!mobile && (
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand rounded-full transition-all duration-300 group-hover:w-full" />
                    )}
                </a>
            );
        }

        return (
            <Link
                href={link.href}
                onClick={() => mobile && setMobileOpen(false)}
                className={className}
            >
                {link.label}
                {!mobile && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand rounded-full transition-all duration-300 group-hover:w-full" />
                )}
            </Link>
        );
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/Codeness%20Logo%20with%20Text.png"
                            alt="Codeness Studio"
                            width={220}
                            height={48}
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {links.map((link) => (
                            <NavLink key={link.href} link={link} />
                        ))}
                        <div
                            className="flex items-center rounded-full border border-gray-200 bg-white/80 p-1"
                            role="group"
                            aria-label={t.navbar.languageLabel}
                        >
                            {languages.map((item) => {
                                const isActive = lang === item.value;
                                return (
                                    <button
                                        key={item.value}
                                        type="button"
                                        onClick={() => onLangChange(item.value)}
                                        className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${isActive
                                            ? "bg-brand text-white shadow-sm"
                                            : "text-gray-600 hover:text-brand"
                                            }`}
                                        aria-pressed={isActive}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 h-10 hover:bg-brand-dark hover:shadow-brand/40 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            {t.navbar.cta}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2 px-1 py-1"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 border-b border-gray-100" : "max-h-0"
                    }`}
            >
                <div className="px-6 py-4 bg-white/95 backdrop-blur-lg space-y-1">
                    <div className="flex items-center justify-center gap-2 pb-2">
                        {languages.map((item) => {
                            const isActive = lang === item.value;
                            return (
                                <button
                                    key={item.value}
                                    type="button"
                                    onClick={() => onLangChange(item.value)}
                                    className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${isActive
                                        ? "bg-brand text-white border-brand"
                                        : "text-gray-600 border-gray-200 hover:text-brand"
                                        }`}
                                    aria-pressed={isActive}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                    {links.map((link) => (
                        <NavLink key={link.href} link={link} mobile />
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="block text-center mt-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25"
                    >
                        {t.navbar.cta}
                    </a>
                </div>
            </div>
        </nav>
    );
}
