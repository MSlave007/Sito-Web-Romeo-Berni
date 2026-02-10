"use client";

import { Header } from "@/components/layout/Header/Header";
import { Button } from "@/components/ui/Button/Button";
import { ArrowRight, FileText, CheckCircle2, Microscope, LineChart, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

export default function MethodPage() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: "01",
            title: "Pianificazione",
            subtitle: "Strategia & Analisi",
            desc: "Analizziamo il tuo inventario e lo storico delle verifiche. Definiamo le priorità di intervento per minimizzare il fermo macchina e ottimizzare i tempi del tecnico.",
            icon: LineChart,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
            stat: "100% Copertura"
        },
        {
            id: "02",
            title: "Verifica",
            subtitle: "Intervento in Loco",
            desc: "Eseguiamo le misurazioni con strumentazione certificata e tarata. Verifichiamo qualità del fascio, output e sicurezza elettrica secondo standard IEC.",
            icon: Microscope,
            image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2070",
            stat: "ISO 9001"
        },
        {
            id: "03",
            title: "Certificazione",
            subtitle: "Report & Validazione",
            desc: "Consegniamo il fascicolo tecnico completo, validato dall'Esperto Qualificato. I documenti sono pronti per i controlli ASL e caricati sulla tua area riservata.",
            icon: Award,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
            stat: "Conforme 100%"
        }
    ];

    // Intersection Observer to detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            const stepElements = document.querySelectorAll('.method-step');
            stepElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                // Active when element is in the upper middle of viewport
                if (rect.top >= 0 && rect.top <= window.innerHeight * 0.6) {
                    setActiveStep(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-20 container">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Protocollo MedEval
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-heading">
                        Precisione in<br />ogni dettaglio.
                    </h1>
                    <p className="text-xl text-body leading-relaxed max-w-2xl">
                        Il nostro metodo è progettato per trasformare l'obbligo normativo in un processo fluido, trasparente e privo di imprevisti.
                    </p>
                </div>
            </section>

            <section className="container pb-40 relative">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left Column: Scrollable Steps */}
                    <div className="relative pt-10 pb-20">
                        {/* Timeline Track - Moved inward for mobile safety */}
                        <div className="absolute left-4 lg:left-8 top-12 bottom-0 w-px bg-gray-200"></div>

                        <div className="space-y-40">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "method-step relative pl-16 lg:pl-24 transition-all duration-500 ease-out",
                                        activeStep === i ? "opacity-100 translate-x-0" : "opacity-30 translate-x-4 grayscale"
                                    )}
                                >
                                    {/* Timeline Dot - Aligned with new track position */}
                                    <div className={cn(
                                        "absolute left-[11px] lg:left-[27px] top-3 w-3 h-3 rounded-full border-2 transition-all duration-500",
                                        activeStep === i ? "bg-white border-primary scale-150 shadow-[0_0_0_4px_rgba(var(--primary),0.2)]" : "bg-gray-200 border-transparent"
                                    )}></div>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4 text-primary font-bold uppercase tracking-wider text-xs">
                                            <span className="px-3 py-1 rounded-full bg-primary/10">Fase {step.id}</span>
                                            <div className="flex items-center gap-2">
                                                <step.icon size={16} />
                                                {step.subtitle}
                                            </div>
                                        </div>

                                        <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                                            {step.title}
                                        </h3>

                                        <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-md">
                                            {step.desc}
                                        </p>

                                        <div className={cn(
                                            "mt-6 flex items-center gap-3 text-sm font-semibold transition-all duration-500",
                                            activeStep === i ? "text-primary translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                        )}>
                                            <div className="h-px w-12 bg-primary"></div>
                                            Approfondisci
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sticky Visual */}
                    <div className="hidden lg:block sticky top-32 h-[70vh] min-h-[500px] w-full bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 box-border">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "absolute inset-0 transition-all duration-700 ease-in-out",
                                    activeStep === i ? "opacity-100 scale-100" : "opacity-0 scale-110"
                                )}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${step.image}')` }}
                                >
                                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Stat Card - Bottom aligned */}
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 flex items-center justify-between gap-6 transform transition-all duration-500 hover:scale-[1.02]">
                                        <div>
                                            <p className="text-xs font-bold uppercase text-gray-400 mb-1 tracking-wide">Obiettivo Raggiunto</p>
                                            <div className="text-3xl font-bold text-slate-900">
                                                {step.stat}
                                            </div>
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <CheckCircle2 size={28} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Bottom CTA */}

        </main>
    );
}
