"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import Process from "@/components/landing/Process";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import { type Lang } from "@/components/landing/content";

export default function Landing() {
    const [lang, setLang] = useState<Lang>("en");

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar lang={lang} onLangChange={setLang} />
            <Hero lang={lang} />
            <Services lang={lang} />
            <Process lang={lang} />
            <WhyUs lang={lang} />
            <Footer lang={lang} />
        </div>
    );
}
