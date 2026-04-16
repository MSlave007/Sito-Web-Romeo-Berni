"use client";

import React from "react";

const team = [
    {
        name: "Romeo Berni",
        role: "Esperto Qualificato in Radioprotezione",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
        quote: "La sicurezza non è negoziabile. Ogni dettaglio conta.",
    },
    {
        name: "Dr. Marco Rossi",
        role: "Responsabile Tecnico",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
        quote: "La tecnologia è il nostro strumento, la cura il nostro metodo.",
    },
    {
        name: "Dr.ssa Elena Conti",
        role: "Esperta Sicurezza Laser",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
        quote: "Ogni studio merita la massima attenzione alla sicurezza.",
    },
];

export function ReviewsCarousel() {
    return (
        <section className="py-20 md:py-28 bg-surface">
            <div className="container max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <span className="text-xs font-medium uppercase tracking-widest text-secondary mb-4 block">
                        Il Nostro Team
                    </span>
                    <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight">
                        Professionisti <span className="italic">certificati.</span>
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="group relative">
                            {/* Photo */}
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container-low relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="font-headline italic text-white/80 text-sm leading-relaxed">
                                            &ldquo;{member.quote}&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="mt-5">
                                <h3 className="font-headline text-xl text-on-surface mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
