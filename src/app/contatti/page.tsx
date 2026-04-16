"use client";

import { Header } from "@/components/layout/Header/Header";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />

            <div className="pt-32 pb-24">

                {/* ═══════════════════════ Hero ═══════════════════════ */}
                <section className="max-w-7xl mx-auto px-8 mb-20 text-left">
                    <h1 className="text-5xl md:text-7xl font-headline font-light text-on-surface mb-6 leading-tight">
                        Contattaci per un&apos;{" "}
                        <span className="italic text-secondary">Eccellenza Clinica</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
                        Raggiungi il nostro studio tecnico per consulenze specialistiche e verifiche.
                        Il nostro team è pronto ad assisterti per ogni esigenza di sicurezza e conformità.
                    </p>
                </section>

                {/* ═══════════════════════ Main Layout ═══════════════════════ */}
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* ── Left Column: Contact Details & Hours ── */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Info Card */}
                        <div className="bg-surface-container-low rounded-lg p-10 space-y-12">
                            {/* Information */}
                            <div>
                                <span className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4 block">
                                    Informazioni
                                </span>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-secondary pt-1">location_on</span>
                                        <div className="text-on-surface">
                                            <p className="font-medium">Strada Casalunga 11</p>
                                            <p className="text-sm text-on-surface-variant">43123 Parma (PR)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-secondary pt-1">call</span>
                                        <div className="text-on-surface">
                                            <a href="tel:+393389081443" className="font-medium hover:text-secondary transition-colors">
                                                +39 338 908 1443
                                            </a>
                                            <p className="text-sm text-on-surface-variant italic">Lun - Ven, 09:00 - 18:00</p>
                                            <p className="text-sm text-on-surface-variant mt-1">Tel. 0521 984098</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-secondary pt-1">mail</span>
                                        <div className="text-on-surface">
                                            <a href="mailto:romeo.berni@virgilio.it" className="font-medium hover:text-secondary transition-colors">
                                                romeo.berni@virgilio.it
                                            </a>
                                            <p className="text-sm text-on-surface-variant">Informazioni Generali</p>
                                            <p className="text-sm text-on-surface-variant mt-1">PEC: romeo.berni@eppi.pec.it</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div>
                                <span className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4 block">
                                    Orari Ufficio
                                </span>
                                <div className="space-y-2 font-body text-sm">
                                    <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                                        <span className="text-on-surface-variant">Lunedì — Venerdì</span>
                                        <span className="text-on-surface font-medium">09:00 – 18:00</span>
                                    </div>
                                    <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                                        <span className="text-on-surface-variant">Sabato</span>
                                        <span className="text-on-surface font-medium">Su appuntamento</span>
                                    </div>
                                    <div className="flex justify-between pb-2">
                                        <span className="text-on-surface-variant">Domenica</span>
                                        <span className="text-outline">Chiuso</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Urgent CTA Card */}
                        <div className="bg-secondary-container rounded-lg p-8 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-headline mb-2 text-on-secondary-container">Report Urgente?</h3>
                                <p className="text-on-secondary-container/80 text-sm mb-6">
                                    Il nostro servizio prioritario garantisce la consegna dei report entro 24 ore.
                                </p>
                                <Link
                                    href="/servizi"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-on-secondary-container group-hover:gap-4 transition-all uppercase tracking-wider"
                                >
                                    Vedi Servizi{" "}
                                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="absolute -right-10 -bottom-10 opacity-10">
                                <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    radiology
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Form + Map ── */}
                    <div className="lg:col-span-8">

                        {/* Contact Form */}
                        <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-sm border border-outline-variant/15 backdrop-blur-md relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-headline mb-8">Richiedi un Appuntamento</h2>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                    <div className="space-y-2">
                                        <label className="text-xs tracking-widest uppercase text-on-surface-variant font-medium">
                                            Nome Completo
                                        </label>
                                        <input
                                            className="w-full bg-transparent border border-outline-variant rounded-lg focus:border-secondary focus:ring-0 transition-colors py-2.5 px-4 outline-none text-on-surface"
                                            placeholder="Il tuo nome"
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs tracking-widest uppercase text-on-surface-variant font-medium">
                                            Indirizzo Email
                                        </label>
                                        <input
                                            className="w-full bg-transparent border border-outline-variant rounded-lg focus:border-secondary focus:ring-0 transition-colors py-2.5 px-4 outline-none text-on-surface"
                                            placeholder="nome@azienda.it"
                                            type="email"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs tracking-widest uppercase text-on-surface-variant font-medium">
                                            Numero di Telefono
                                        </label>
                                        <input
                                            className="w-full bg-transparent border border-outline-variant rounded-lg focus:border-secondary focus:ring-0 transition-colors py-2.5 px-4 outline-none text-on-surface"
                                            placeholder="+39"
                                            type="tel"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs tracking-widest uppercase text-on-surface-variant font-medium">
                                            Tipo di Servizio
                                        </label>
                                        <select className="w-full bg-transparent border border-outline-variant rounded-lg focus:border-secondary focus:ring-0 transition-colors py-2.5 px-4 outline-none text-on-surface">
                                            <option>Seleziona Servizio</option>
                                            <option>Radioprotezione</option>
                                            <option>Sicurezza Laser</option>
                                            <option>Verifiche Impianti</option>
                                            <option>Controlli Qualità</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs tracking-widest uppercase text-on-surface-variant font-medium">
                                            Messaggio o Istruzioni Speciali
                                        </label>
                                        <textarea
                                            className="w-full bg-transparent border border-outline-variant rounded-lg focus:border-secondary focus:ring-0 transition-colors py-2.5 px-4 outline-none text-on-surface resize-none"
                                            placeholder="Descrivi le tue esigenze..."
                                            rows={3}
                                        />
                                    </div>
                                    <div className="md:col-span-2 pt-6">
                                        <button className="w-full md:w-auto bg-on-surface text-surface py-4 px-12 rounded-full font-medium transition-transform hover:scale-[0.98] active:opacity-90">
                                            Invia Richiesta
                                        </button>
                                        <p className="text-[10px] text-on-surface-variant mt-4 leading-relaxed max-w-md">
                                            Inviando questo modulo, accetti che il nostro staff ti contatti tramite le informazioni fornite. I tuoi dati sono trattati secondo le normative sulla privacy.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Map Image */}
                        <div className="mt-8 h-96 w-full rounded-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 group">
                            <img
                                className="w-full h-full object-cover"
                                alt="Mappa dello studio"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfS4kW9Md00_ybEP-D87YzsGzOCT_dHH5P8JjOO5456bLv0QOME6_djnlqkxLjeOjKsseSkwgewabO-sSy4s54u5Ybb_jMxPDur8LNzA21PTPO8Aryu4S0B_szuBbBewwy-wMajxxJEU6_BBoM-2RXi-9m7MPB3WRv8UmjK5Ez3GiK7Sa0QQK2HQvabQNNiUhUzVKwW-S4D0iKicKVWcyndroFch-vcPPdRE9VoD_UiOHuIKHHh7CalQl_8g7XKrSnVtJrli99Vb0"
                            />
                            <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
                            {/* Ping Marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="relative">
                                    <div className="w-6 h-6 bg-secondary rounded-full animate-ping absolute inset-0" />
                                    <div className="w-6 h-6 bg-secondary rounded-full relative z-10 border-2 border-white" />
                                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-3 py-1 rounded text-[10px] whitespace-nowrap font-bold tracking-widest uppercase shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                        STRADA CASALUNGA 11, PARMA
                                    </div>
                                </div>
                            </div>
                            {/* Map Controls */}
                            <div className="absolute bottom-6 right-6 flex gap-2">
                                <button className="bg-surface/90 backdrop-blur text-on-surface p-2 rounded-lg hover:bg-surface transition-colors shadow-lg">
                                    <span className="material-symbols-outlined">zoom_in</span>
                                </button>
                                <button className="bg-surface/90 backdrop-blur text-on-surface p-2 rounded-lg hover:bg-surface transition-colors shadow-lg">
                                    <span className="material-symbols-outlined">directions</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
