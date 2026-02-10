import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-white pt-20 pb-4 px-4 overflow-hidden">

            {/* Main Headline Area */}
            <div className="container max-w-7xl mx-auto mb-16 px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-6">
                            Sicurezza <br />
                            <span className="text-gray-300">certificata.</span>
                        </h2>
                    </div>
                    <div className="max-w-md pb-4">
                        <p className="text-xl text-gray-500 font-medium mb-8">
                            Trasformiamo l'obbligo normativo in un vantaggio competitivo. Design operativo per la tua radiologia.
                        </p>
                        <Link href="/contatti" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all">
                            Inizia il percorso <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Voidcraft Style Card - Brand Harmonized */}
            <div className="container max-w-7xl mx-auto bg-slate-900 text-slate-400 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative shadow-2xl shadow-primary/20 isolate">

                {/* Brand Gradient Overlay */}
                <div className="absolute inset-0 opacity-[0.15] bg-gradient-to-br from-primary/30 via-slate-900 to-slate-900 pointer-events-none z-0"></div>
                {/* Noise */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>

                {/* Giant Watermark - Primary Colored */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 selection:bg-transparent">
                    <span className="text-[8rem] md:text-[14rem] font-bold text-primary/[0.04] leading-none tracking-tighter whitespace-nowrap">
                        STUDIO BERNI
                    </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 relative z-10">

                    {/* Contact Column */}
                    <div className="lg:col-span-6 space-y-12">
                        <div>
                            <div className="relative w-16 h-16 mb-8 opacity-80 mix-blend-screen invert grayscale">
                                <Image
                                    src="/images/logo-v2.png"
                                    alt="Studio Berni Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Contatto Diretto
                            </h4>
                            <a href="mailto:romeo.berni@virgilio.it" className="text-2xl md:text-3xl font-medium text-white hover:text-primary transition-colors block mb-2 tracking-tight">
                                [romeo.berni@virgilio.it]
                            </a>
                            <a href="tel:+393389081443" className="text-3xl md:text-5xl font-medium text-white hover:text-primary transition-colors block tracking-tight">
                                +39 338 908 1443
                            </a>
                            <div className="mt-6 text-base text-slate-500 space-y-1 font-medium">
                                <p>Tel. 0521 984098</p>
                                <p>Strada Casalunga 11 - 43123 Parma</p>
                                <p>PEC: romeo.berni@eppi.pec.it</p>
                            </div>
                        </div>

                        <div className="pt-4 max-w-md">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Newsletter</h4>
                            <div className="flex gap-4 border-b border-primary/20 pb-4 relative group">
                                <input
                                    type="email"
                                    placeholder="La tua email *"
                                    className="bg-transparent w-full outline-none text-white placeholder:text-slate-600 focus:placeholder:text-slate-500 transition-all font-medium text-lg"
                                />
                                <button className="text-primary hover:text-white whitespace-nowrap text-xs font-bold uppercase transition-colors tracking-widest">
                                    Iscriviti →
                                </button>
                                <div className="absolute bottom-[-1px] left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700 ease-in-out"></div>
                            </div>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="lg:col-span-1"></div>

                    {/* Menu Columns */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-8 pt-2">
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Menu</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "Il Metodo", href: "/metodo" },
                                    { label: "Servizi", href: "/servizi" },
                                    { label: "Chi Siamo", href: "/chi-siamo" }
                                ].map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-lg text-slate-300 hover:text-white transition-colors block font-medium">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Social</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: "[Linkedin]", href: "#" },
                                    { label: "[Instagram]", href: "#" },
                                    { label: "[Facebook]", href: "#" }
                                ].map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className="text-lg text-slate-300 hover:text-white transition-colors block font-medium">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mt-32 pt-8 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 relative z-10">
                    <p>© 2024 STUDIO TECNICO BERNI ROMEO — P.IVA LOGIN</p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
