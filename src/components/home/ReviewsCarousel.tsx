"use client";

import React, { useRef } from "react";
import styles from "./ReviewsCarousel.module.css";
import { Star, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

const reviews = [
    {
        author: "Dott. Rossi",
        role: "Direttore Sanitario, Clinica Alpha",
        quote: "Estremamente competenti. Hanno gestito l'intera pratica di rinnovo autorizzativo con una precisione che non avevo mai riscontrato prima.",
    },
    {
        author: "Studio Dentistico Grandi",
        role: "Milano",
        quote: "Il report era pronto in 24 ore come promesso. Grafici chiari e indicazioni pratiche che il mio tecnico ha potuto seguire subito.",
    },
    {
        author: "Poliambulatorio Veneto",
        role: "Responsabile Tecnico",
        quote: "Finalmente un partner che non si limita a lasciare il 'pezzo di carta', ma spiega cosa c'è che non va. Servizio pre-acquisto fondamentale.",
    },
    {
        author: "Dott.ssa Bianchi",
        role: "Odontoiatra",
        quote: "Veloci, puliti e invisibili. Hanno fatto i controlli in pausa pranzo senza bloccare l'attività di studio. Consigliatissimi.",
    },
    {
        author: "Centro Radiologico X",
        role: "Torino",
        quote: "La dashboard per il download dei documenti è molto comoda, ma è la competenza telefonica che fa la differenza.",
    }
];

export function ReviewsCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350 + 24; // card width + gap
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Fiducia costruita su oltre 500 valutazioni.</h2>
                    <div className={styles.controls}>
                        <button
                            className={styles.controlBtn}
                            onClick={() => scroll("left")}
                            aria-label="Previous review"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            className={styles.controlBtn}
                            onClick={() => scroll("right")}
                            aria-label="Next review"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className={styles.carousel} ref={scrollRef}>
                    {reviews.map((r, i) => (
                        <div key={i} className={styles.card}>
                            <div>
                                <div className={styles.stars}>
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                                </div>
                                <p className={styles.quote}>"{r.quote}"</p>
                            </div>
                            <div className={styles.authorBlock}>
                                <span className={styles.author}>{r.author}</span>
                                <div className={styles.verified}>
                                    <CheckCircle size={14} fill="currentColor" className="text-black" />
                                    <span>Recensione Verificata</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Button size="lg" className="bg-heading text-white hover:bg-black" href="/contatti">
                        Leggi altre recensioni
                    </Button>
                </div>
            </div>
        </section>
    );
}
