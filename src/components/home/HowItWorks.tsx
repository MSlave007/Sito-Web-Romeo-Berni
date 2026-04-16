import React from "react";
import { Button } from "@/components/ui/Button/Button";

const stats = [
    { value: "500+", label: "Studi Medici Serviti" },
    { value: "99%", label: "Tasso di Conformità" },
    { value: "24h", label: "Report in Tempi Record" },
];

export function HowItWorks() {
    return (
        <section className="py-20 md:py-28">
            <div className="container max-w-7xl mx-auto">

                {/* Stats Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-6">

                    {/* Featured Card */}
                    <div className="md:col-span-5 bg-secondary text-white rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
                        <div>
                            <span className="text-xs font-medium uppercase tracking-widest text-secondary-container/70 mb-4 block">
                                Metodo Certificato
                            </span>
                            <h2 className="font-headline text-3xl md:text-4xl leading-tight mb-4">
                                Dalla raccolta dati alla{" "}
                                <span className="italic">certificazione.</span>
                            </h2>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                            Un processo lineare per darti certezze. Ogni intervento segue il nostro protocollo validato.
                        </p>
                    </div>

                    {/* Stat Cards */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-outline-variant/15 hover:shadow-editorial transition-shadow duration-300 min-h-[140px] md:min-h-[280px]"
                            >
                                <span className="material-symbols-outlined text-on-surface-variant text-2xl">
                                    {["workspace_premium", "check_circle", "schedule"][i]}
                                </span>
                                <div className="mt-auto">
                                    <div className="font-headline italic text-4xl md:text-5xl text-secondary mb-2">
                                        {stat.value}
                                    </div>
                                    <p className="text-sm text-on-surface-variant">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Method Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                    {[
                        { step: "01", title: "Raccolta Dati", desc: "Analizziamo la tua richiesta e le specifiche delle macchine per pianificare l'intervento corretto." },
                        { step: "02", title: "Verifica in Loco", desc: "Uscita tecnica con strumenti tarati per misurare output, qualità fascio e sicurezza." },
                        { step: "03", title: "Report Certificato", desc: "Consegna del documento con esiti chiari, raccomandazioni e azioni correttive se necessarie." },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-surface-container-low rounded-2xl p-8 group hover:bg-surface-container-lowest hover:shadow-editorial transition-all duration-300"
                        >
                            <span className="font-headline italic text-3xl text-outline mb-4 block">
                                {item.step}
                            </span>
                            <h3 className="font-headline text-xl text-on-surface mb-3 group-hover:text-secondary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Row */}
                <div className="bg-on-surface rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="font-headline text-2xl md:text-3xl text-surface mb-2">
                            Pronto per un intervento <span className="italic">senza sorprese?</span>
                        </h3>
                        <p className="text-[#707979] text-sm">
                            Richiedi una valutazione gratuita e scopri come possiamo aiutarti.
                        </p>
                    </div>
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white shrink-0" href="/valutazione">
                        Prenota un intervento
                    </Button>
                </div>

            </div>
        </section>
    );
}
