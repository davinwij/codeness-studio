"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Why Us", href: "#why-us" },
        { label: "Contact", href: "#contact" },
    ];

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
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10">
                            {/* Circular logo mark */}
                            <div className="w-10 h-10 rounded-full border-[3px] border-brand flex items-center justify-center">
                                <div className="w-5 h-5 rounded-full border-[2.5px] border-brand flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-brand" />
                                </div>
                            </div>
                        </div>
                        <span className="font-heading text-xl font-bold text-gray-900 tracking-tight">
                            Codeness{" "}
                            <span className="text-brand">Studio</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand rounded-full transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark hover:shadow-brand/40 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Partner With Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
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
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-80 border-b border-gray-100" : "max-h-0"
                    }`}
            >
                <div className="px-6 py-4 bg-white/95 backdrop-blur-lg space-y-1">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-brand hover:bg-brand-50 rounded-xl transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="block text-center mt-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25"
                    >
                        Partner With Us
                    </a>
                </div>
            </div>
        </nav>
    );
}
