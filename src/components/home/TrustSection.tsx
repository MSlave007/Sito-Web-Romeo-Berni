import React from "react";
import { ShieldCheck, Users, Activity, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function TrustSection() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">

            {/* Scientific Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
                <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: The "Why" - Scientific Value */}
                    <div className="relative">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Perché la precisione <br />
                                <span className="text-primary">non è un optional.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Nel mondo della radiologia, una calibrazione imprecisa non è solo un problema tecnico: è un rischio clinico.
                                <strong className="text-slate-900 font-semibold"> Studio Berni</strong> trasforma l'obbligo normativo in garanzia di eccellenza diagnostica.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: ShieldCheck, title: "Conformità Totale", desc: "Supera ogni ispezione ASL/INAIL senza sorprese." },
                                    { icon: Activity, title: "Qualità Immagine", desc: "Diagnosi più nitide con la minima dose necessaria." },
                                    { icon: Users, title: "Sicurezza Pazienti", desc: "La tutela della salute al centro di ogni misurazione." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <item.icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <Link href="/metodo">
                                    <Button variant="outline" className="rounded-full px-8 border-primary/20 text-primary hover:bg-primary/5">
                                        Scopri il Metodo Scientifico
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The "Partner" - Visual Trust */}
                    <div className="relative h-full min-h-[450px] md:min-h-[600px] flex items-center justify-center">

                        {/* Circular Graphic Container */}
                        <div className="relative w-full max-w-[500px] aspect-square">

                            {/* Rotating Rings */}
                            <div className="absolute inset-0 border border-slate-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
                            <div className="absolute inset-12 border border-dashed border-slate-300 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

                            {/* Central Image Mask */}
                            <div className="absolute inset-24 rounded-full overflow-hidden shadow-2xl border-4 border-white z-10">
                                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10 transition-opacity hover:opacity-0 duration-500"></div>
                                <img
                                    src="/images/trust-placeholder.svg"
                                    alt="Tecnico RadCheck al lavoro"
                                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 bg-slate-100"
                                />
                            </div>

                            {/* Floating "Partner" Cards */}
                            <div className="absolute -right-4 top-1/4 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Affidabilità</div>
                                        <div className="font-bold text-slate-900">Partner Certificato</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -left-8 bottom-1/4 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Garanzia</div>
                                        <div className="font-bold text-slate-900">Tecnici Qualificati</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
