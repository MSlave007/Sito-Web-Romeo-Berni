import React from "react";
import { Button } from "@/components/ui/Button/Button";
import { Star, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="pt-32 pb-12 container">
            <div className="relative overflow-hidden rounded-[2.5rem] min-h-[600px] bg-slate-900 shadow-2xl group flex flex-col justify-center">
                {/* Image Background with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop')`
                    }}
                />

                <div className="relative z-10 p-8 md:p-16 max-w-3xl">

                    {/* Stars - Embr Style */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex text-[#8b5cf6] gap-1"> {/* Purple/Blue Stars */}
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />)}
                        </div>
                        <span className="text-white/80 font-bold text-xs tracking-widest uppercase">
                            Fiducia di 500+ Studi Medici
                        </span>
                    </div>

                    {/* Headline - Scaled Down */}
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                        Studio Tecnico Berni Romeo. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Sicurezza Certificata.
                        </span>
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl">
                        Il partner di fiducia per Studi Odontoiatrici, Poliambulatori, Veterinari e Centri Medici.
                        Esperto di Radioprotezione, Sicurezza Laser e Verifiche Impianti.
                    </p>

                    {/* Feature Icons - Embr Style */}
                    <div className="flex gap-6 mb-12">
                        <div className="flex flex-col items-center gap-2 group/icon cursor-default">
                            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover/icon:bg-white/20 transition-all">
                                <Shield size={24} />
                            </div>
                            <span className="text-xs font-bold text-white/70 uppercase tracking-wider text-center max-w-[80px] leading-tight">Radio Protezione</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group/icon cursor-default">
                            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover/icon:bg-white/20 transition-all">
                                <CheckCircle2 size={24} />
                            </div>
                            <span className="text-xs font-bold text-white/70 uppercase tracking-wider text-center max-w-[80px] leading-tight">Verifiche Impianti</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group/icon cursor-default">
                            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover/icon:bg-white/20 transition-all">
                                <Star size={24} />
                            </div>
                            <span className="text-xs font-bold text-white/70 uppercase tracking-wider text-center max-w-[80px] leading-tight">Sicurezza Laser</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold bg-[#1e1b4b] hover:bg-[#2e2a6b] border-2 border-transparent text-white shadow-xl" href="/servizi/valutazione">
                            Richiedi Valutazione
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-bold bg-white/5 border-2 border-white/20 text-white hover:bg-white/20 backdrop-blur-md" href="/metodo">
                            Scopri come funziona
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
