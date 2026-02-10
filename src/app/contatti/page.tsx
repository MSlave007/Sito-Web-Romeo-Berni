"use client";

import { Header } from "@/components/layout/Header/Header";
import { Button } from "@/components/ui/Button/Button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            <div className="pt-32 pb-20 min-h-screen flex items-center container px-4 sm:px-6">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden w-full max-w-7xl mx-auto flex flex-col lg:flex-row border border-gray-100">

                    {/* Left: Info Side (Dark) */}
                    <div className="lg:w-2/5 bg-slate-900 text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
                        {/* Abstract Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h5 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Contatti</h5>
                            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Parliamo del tuo progetto.</h1>
                            <p className="text-gray-400 text-lg leading-relaxed mb-12">
                                Hai domande sui nostri servizi o hai bisogno di una consulenza immediata? Siamo qui per aiutarti.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email & PEC</p>
                                        <p className="font-semibold text-lg tracking-wide">romeo.berni@virgilio.it</p>
                                        <p className="text-sm text-gray-400 mt-1">PEC: romeo.berni@eppi.pec.it</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Telefono</p>
                                        <p className="font-semibold text-lg tracking-wide">+39 338 908 1443</p>
                                        <p className="text-sm text-gray-400 mt-1">Tel. 0521 984098</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Sede Operativa</p>
                                        <p className="font-semibold text-lg tracking-wide">Strada Casalunga 11</p>
                                        <p className="text-sm text-gray-400 mt-1">43123 Parma (PR)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h6 className="font-bold flex items-center gap-2 mb-2">
                                <Clock size={18} className="text-teal-400" /> Orari Ufficio
                            </h6>
                            <p className="text-gray-400 text-sm">Lun - Ven: 09:00 - 18:00</p>
                        </div>
                    </div>

                    {/* Right: Form Side (Light) */}
                    <div className="lg:w-3/5 p-10 md:p-16 bg-white relative">
                        <h2 className="text-3xl font-bold mb-8 text-heading">Inviaci un messaggio</h2>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-heading">Nome</label>
                                    <input type="text" className="w-full px-4 h-14 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder:text-gray-400" placeholder="Il tuo nome" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-heading">Cognome</label>
                                    <input type="text" className="w-full px-4 h-14 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder:text-gray-400" placeholder="Il tuo cognome" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-heading">Email Aziendale</label>
                                <input type="email" className="w-full px-4 h-14 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder:text-gray-400" placeholder="nome@azienda.it" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-heading">Interesse</label>
                                <div className="relative">
                                    <select className="w-full px-4 h-14 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-600 appearance-none">
                                        <option>Seleziona un argomento...</option>
                                        <option>Richiesta Preventivo</option>
                                        <option>Informazioni Tecniche</option>
                                        <option>Partnership</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-heading">Messaggio</label>
                                <textarea className="w-full p-4 h-32 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none placeholder:text-gray-400" placeholder="Come possiamo aiutarti?"></textarea>
                            </div>

                            <Button size="lg" className="w-full h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/20 mt-4 bg-primary hover:bg-blue-600 text-white">
                                Invia Richiesta
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
