import {
    CheckCircle2,
    Lightbulb,
    ShieldCheck,
    Users,
    Zap,
    Eye,
    Lock,
} from "lucide-react";

const reasons = [
    {
        icon: CheckCircle2,
        title: "Structured Delivery",
        description: "Metodologi terbukti untuk memastikan pengiriman tepat waktu dan sesuai anggaran.",
    },
    {
        icon: Lightbulb,
        title: "Product Mindset",
        description: "Kami membangun solusi yang menyelesaikan masalah bisnis nyata, bukan sekadar fitur.",
    },
    {
        icon: Zap,
        title: "Quality & Maintainability",
        description: "Kode bersih dan terdokumentasi yang mudah di-scale dan dipelihara.",
    },
    {
        icon: Users,
        title: "Transparent Communication",
        description: "Anda selalu mengetahui status proyek melalui update berkala.",
    },
    {
        icon: Eye,
        title: "Scalable Architecture",
        description: "Solusi kami dirancang untuk tumbuh bersama bisnis Anda.",
    },
    {
        icon: Lock,
        title: "User-Centric UI/UX",
        description: "Kami memprioritaskan pengalaman pengguna dalam setiap keputusan desain.",
    },
    {
        icon: ShieldCheck,
        title: "Security-Aware",
        description: "Menerapkan best practices keamanan sejak awal pengembangan.",
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="relative py-24 sm:py-32 bg-gray-50/50">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand text-sm font-medium mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        Mengapa{" "}
                        <span className="text-brand">Codeness Studio</span>?
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                        Kami bukan sekadar vendor — kami adalah strategic digital partner yang berkomitmen pada hasil nyata.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
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
                        Siapa yang Kami Layani
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
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
                        ].map((segment, i) => (
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
