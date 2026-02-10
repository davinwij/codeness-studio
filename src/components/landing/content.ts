export type Lang = "id" | "en";

export const content = {
    id: {
        navbar: {
            links: [
                { label: "Layanan", href: "#services" },
                { label: "Proses", href: "#process" },
                { label: "Kenapa Kami", href: "#why-us" },
                { label: "Kontak", href: "#contact" },
                { label: "Artikel", href: "/articles" },
            ],
            cta: "Bermitra Dengan Kami",
            languageLabel: "Bahasa",
        },
        hero: {
            title: "Codeness Studio",
            tagline: "Mulai Budaya Digital Anda bersama Kami",
            description: {
                lead: "Mitra digital strategis untuk solusi",
                items: [
                    "Web Application",
                    "Microservices Architecture",
                    "UI/UX Design",
                    "AI Automation",
                ],
                conjunction: "serta",
                tail: "yang scalable dan berkualitas.",
            },
            ctaPrimary: "Bermitra Dengan Kami",
            ctaSecondary: "Jelajahi Layanan",
        },
        services: {
            badge: "Layanan Utama",
            title: "Solusi Digital",
            titleAccent: "Terintegrasi",
            description:
                "Kami membantu bisnis Anda bertransformasi melalui layanan teknologi yang terstruktur dan terukur.",
            items: [
                {
                    title: "Web Application Development",
                    description:
                        "Platform digital custom yang dirancang untuk menyederhanakan operasi bisnis Anda. Scalable, secure, dan sesuai kebutuhan.",
                    highlights: [
                        "Enterprise Resource Planning (ERP)",
                        "Platform E-commerce & Booking",
                        "Dashboard Visualisasi Data",
                    ],
                },
                {
                    title: "Microservices Architecture",
                    description:
                        "Future-proof teknologi Anda dengan arsitektur modular dan high-performance yang dirancang untuk ketahanan dan skalabilitas.",
                    highlights: [
                        "Refactoring Sistem Legacy",
                        "Transaksi High-Availability",
                        "Ekosistem Integrasi API",
                    ],
                },
                {
                    title: "UI/UX Design",
                    description:
                        "Ciptakan user experience yang memukau. Kami menggabungkan estetika dengan fungsionalitas agar pengguna menyukai produk Anda.",
                    highlights: [
                        "Prototyping Aplikasi Mobile",
                        "Redesign & Optimasi Website",
                        "Pemetaan User Journey",
                    ],
                },
                {
                    title: "AI Automation",
                    description:
                        "Otomasi alur kerja dengan AI untuk meningkatkan efisiensi, akurasi, dan kecepatan pengambilan keputusan.",
                    highlights: [
                        "Otomasi Workflow & Proses",
                        "AI Customer Support",
                        "Ekstraksi & Klasifikasi Data",
                    ],
                },
            ],
        },
        process: {
            badge: "Cara Kerja",
            title: "Proses Kerja",
            titleAccent: "Terstruktur",
            description:
                "Kami mengikuti metodologi yang terbukti untuk memastikan setiap proyek disampaikan tepat waktu dan berkualitas tinggi.",
            steps: [
                {
                    title: "Discovery & Kebutuhan",
                    description: "Memahami kebutuhan bisnis dan konteks teknis Anda.",
                },
                {
                    title: "Riset UX & Flow",
                    description: "Memetakan user journey untuk solusi yang intuitif.",
                },
                {
                    title: "Arsitektur & Perencanaan",
                    description: "Merancang fondasi teknis yang scalable.",
                },
                {
                    title: "Pengembangan Agile",
                    description: "Membangun secara iteratif dengan keterlibatan aktif.",
                },
                {
                    title: "QA & Pengujian",
                    description: "Pengujian menyeluruh untuk fungsionalitas dan keamanan.",
                },
                {
                    title: "Deployment",
                    description: "Peluncuran yang mulus dengan downtime minimal.",
                },
                {
                    title: "Monitoring & Peningkatan",
                    description: "Dukungan berkelanjutan dan optimasi berbasis data.",
                },
            ],
        },
        whyUs: {
            badge: "Kenapa Memilih Kami",
            titlePrefix: "Mengapa",
            titleHighlight: "Codeness Studio",
            titleSuffix: "?",
            description:
                "Kami bukan sekadar vendor - kami adalah strategic digital partner yang berkomitmen pada hasil nyata.",
            reasons: [
                {
                    title: "Pengiriman Terstruktur",
                    description:
                        "Metodologi terbukti untuk memastikan pengiriman tepat waktu dan sesuai anggaran.",
                },
                {
                    title: "Mindset Produk",
                    description:
                        "Kami membangun solusi yang menyelesaikan masalah bisnis nyata, bukan sekadar fitur.",
                },
                {
                    title: "Kualitas & Maintainability",
                    description:
                        "Kode bersih dan terdokumentasi yang mudah di-scale dan dipelihara.",
                },
                {
                    title: "Komunikasi Transparan",
                    description:
                        "Anda selalu mengetahui status proyek melalui update berkala.",
                },
                {
                    title: "Arsitektur Scalable",
                    description: "Solusi kami dirancang untuk tumbuh bersama bisnis Anda.",
                },
                {
                    title: "UI/UX Berfokus Pengguna",
                    description:
                        "Kami memprioritaskan pengalaman pengguna dalam setiap keputusan desain.",
                },
                {
                    title: "Berorientasi Keamanan",
                    description:
                        "Menerapkan best practices keamanan sejak awal pengembangan.",
                },
                {
                    title: "Dukungan After Sales",
                    description:
                        "Pendampingan pasca implementasi untuk memastikan solusi tetap optimal dan stabil.",
                },
            ],
            segmentsTitle: "Siapa yang Kami Layani",
            segments: [
                {
                    emoji: "🏪",
                    label: "UMKM",
                    desc: "Membantu bisnis lokal go digital dengan solusi yang terjangkau dan scalable.",
                },
                {
                    emoji: "🏛️",
                    label: "Instansi",
                    desc: "Memodernisasi layanan publik dengan platform digital yang aman dan efisien.",
                },
                {
                    emoji: "🏢",
                    label: "Corporate",
                    desc: "Mendorong transformasi digital untuk mempertahankan keunggulan kompetitif.",
                },
                {
                    emoji: "🏭",
                    label: "Manufacture",
                    desc: "Meningkatkan efisiensi produksi dan visibilitas rantai pasok melalui digitalisasi.",
                },
                {
                    emoji: "🍽️",
                    label: "FnB",
                    desc: "Membantu bisnis makanan dan minuman mengelola operasional, reservasi, dan delivery secara terintegrasi.",
                },
                {
                    emoji: "🏢",
                    label: "Organization",
                    desc: "Mendukung organisasi nirlaba dan komunitas dengan platform yang transparan dan efisien.",
                },
            ],
        },
        footer: {
            ctaTitle: "Siap Transformasi Bisnis Anda?",
            ctaDescription:
                "Mari diskusikan bagaimana kami dapat membantu membangun budaya digital yang berkelanjutan untuk bisnis Anda.",
            ctaPrimary: "Hubungi Kami",
            ctaSecondary: "WhatsApp",
            tagline: "Mulai Budaya Digital Anda bersama Kami",
            copyright:
                "© {year} Codeness Studio. Seluruh hak cipta dilindungi.",
        },
    },
    en: {
        navbar: {
            links: [
                { label: "Services", href: "#services" },
                { label: "Process", href: "#process" },
                { label: "Why Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
                { label: "Articles", href: "/articles" },
            ],
            cta: "Partner With Us",
            languageLabel: "Language",
        },
        hero: {
            title: "Codeness Studio",
            tagline: "Start Your Digital Culture with Us",
            description: {
                lead: "Strategic digital partner for",
                items: [
                    "Web Application",
                    "Microservices Architecture",
                    "UI/UX Design",
                    "AI Automation",
                ],
                conjunction: "and",
                tail: "that are scalable and high quality.",
            },
            ctaPrimary: "Partner With Us",
            ctaSecondary: "Explore Services",
        },
        services: {
            badge: "Our Core Services",
            title: "Integrated Digital",
            titleAccent: "Solutions",
            description:
                "We help your business transform through structured, measurable technology services.",
            items: [
                {
                    title: "Web Application Development",
                    description:
                        "Custom digital platforms designed to streamline your business operations. Scalable, secure, and tailored to your needs.",
                    highlights: [
                        "Enterprise Resource Planning (ERP)",
                        "E-commerce & Booking Platform",
                        "Data Visualization Dashboard",
                    ],
                },
                {
                    title: "Microservices Architecture",
                    description:
                        "Future-proof your technology with a modular, high-performance architecture built for resilience and scalability.",
                    highlights: [
                        "Legacy System Refactoring",
                        "High-Availability Transactions",
                        "API Integration Ecosystem",
                    ],
                },
                {
                    title: "UI/UX Design",
                    description:
                        "Create delightful user experiences. We blend aesthetics with functionality so users love your product.",
                    highlights: [
                        "Mobile App Prototyping",
                        "Website Redesign & Optimization",
                        "User Journey Mapping",
                    ],
                },
                {
                    title: "AI Automation",
                    description:
                        "Automate workflows with AI to improve efficiency, accuracy, and decision speed.",
                    highlights: [
                        "Workflow & Process Automation",
                        "AI Customer Support",
                        "Data Extraction & Classification",
                    ],
                },
            ],
        },
        process: {
            badge: "How We Work",
            title: "Structured",
            titleAccent: "Process",
            description:
                "We follow proven methodologies to ensure every project is delivered on time and with high quality.",
            steps: [
                {
                    title: "Discovery & Requirements",
                    description:
                        "Understanding your business needs and technical context.",
                },
                {
                    title: "UX Research & Flow",
                    description: "Mapping user journeys for intuitive solutions.",
                },
                {
                    title: "Architecture & Planning",
                    description: "Designing a scalable technical foundation.",
                },
                {
                    title: "Agile Development",
                    description: "Building iteratively with active collaboration.",
                },
                {
                    title: "QA & Testing",
                    description: "Comprehensive testing for functionality and security.",
                },
                {
                    title: "Deployment",
                    description: "Smooth release with minimal downtime.",
                },
                {
                    title: "Monitoring & Improvement",
                    description: "Continuous support and data-driven optimization.",
                },
            ],
        },
        whyUs: {
            badge: "Why Choose Us",
            titlePrefix: "Why",
            titleHighlight: "Codeness Studio",
            titleSuffix: "?",
            description:
                "We are not just a vendor - we are a strategic digital partner committed to real outcomes.",
            reasons: [
                {
                    title: "Structured Delivery",
                    description:
                        "Proven methodologies to ensure delivery on time and within budget.",
                },
                {
                    title: "Product Mindset",
                    description:
                        "We build solutions that solve real business problems, not just features.",
                },
                {
                    title: "Quality & Maintainability",
                    description:
                        "Clean, well-documented code that is easy to scale and maintain.",
                },
                {
                    title: "Transparent Communication",
                    description:
                        "You always know the project status through regular updates.",
                },
                {
                    title: "Scalable Architecture",
                    description: "Our solutions are designed to grow with your business.",
                },
                {
                    title: "User-Centric UI/UX",
                    description:
                        "We prioritize user experience in every design decision.",
                },
                {
                    title: "Security-Aware",
                    description:
                        "We apply security best practices from the start of development.",
                },
                {
                    title: "After Sales Support",
                    description:
                        "Post-launch assistance to keep solutions stable, optimized, and evolving.",
                },
            ],
            segmentsTitle: "Who We Serve",
            segments: [
                {
                    emoji: "🏪",
                    label: "SMEs",
                    desc: "Helping local businesses go digital with affordable, scalable solutions.",
                },
                {
                    emoji: "🏛️",
                    label: "Government",
                    desc: "Modernizing public services with secure and efficient digital platforms.",
                },
                {
                    emoji: "🏢",
                    label: "Corporate",
                    desc: "Driving digital transformation to maintain competitive advantage.",
                },
                {
                    emoji: "🏭",
                    label: "Manufacture",
                    desc: "Improving production efficiency and supply chain visibility through digitalization.",
                },
                {
                    emoji: "🍽️",
                    label: "FnB",
                    desc: "Helping food and beverage businesses manage operations, reservations, and delivery in one flow.",
                },
                {
                    emoji: "🏢",
                    label: "Organization",
                    desc: "Supporting nonprofits and communities with transparent, efficient digital platforms.",
                },
            ],
        },
        footer: {
            ctaTitle: "Ready to Transform Your Business?",
            ctaDescription:
                "Let's discuss how we can help build a sustainable digital culture for your business.",
            ctaPrimary: "Contact Us",
            ctaSecondary: "WhatsApp",
            tagline: "Start Your Digital Culture with Us",
            copyright: "© {year} Codeness Studio. All rights reserved.",
        },
    },
} as const;
