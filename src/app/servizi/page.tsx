import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header/Header";
import { Button } from "@/components/ui/Button/Button";

export const metadata: Metadata = {
    title: "Servizi | Romeo Berni Radiologia",
    description:
        "Eccellenza diagnostica: risonanza magnetica 3T, tomografia computerizzata e screening curati. Precisione e cura su misura.",
};

/* ────────────────────────────────────────────────────────────── */
/*  Service data                                                  */
/* ────────────────────────────────────────────────────────────── */
const services = [
    {
        label: "SERVIZIO 01",
        title: "Risonanza\nMagnetica",
        description:
            "I nostri protocolli avanzati di imaging 3T catturano le sfumature più sottili dell'architettura dei tessuti molli, offrendo una profondità diagnostica senza pari.",
        image: "/images/servizi-mri-aperture.png",
        buttonText: "Scopri Dettagli",
        buttonVariant: "dark" as const,
        href: "/servizi/risonanza-magnetica",
        imagePosition: "left" as const,
    },
    {
        label: "SERVIZIO 02",
        title: "Tomografia\nComputerizzata",
        description:
            "Acquisizione volumetrica ad alta risoluzione ottimizzata per la valutazione vascolare e scheletrica. Velocità e precisione autorevole in ogni scansione.",
        image: "/images/servizi-ct-component.png",
        buttonText: "Scopri di Più",
        buttonVariant: "outline" as const,
        href: "/servizi/tomografia-computerizzata",
        imagePosition: "right" as const,
    },
    {
        label: "SERVIZIO 03",
        title: "Screening\nCurati",
        description:
            "Programmi di salute preventiva progettati per l'individuo esigente. Una selezione accurata di biomarcatori e imaging per un insight metabolico completo.",
        image: "/images/servizi-screening.png",
        buttonText: "Scopri i Servizi",
        buttonVariant: "primary" as const,
        href: "/servizi/screening",
        imagePosition: "left" as const,
    },
];

/* ────────────────────────────────────────────────────────────── */
/*  Page                                                          */
/* ────────────────────────────────────────────────────────────── */
export default function ServiziPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />

            {/* ═══════════ HERO — Consistent with site pattern ═══════════ */}
            <section className="pt-32 pb-20 container">
                <div className="max-w-4xl">
                    <span className="text-xs font-medium uppercase tracking-widest text-secondary mb-6 block">
                        Servizi
                    </span>
                    <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-[0.95] tracking-tight mb-8">
                        Eccellenza{" "}
                        <span className="italic">Curata.</span>
                    </h1>
                    <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                        Un approccio diagnostico definito da precisione meticolosa e
                        cura incentrata sulla persona. Trasformiamo dati complessi in
                        narrative cliniche chiare e attuabili.
                    </p>
                </div>
            </section>

            {/* ═══════════ SERVICE CARDS — Full-width, Stacked ═══════════ */}
            <section className="pb-0">
                <div className="container">
                    <div className="flex flex-col">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-editorial"
                                style={{ marginBottom: index < services.length - 1 ? '2rem' : 0 }}
                            >
                                {/* Image half */}
                                <div
                                    className={`relative aspect-square md:aspect-auto md:min-h-[500px] bg-on-surface ${
                                        service.imagePosition === "right" ? "md:order-2" : ""
                                    }`}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title.replace("\n", " ")}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Text half */}
                                <div
                                    className={`flex flex-col justify-center px-10 md:px-14 py-14 md:py-20 bg-surface-container-lowest ${
                                        service.imagePosition === "right" ? "md:order-1" : ""
                                    }`}
                                >
                                    {/* Label with teal accent */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="w-5 h-px bg-secondary" />
                                        <span className="text-xs tracking-[0.2em] text-on-surface-variant font-label">
                                            {service.label}
                                        </span>
                                    </div>

                                    {/* Heading */}
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline italic font-semibold text-on-surface leading-[1.1] mb-5 whitespace-pre-line">
                                        {service.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                                        {service.description}
                                    </p>

                                    {/* CTA Button */}
                                    <div>
                                        <Button
                                            variant={service.buttonVariant}
                                            href={service.href}
                                            size="sm"
                                        >
                                            {service.buttonText}
                                            <span className="ml-1">→</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ CTA — Consistent with site pattern ═══════════ */}
            <section className="py-32 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-headline italic mb-6 leading-[1.05]">
                        Inizia la{" "}
                        <span className="not-italic font-light">consulenza.</span>
                    </h2>
                    <p className="text-on-surface-variant text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                        Scopri uno standard superiore di collaborazione diagnostica.
                        I nostri esperti sono disponibili per revisioni cliniche e referti privati.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" href="/contatti">
                            Prenota Appuntamento
                        </Button>
                        <Button variant="outline" href="/contatti">
                            Contatta lo Studio
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
