"use client";

import { Header } from "@/components/layout/Header/Header";
import { Button } from "@/components/ui/Button/Button";
import Link from "next/link";
import { ArrowRight, ChevronRight, Stethoscope, Building2, Dog } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

export default function SectorsPage() {
    const [activeSector, setActiveSector] = useState(0);

    const sectors = [
        {
            title: "Odontoiatrico",
            subtitle: "Studi Dentistici & Cliniche",
            desc: "Soluzioni complete per la radiologia dentale: endorali, panoramici e CBCT. Garantiamo la conformità per studi di ogni dimensione.",
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068",
            icon: Stethoscope,
            features: ["Verifiche Endorali", "Controlli Panoramici", "Accettazione CBCT", "Esperti Qualificati"],
            href: "/contatti?sector=odonto"
        },
        {
            title: "Poliambulatori",
            subtitle: "Centri Medici & Ospedali",
            desc: "Supporto per strutture complesse con parco macchine eterogeneo. Dal convenzionale alla mammografia, fino alla TC.",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053", // Using specific approved image
            icon: Building2,
            features: ["RX Scheletrico", "Mammografia", "MOC & Densito", "TC & Risonanza"],
            href: "/contatti?sector=clinica"
        },
        {
            title: "Veterinario",
            subtitle: "Cliniche Veterinarie",
            desc: "Protocolli specifici per la radiologia veterinaria. Sicurezza per operatori e animali con strumentazione dedicata.",
            image: "https://images.unsplash.com/photo-1628009368231-760335298025?auto=format&fit=crop&q=80&w=2070",
            icon: Dog,
            features: ["RX Portatili", "RX Fissi Vet", "TC Cone Beam", "Radioprotezione"],
            href: "/contatti?sector=vet"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-24 container">
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-heading">
                        Settori di <br /> Intervento.
                    </h1>
                    <p className="text-xl text-body max-w-2xl leading-relaxed">
                        Protocolli verticali per ogni esigenza. Seleziona il tuo ambito per scoprire i servizi dedicati.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* Left: Interactive List */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {sectors.map((sector, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setActiveSector(i)}
                                className={cn(
                                    "cursor-pointer group relative p-6 rounded-[2rem] transition-all duration-300 border-2",
                                    activeSector === i
                                        ? "bg-gray-50 border-gray-900 shadow-lg scale-[1.02]"
                                        : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-200"
                                )}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                            activeSector === i ? "bg-black text-white" : "bg-gray-100 text-gray-500"
                                        )}>
                                            <sector.icon size={20} />
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-wider text-muted">{sector.subtitle}</span>
                                    </div>
                                    {activeSector === i && (
                                        <ArrowRight size={20} className="text-primary animate-in fade-in slide-in-from-left-2" />
                                    )}
                                </div>

                                <h3 className={cn(
                                    "text-3xl font-bold transition-colors mb-2",
                                    activeSector === i ? "text-heading" : "text-gray-400"
                                )}>
                                    {sector.title}
                                </h3>

                                <div className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    activeSector === i ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
                                )}>
                                    <p className="text-body mb-6">{sector.desc}</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {sector.features.slice(0, 3).map((f, j) => (
                                            <span key={j} className="text-xs font-semibold px-2 py-1 bg-white border border-gray-200 rounded-md text-muted">
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
                        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-gray-100 shadow-2xl transition-all duration-500">
                            {/* Images Stacked */}
                            {sectors.map((sector, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out",
                                        activeSector === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                    )}
                                    style={{ backgroundImage: `url('${sector.image}')` }}
                                >
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                            ))}

                            {/* Floating Card Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] border border-white/40 shadow-lg flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Pronto per iniziare?</p>
                                    <h4 className="text-xl font-bold text-heading">Soluzioni per il settore {sectors[activeSector].title}</h4>
                                </div>
                                <Button href={sectors[activeSector].href} className="rounded-xl px-6 bg-black text-white hover:bg-gray-800 border-none shadow-xl">
                                    Contatta ORA
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
