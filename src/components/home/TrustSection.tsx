import React from "react";
import { Button } from "@/components/ui/Button/Button";

const features = [
    {
        icon: "shield",
        title: "Conformità Totale",
        desc: "Supera ogni ispezione ASL/INAIL senza sorprese.",
    },
    {
        icon: "ecg_heart",
        title: "Qualità Immagine",
        desc: "Diagnosi più nitide con la minima dose necessaria.",
    },
    {
        icon: "group",
        title: "Sicurezza Pazienti",
        desc: "La tutela della salute al centro di ogni misurazione.",
    },
];

export function TrustSection() {
    return (
        <section className="py-20 md:py-32 bg-surface-container-lowest">
            <div className="container max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Value Proposition */}
                    <div>
                        <span className="text-xs font-medium uppercase tracking-widest text-secondary mb-6 block">
                            Perché Sceglierci
                        </span>
                        <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight mb-8">
                            Perché la precisione{" "}
                            <span className="italic">non è un optional.</span>
                        </h2>
                        <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
                            Nel mondo della radiologia, una calibrazione imprecisa non è solo un problema tecnico: è un rischio clinico.{" "}
                            <strong className="text-on-surface font-medium">Studio Berni</strong>{" "}
                            trasforma l'obbligo normativo in garanzia di eccellenza diagnostica.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-6 mb-12">
                            {features.map((item, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-on-surface text-lg mb-1">{item.title}</h4>
                                        <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" href="/metodo">
                            Scopri il Metodo Scientifico
                        </Button>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low relative">
                            <img
                                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop"
                                alt="Tecnico al lavoro"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Stat Card */}
                        <div className="absolute -bottom-6 -left-4 md:-left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-editorial border border-outline-variant/15">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-secondary">verified</span>
                                </div>
                                <div>
                                    <div className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">Affidabilità</div>
                                    <div className="font-headline text-on-surface text-lg">Partner Certificato</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Quality Card */}
                        <div className="absolute -top-4 -right-4 md:-right-8 bg-secondary text-white p-5 rounded-2xl shadow-editorial">
                            <div className="text-xs font-medium uppercase tracking-wider text-secondary-container mb-1">Precisione</div>
                            <div className="font-headline text-3xl italic">0.1mm</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
