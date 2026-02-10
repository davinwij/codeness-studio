import { Globe, Layers, Palette } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Web Application Development",
        description:
            "Platform digital custom yang dirancang untuk menyederhanakan operasi bisnis Anda. Scalable, secure, dan sesuai kebutuhan.",
        highlights: [
            "Enterprise Resource Planning (ERP)",
            "E-commerce & Booking Platform",
            "Data Visualization Dashboard",
        ],
    },
    {
        icon: Layers,
        title: "Microservices Architecture",
        description:
            "Future-proof teknologi Anda dengan arsitektur modular dan high-performance yang dirancang untuk ketahanan dan skalabilitas.",
        highlights: [
            "Refactoring Legacy System",
            "High-Availability Transaction",
            "API Integration Ecosystem",
        ],
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description:
            "Ciptakan user experience yang memukau. Kami menggabungkan estetika dengan fungsionalitas agar pengguna menyukai produk Anda.",
        highlights: [
            "Mobile App Prototyping",
            "Website Redesign & Optimization",
            "User Journey Mapping",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 sm:py-32 bg-gray-50/50">
            {/* Subtle top gradient divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand text-sm font-medium mb-4">
                        Our Core Services
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        Solusi Digital{" "}
                        <span className="text-brand">Terintegrasi</span>
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                        Kami membantu bisnis Anda bertransformasi melalui layanan teknologi yang terstruktur dan terukur.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand/5 hover:border-brand/20 transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                                    <Icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Title */}
                                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2">
                                    {service.highlights.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[3rem] rounded-tr-3xl bg-gradient-to-bl from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
