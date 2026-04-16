import { Header } from "@/components/layout/Header/Header";
import { Button } from "@/components/ui/Button/Button";

const values = [
    {
        title: "Affidabilità",
        desc: "Un partner presente e puntuale, su cui contare per ogni scadenza normativa.",
        icon: "shield",
        featured: false,
    },
    {
        title: "Competenza",
        desc: "Aggiornamento continuo sulle normative tecniche e leggi di radioprotezione.",
        icon: "school",
        featured: true,
    },
    {
        title: "Completezza",
        desc: "Dalla progettazione alla verifica periodica, un unico referente tecnico.",
        icon: "check_circle",
        featured: false,
    },
];

const stats = [
    { value: "20+", label: "Anni di Esperienza" },
    { value: "500+", label: "Studi Serviti" },
    { value: "99%", label: "Soddisfazione Clienti" },
    { value: "1000+", label: "Verifiche Annuali" },
];

export default function ChiSiamoPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 container">
                <div className="max-w-4xl">
                    <span className="text-xs font-medium uppercase tracking-widest text-secondary mb-6 block">
                        Chi Siamo
                    </span>
                    <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-[0.95] tracking-tight mb-8">
                        Studio Tecnico{" "}
                        <span className="italic">Berni Romeo.</span>
                    </h1>
                    <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                        Da anni il punto di riferimento per la Radioprotezione e la Sicurezza negli ambienti medici.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="pb-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text */}
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-8 leading-tight">
                                Lo <span className="italic">Studio</span>
                            </h2>
                            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                                Lo <strong className="text-on-surface font-medium">Studio Tecnico Berni Romeo</strong> nasce per offrire una risposta concreta e altamente specializzata alle esigenze di Studi Odontoiatrici, Medici Specialisti, Veterinari e Poliambulatori.
                            </p>
                            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                                La nostra missione è garantire che ogni apparecchiatura sia non solo conforme alle normative vigenti, ma ottimizzata per le migliori prestazioni diagnostiche e la massima sicurezza per pazienti e operatori.
                            </p>

                            {/* Credentials */}
                            <div className="space-y-4">
                                {[
                                    "Esperto Qualificato in Radioprotezione",
                                    "Esperto Sicurezza Laser (TSL)",
                                    "Verifiche Tecniche e Collaudi",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-secondary text-lg">check</span>
                                        </div>
                                        <span className="text-on-surface font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-[4/5] bg-surface-container-low rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
                                    alt="Romeo Berni"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Name Card */}
                            <div className="absolute -bottom-4 left-6 right-6 bg-surface-container-lowest/95 backdrop-blur-xl p-6 rounded-2xl shadow-editorial border border-outline-variant/15">
                                <div className="font-headline text-xl text-on-surface">Romeo Berni</div>
                                <div className="text-xs font-medium uppercase tracking-wider text-secondary mt-1">Esperto Qualificato</div>
                                <div className="mt-2 text-sm text-on-surface-variant">romeo.berni@virgilio.it</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-surface-container-lowest">
                <div className="container">
                    <div className="mb-12">
                        <span className="text-xs font-medium uppercase tracking-widest text-secondary mb-4 block">
                            I Nostri Valori
                        </span>
                        <h2 className="font-headline text-3xl md:text-4xl text-on-surface">
                            Ciò in cui <span className="italic">crediamo.</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map((val, i) => (
                            <div
                                key={i}
                                className={`rounded-2xl p-8 md:p-10 ${val.featured
                                    ? "bg-secondary text-white"
                                    : "bg-surface border border-outline-variant/15 hover:shadow-editorial"
                                    } transition-all duration-300`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${val.featured ? "bg-white/10" : "bg-surface-container-low"}`}>
                                    <span className={`material-symbols-outlined text-2xl ${val.featured ? "text-white" : "text-secondary"}`}>
                                        {val.icon}
                                    </span>
                                </div>
                                <h3 className={`font-headline text-xl mb-3 ${val.featured ? "text-white" : "text-on-surface"}`}>
                                    {val.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${val.featured ? "text-white/70" : "text-on-surface-variant"}`}>
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center md:text-left">
                                <div className="font-headline italic text-4xl md:text-5xl text-secondary mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-sm text-on-surface-variant">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
