import React from "react";
import { Button } from "@/components/ui/Button/Button";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                    alt="Centro Radiologico"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1b]/90 via-[#1a1c1b]/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 py-20">
                <div className="max-w-3xl">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/20 backdrop-blur-sm border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-xs font-medium tracking-wider uppercase text-white/80">
                            Eccellenza Diagnostica
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8">
                        Studio Tecnico<br />
                        Berni Romeo.{" "}
                        <span className="italic text-white/60">
                            Sicurezza Certificata.
                        </span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-xl font-light">
                        Il partner di fiducia per Studi Odontoiatrici, Poliambulatori, Veterinari e Centri Medici.
                        Esperto di Radioprotezione, Sicurezza Laser e Verifiche Impianti.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {["Radioprotezione", "Sicurezza Laser", "Verifiche Impianti"].map((label) => (
                            <span
                                key={label}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 backdrop-blur-sm border border-white/10 text-white/70"
                            >
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" href="/valutazione">
                            Richiedi Valutazione
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                            href="/metodo"
                        >
                            Scopri come funziona
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade into surface */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
        </section>
    );
}
