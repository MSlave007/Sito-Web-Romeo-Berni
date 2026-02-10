import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { Header } from "@/components/layout/Header/Header";
import { Button } from "@/components/ui/Button/Button";
import { ArrowLeft, CheckCircle2, TrendingDown, AlertTriangle, FileText, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "@/components/ui/Card/Card";

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = servicesData[slug as keyof typeof servicesData];

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white text-heading">
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">

                {/* Visual Hero Section (MedEval Style) */}
                <div className="mb-12 relative overflow-hidden rounded-[2rem] h-[500px] bg-slate-900 shadow-2xl group">
                    {/* Image Background with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%), url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop')`
                        }}
                    />

                    <div className="relative h-full flex flex-col justify-end p-8 md:p-16 max-w-3xl">
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                            {service.title}
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
                            {service.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="rounded-xl px-8 h-14 font-bold bg-primary hover:bg-blue-600 border-none text-white text-lg">
                                Inizia Valutazione
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content (66%) */}
                    <div className="w-full lg:w-2/3 space-y-16">

                        {/* Why it Matters (Risk Grid) */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6">Perché è fondamentale?</h2>
                            <p className="text-lg leading-relaxed text-body mb-8">
                                {service.trigger}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {service.risks?.map((risk, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className={`mt-1 shrink-0 ${risk.icon === 'alert' ? 'text-red-500' : 'text-primary'}`}>
                                            {risk.icon === 'alert' ? <AlertTriangle size={28} /> : <TrendingDown size={28} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">{risk.title}</h4>
                                            <p className="text-body text-sm leading-relaxed">{risk.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Deliverables (What you get) */}
                        <section>
                            <h2 className="text-3xl font-bold mb-8">Cosa riceverai</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.deliverables.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 bg-gray-50/50 border border-gray-100 rounded-xl">
                                        <CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={22} />
                                        <span className="font-medium text-heading">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Vertical Timeline Process */}
                        <section>
                            <h2 className="text-3xl font-bold mb-10">Il nostro processo</h2>
                            <div className="relative pl-8 border-l-2 border-primary/20 space-y-12">
                                {service.process.map((step, i) => (
                                    <div key={i} className="relative">
                                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Step 0{i + 1}</span>
                                        <h4 className="font-bold text-xl mb-3">{step.title}</h4>
                                        <p className="text-body leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ Accordion */}
                        <section>
                            <h2 className="text-3xl font-bold mb-8">Domande Frequenti</h2>
                            <div className="space-y-4">
                                {service.faq?.map((item, i) => (
                                    <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-6 font-semibold cursor-pointer list-none hover:bg-gray-50 transition-colors">
                                            {item.q}
                                            <ChevronDown className="text-muted group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-body border-t border-gray-100 pt-4 leading-relaxed bg-gray-50/30">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Sticky */}
                    <aside className="w-full lg:w-1/3">
                        <div className="sticky top-28 space-y-6">
                            {/* CTA Card */}
                            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-2xl font-bold mb-4 text-center">Interessato al servizio?</h3>
                                <p className="text-sm text-muted text-center mb-8">
                                    I nostri consulenti sono pronti ad aiutarti nella scelta della migliore tecnologia radiologica.
                                </p>
                                <Button fullWidth size="lg" className="mb-4 text-lg font-bold rounded-xl h-14">
                                    Richiedi Preventivo
                                </Button>
                                <Button fullWidth variant="outline" className="rounded-xl h-12 bg-primary/5 border-primary/10 hover:bg-primary/10 text-primary">
                                    Parla con un Esperto
                                </Button>
                            </div>

                            {/* Download Brochure */}
                            <div className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition-colors group border border-gray-200">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-500 shadow-sm group-hover:scale-110 transition-transform">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Download Brochure</h4>
                                    <p className="text-xs text-muted">PDF, 2.4 MB - Scheda Tecnica</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
