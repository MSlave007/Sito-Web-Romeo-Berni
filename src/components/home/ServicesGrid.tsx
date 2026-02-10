import React from "react";
import { ArrowRight, Microscope, ShieldCheck, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const services = [
    {
        icon: Microscope,
        title: "Esperto Radioprotezione",
        desc: "Incarico di Esperto di Radioprotezione e Controlli di Qualità su macchine e sorgenti radioattive. Gestione completa della sorveglianza fisica.",
        href: "/servizi/radioprotezione",
        color: "text-blue-500 bg-blue-50"
    },
    {
        icon: ShieldCheck,
        title: "Sicurezza Laser",
        desc: "Consulenza come Esperto Sicurezza Laser (TSL) per centri estetici e medici. Valutazione del rischio e verifica dei dispositivi in uso.",
        href: "/servizi/sicurezza-laser",
        color: "text-teal-500 bg-teal-50"
    },
    {
        icon: ClipboardCheck,
        title: "Verifiche Impianti",
        desc: "Verifiche periodiche su impianti elettrici e apparecchiature elettromedicali. Progettazione impianti e collaudi per l'autorizzazione sanitaria.",
        href: "/servizi/impianti",
        color: "text-purple-500 bg-purple-50"
    }
];

export function ServicesGrid() {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-heading">Servizi Integrati</h2>
                    <p className="text-xl text-muted">Un approccio tecnico e legale per coprire ogni esigenza del tuo studio.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <Link key={i} href={service.href} className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors", service.color)}>
                                <service.icon size={28} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-heading group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-body leading-relaxed mb-8 flex-grow">{service.desc}</p>

                            <div className="flex items-center gap-2 font-bold text-sm text-heading group-hover:text-primary transition-colors">
                                Scopri di più <ArrowRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
