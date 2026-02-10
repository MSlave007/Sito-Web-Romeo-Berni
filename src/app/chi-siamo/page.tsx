import { Header } from "@/components/layout/Header/Header";

import { CheckCircle2, Shield, Award } from "lucide-react";
import Image from "next/image";

export default function ChiSiamoPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-20 container max-w-7xl mx-auto px-4">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                        Studio Tecnico <br />
                        <span className="text-primary">Berni Romeo.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                        Da anni il punto di riferimento per la Radioprotezione e la Sicurezza negli ambienti medici.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50 rounded-[3rem] mx-4 mb-20">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Lo Studio</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Lo <strong>Studio Tecnico Berni Romeo</strong> nasce per offrire una risposta concreta e altamente specializzata alle esigenze di Studi Odontoiatrici, Medici Specialisti, Veterinari e Poliambulatori.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                La nostra missione è garantire che ogni apparecchiatura sia non solo conforme alle normative vigenti, ma ottimizzata per le migliori prestazioni diagnostiche e la massima sicurezza per pazienti e operatori.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-lg font-medium text-slate-700">
                                    <CheckCircle2 className="text-primary" /> Esperto Qualificato in Radioprotezione
                                </li>
                                <li className="flex items-center gap-3 text-lg font-medium text-slate-700">
                                    <CheckCircle2 className="text-primary" /> Esperto Sicurezza Laser (TSL)
                                </li>
                                <li className="flex items-center gap-3 text-lg font-medium text-slate-700">
                                    <CheckCircle2 className="text-primary" /> Verifiche Tecniche e Collaudi
                                </li>
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden relative">
                                {/* Placeholder for Romeo Berni photo */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-white/50">
                                    <div className="font-bold text-slate-900 text-lg">Romeo Berni</div>
                                    <div className="text-slate-500 text-sm">Esperto Qualificato</div>
                                    <div className="mt-2 text-primary font-medium text-sm">romeo.berni@virgilio.it</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 container max-w-5xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Shield size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Affidabilità</h3>
                        <p className="text-slate-500">Un partner presente e puntuale, su cui contare per ogni scadenza normativa.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Award size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Competenza</h3>
                        <p className="text-slate-500">Aggiornamento continuo sulle normative tecniche e leggi di radioprotezione.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Completezza</h3>
                        <p className="text-slate-500">Dalla progettazione alla verifica periodica, un unico referente tecnico.</p>
                    </div>
                </div>
            </section>


        </main>
    );
}
