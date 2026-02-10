import React from "react";
import styles from "./HowItWorks.module.css";
import { Button } from "@/components/ui/Button/Button";

export function HowItWorks() {
    return (
        <section className={styles.section}>
            <div className="container">
                {/* Contained Card Wrapper */}
                <div className={styles.containerCard}>

                    {/* Background Decor */}
                    <div className={styles.blob1}></div>
                    <div className={styles.blob2}></div>

                    <div className={styles.header}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Metodo Certificato</h2>
                        <p className="text-lg text-muted">Dalla raccolta dati alla certificazione, un processo lineare per darti certezze.</p>
                    </div>

                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>Raccolta Dati</h3>
                            <p className={styles.stepDesc}>Analizziamo la tua richiesta e le specifiche delle macchine per pianificare l'intervento corretto.</p>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>Verifica in Loco</h3>
                            <p className={styles.stepDesc}>Uscita tecnica con strumenti tarati per misurare output, qualità fascio e sicurezza.</p>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>Report Certificato</h3>
                            <p className={styles.stepDesc}>Consegna del documento con esiti chiari, raccomandazioni e azioni correttive se necessarie.</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-16 relative z-10">
                        <Button size="lg">Prenota un intervento</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
