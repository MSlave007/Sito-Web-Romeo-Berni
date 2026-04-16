"use client";

import { Header } from "@/components/layout/Header/Header";
import { Button } from "@/components/ui/Button/Button";
import { useState } from "react";

const sectors = [
    {
        title: "Odontoiatrico",
        subtitle: "Studi Dentistici & Cliniche",
        desc: "Soluzioni complete per la radiologia dentale: endorali, panoramici e CBCT. Garantiamo la conformità per studi di ogni dimensione.",
        image: "/images/sector-odontoiatrico.png",
        icon: "dentistry",
        features: ["Verifiche Endorali", "Controlli Panoramici", "Accettazione CBCT", "Esperti Qualificati"],
        href: "/contatti?sector=odonto",
    },
    {
        title: "Poliambulatori",
        subtitle: "Centri Medici & Ospedali",
        desc: "Supporto per strutture complesse con parco macchine eterogeneo. Dal convenzionale alla mammografia, fino alla TC.",
        image: "/images/sector-poliambulatori.png",
        icon: "local_hospital",
        features: ["RX Scheletrico", "Mammografia", "MOC & Densito", "TC & Risonanza"],
        href: "/contatti?sector=clinica",
    },
    {
        title: "Veterinario",
        subtitle: "Cliniche Veterinarie",
        desc: "Protocolli specifici per la radiologia veterinaria. Sicurezza per operatori e animali con strumentazione dedicata.",
        image: "/images/sector-veterinario.png",
        icon: "pets",
        features: ["RX Portatili", "RX Fissi Vet", "TC Cone Beam", "Radioprotezione"],
        href: "/contatti?sector=vet",
    },
];

export default function SectorsPage() {
    const [activeSector, setActiveSector] = useState(0);

    return (
        <main className="min-h-screen bg-surface">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 container">
                <div className="max-w-4xl">
                    <span className="text-xs font-medium uppercase tracking-widest text-secondary mb-6 block">
                        Settori
                    </span>
                    <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-[0.95] tracking-tight mb-8">
                        Settori di{" "}
                        <span className="italic">Intervento.</span>
                    </h1>
                    <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                        Protocolli verticali per ogni esigenza. Seleziona il tuo ambito per scoprire i servizi dedicati.
                    </p>
                </div>
            </section>

            {/* Interactive Sectors */}
            <section className="container pb-32">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left: Interactive List */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        {sectors.map((sector, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setActiveSector(i)}
                                className={`cursor-pointer group relative p-6 rounded-2xl transition-all duration-300 border ${activeSector === i
                                    ? "bg-surface-container-lowest border-on-surface/15 shadow-editorial"
                                    : "bg-transparent border-transparent hover:bg-surface-container-low"
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeSector === i
                                            ? "bg-secondary text-white"
                                            : "bg-surface-container-low text-on-surface-variant"
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-xl">{sector.icon}</span>
                                    </div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
                                        {sector.subtitle}
                                    </span>
                                </div>

                                <h3
                                    className={`font-headline text-2xl md:text-3xl transition-colors mb-2 ${activeSector === i ? "text-on-surface" : "text-on-surface-variant"
                                        }`}
                                >
                                    {sector.title}
                                </h3>

                                {/* Expandable Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-editorial ${activeSector === i ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                                        {sector.desc}
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        {sector.features.slice(0, 3).map((f, j) => (
                                            <span
                                                key={j}
                                                className="text-xs font-medium px-3 py-1 bg-surface-container-low rounded-full text-on-surface-variant"
                                            >
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Dynamic Visual */}
                    <div className="lg:col-span-7 sticky top-32">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-low shadow-editorial">
                            {sectors.map((sector, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-all duration-700 ease-editorial ${activeSector === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                        }`}
                                >
                                    <img
                                        src={sector.image}
                                        alt={sector.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b]/60 via-transparent to-transparent" />
                                </div>
                            ))}

                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/95 backdrop-blur-xl p-6 rounded-2xl shadow-editorial border border-outline-variant/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant mb-1">
                                        Pronto per iniziare?
                                    </p>
                                    <h4 className="font-headline text-lg text-on-surface">
                                        Soluzioni per il settore {sectors[activeSector].title}
                                    </h4>
                                </div>
                                <Button size="sm" variant="dark" href={sectors[activeSector].href}>
                                    Contatta Ora
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
