"use client";

import React from "react";
import Link from "next/link";

/* ────────────────────────────────────────────────────────────── */
/*  Service data — split into two rows                            */
/* ────────────────────────────────────────────────────────────── */
const rowOne = [
    {
        title: "Esperto Radioprotezione",
        desc: "Incarico di Esperto di Radioprotezione e Controlli di Qualità su macchine e sorgenti radioattive.",
        href: "/servizi/radioprotezione",
        icon: "radiology",
        image: "/images/svc-radioprotezione.png",
    },
    {
        title: "Controlli Qualità",
        desc: "Programmi di controllo della qualità per garantire precisione diagnostica continuativa.",
        href: "/servizi/controlli-qualita",
        icon: "monitoring",
        image: "/images/svc-controlli-qualita.png",
    },
    {
        title: "Dosimetria Clinica",
        desc: "Servizi avanzati di dosimetria per ottimizzare la dose radiante e proteggere pazienti e operatori.",
        href: "/servizi/dosimetria",
        icon: "science",
        image: "/images/svc-dosimetria.png",
    },
    {
        title: "Formazione",
        desc: "Corsi di radioprotezione e aggiornamento professionale per tecnici e medici specialisti.",
        href: "/servizi/formazione",
        icon: "school",
        image: "/images/svc-formazione.png",
    },
];

const rowTwo = [
    {
        title: "Sicurezza Laser",
        desc: "Consulenza come Esperto Sicurezza Laser (TSL) per centri estetici e medici.",
        href: "/servizi/sicurezza-laser",
        icon: "bolt",
        image: "/images/svc-sicurezza-laser.png",
    },
    {
        title: "Verifiche Impianti",
        desc: "Verifiche periodiche su impianti elettrici e apparecchiature elettromedicali.",
        href: "/servizi/impianti",
        icon: "verified",
        image: "/images/svc-verifiche-impianti.png",
    },
    {
        title: "Consulenza Normativa",
        desc: "Supporto completo per la conformità al D.Lgs 101/2020 e alle direttive europee.",
        href: "/servizi/consulenza-normativa",
        icon: "gavel",
        image: "/images/svc-consulenza-normativa.png",
    },
    {
        title: "Audit & Ispezioni",
        desc: "Preparazione e affiancamento per ispezioni ASL, INAIL e audit di certificazione.",
        href: "/servizi/audit",
        icon: "assignment_turned_in",
        image: "/images/svc-audit-ispezioni.png",
    },
];

/* ────────────────────────────────────────────────────────────── */
/*  ServiceCard (compact, editorial)                              */
/* ────────────────────────────────────────────────────────────── */
type Service = typeof rowOne[0];

const ServiceCard = ({ service }: { service: Service }) => (
    <Link
        href={service.href}
        className="group flex-shrink-0 w-[380px] md:w-[440px] bg-surface-container-lowest rounded-2xl p-4 flex items-start gap-5 hover:shadow-editorial transition-all duration-500"
    >
        {/* Thumbnail */}
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 py-1">
            <h3 className="font-headline text-lg md:text-xl text-on-surface mb-1.5 leading-snug group-hover:text-secondary transition-colors">
                {service.title}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                {service.desc}
            </p>
        </div>
    </Link>
);

/* ────────────────────────────────────────────────────────────── */
/*  Marquee Row – direction prop controls scroll direction        */
/* ────────────────────────────────────────────────────────────── */
const MarqueeRow = ({
    services,
    direction = "left",
}: {
    services: Service[];
    direction?: "left" | "right";
}) => {
    const animationClass =
        direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

    return (
        <div className="marquee-container relative overflow-hidden">
            <div className={`flex gap-5 w-max ${animationClass}`}>
                {/* Set 1 */}
                {services.map((service, i) => (
                    <ServiceCard key={`a-${i}`} service={service} />
                ))}
                {/* Duplicate for seamless loop */}
                {services.map((service, i) => (
                    <ServiceCard key={`b-${i}`} service={service} />
                ))}
            </div>
        </div>
    );
};

/* ────────────────────────────────────────────────────────────── */
/*  Main Component                                                */
/* ────────────────────────────────────────────────────────────── */
export function ServicesGrid() {
    return (
        <section className="py-20 md:py-28 overflow-hidden">
            {/* Heading */}
            <div className="container mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="text-xs font-medium uppercase tracking-widest text-secondary mb-4 block">
                            I Nostri Servizi
                        </span>
                        <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight">
                            Servizi <span className="italic">Integrati</span>
                        </h2>
                    </div>
                    <p className="text-on-surface-variant max-w-md leading-relaxed">
                        Un approccio tecnico e legale per coprire ogni esigenza
                        del tuo studio.
                    </p>
                </div>
            </div>

            {/* Row 1 — scrolls left */}
            <MarqueeRow services={rowOne} direction="left" />

            {/* Spacer */}
            <div className="h-5" />

            {/* Row 2 — scrolls right */}
            <MarqueeRow services={rowTwo} direction="right" />
        </section>
    );
}
