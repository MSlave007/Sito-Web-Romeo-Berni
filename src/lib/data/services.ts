export const servicesData = {
    "pre-acquisto": {
        title: "Valutazione Pre-acquisto",
        description: "Ottimizza i tuoi investimenti in tecnologie radiologiche e minimizza i rischi clinici e finanziari con le nostre analisi esperte indipendenti.",
        trigger: "L'acquisto di apparecchiature radiologiche senza una verifica preliminare comporta rischi elevati di incompatibilità tecnica, mancata conformità normativa e un ROI incerto.",
        risks: [
            { title: "Rischi Tecnici", desc: "Incompatibilità con sistemi PACS/RIS esistenti o requisiti strutturali non idonei.", icon: "alert" },
            { title: "Inefficienza ROI", desc: "Sottoutilizzo delle funzionalità avanzate a fronte di costi di manutenzione elevati.", icon: "trend" }
        ],
        deliverables: [
            "Studio di Fattibilità Tecnica",
            "Audit di Conformità Normativa",
            "Analisi del Ritorno sull'Investimento",
            "Benchmark tra Produttori",
            "Analisi del Costo Totale (TCO)",
            "Supporto alla Negoziazione"
        ],
        process: [
            { step: 1, title: "Sopralluogo e Raccolta Dati", desc: "Analizziamo l'ambiente fisico, i carichi di lavoro attuali e le specifiche esigenze del personale medico." },
            { step: 2, title: "Analisi Tecnica e Comparazione", desc: "Confrontiamo le diverse proposte sul mercato rispetto ai criteri di performance, interoperabilità e sicurezza radiologica." },
            { step: 3, title: "Report Finale e Recommendations", desc: "Consegna di un documento dettagliato con parere tecnico motivato e analisi costi-benefici per la scelta ottimale." }
        ],
        faq: [
            { q: "Quanto tempo richiede una valutazione completa?", a: "Generalmente il processo richiede dalle 2 alle 4 settimane, a seconda della complessità della tecnologia richiesta e della disponibilità dei dati tecnici." },
            { q: "Avete collaborazioni con i produttori di hardware?", a: "No, la nostra consulenza è totalmente indipendente. Non percepiamo commissioni dai venditori per garantire la massima oggettività nell'interesse del cliente." },
            { q: "Il report include anche l'analisi dei costi di manutenzione?", a: "Sì, analizziamo il Total Cost of Ownership (TCO), includendo i piani di assistenza post-vendita e i costi stimati di aggiornamento software." }
        ]
    },
    "controlli-qualita": {
        title: "Controlli Qualità Periodici",
        description: "Verifiche costanti per garantire conformità normativa e sicurezza paziente.",
        trigger: "Le normative richiedono verifiche periodiche. Ignorarle espone a sanzioni e rischi clinici.",
        risks: [
            { title: "Sanzioni Normative", desc: "Rischio di multe elevate per mancata conformità agli standard di sicurezza.", icon: "alert" },
            { title: "Sicurezza Paziente", desc: "Esposizione a radiazioni non necessarie dovute a malfunzionamenti.", icon: "shield" }
        ],
        deliverables: [
            "Verifica costanza parametri",
            "Report di conformità normativa",
            "Registro controlli aggiornato",
            "Supporto in caso di ispezione"
        ],
        process: [
            { step: 1, title: "Pianificazione", desc: "Programmazione interventi secondo scadenze." },
            { step: 2, title: "Verifica", desc: "Esecuzione test standardizzati." },
            { step: 3, title: "Certificazione", desc: "Rilascio documentazione ufficiale." }
        ],
        faq: [
            { q: "Ogni quanto vanno fatti?", a: "Dipende dalla tipologia, generalmente ogni 1-2 anni." }
        ]
    }
};
