import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";

export function Footer() {
    return (
        <footer className="bg-[#1a1c1b] text-[#c0c8c8]">

            {/* ── Top CTA Band ─────────────────────────────── */}
            <div className="border-b border-white/5">
                <div className="container max-w-7xl mx-auto py-20 md:py-28 px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <h2 className="font-headline text-5xl md:text-7xl text-white leading-[0.95] tracking-tight mb-4">
                                Sicurezza<br />
                                <span className="italic text-[#c0c8c8]">certificata.</span>
                            </h2>
                        </div>
                        <div className="max-w-md lg:pb-2">
                            <p className="text-lg text-[#707979] leading-relaxed mb-8">
                                Trasformiamo l'obbligo normativo in un vantaggio competitivo. Design operativo per la tua radiologia.
                            </p>
                            <Link href="/contatti" className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-secondary hover:text-white transition-colors group">
                                Inizia il percorso
                                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Footer Columns ───────────────────────────── */}
            <div className="container max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-4 space-y-6">
                        <div className="flex items-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/logo-signature.svg"
                                alt="Romeo Berni"
                                className="h-10 w-auto brightness-0 invert opacity-90"
                            />
                        </div>
                        <p className="text-sm text-[#707979] leading-relaxed max-w-xs">
                            Studio Tecnico specializzato in Radioprotezione, Sicurezza Laser e Verifiche Impianti Elettromedicali.
                        </p>
                    </div>

                    {/* Menu Column */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#707979] mb-6">Menu</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Chi Siamo", href: "/chi-siamo" },
                                { label: "Servizi", href: "/servizi" },
                                { label: "Il Metodo", href: "/metodo" },
                                { label: "Settori", href: "/settori" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-sm text-[#c0c8c8] hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#707979] mb-6">Contatti</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="mailto:romeo.berni@virgilio.it" className="text-[#c0c8c8] hover:text-white transition-colors">
                                    romeo.berni@virgilio.it
                                </a>
                            </li>
                            <li>
                                <a href="tel:+393389081443" className="text-[#c0c8c8] hover:text-white transition-colors">
                                    +39 338 908 1443
                                </a>
                            </li>
                            <li className="text-[#707979]">Tel. 0521 984098</li>
                            <li className="text-[#707979]">Strada Casalunga 11 - 43123 Parma</li>
                            <li className="text-[#707979]">PEC: romeo.berni@eppi.pec.it</li>
                        </ul>
                    </div>

                    {/* Hours Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#707979] mb-6">Orari</h4>
                        <ul className="space-y-3 text-sm text-[#707979]">
                            <li>Lun — Ven: 09:00 — 18:00</li>
                            <li>Sab — Dom: Su appuntamento</li>
                        </ul>
                        <div className="mt-8">
                            <Button size="sm" href="/contatti">
                                Richiedi Preventivo
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Bottom Bar ───────────────────────────────── */}
            <div className="border-t border-white/5">
                <div className="container max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#707979]">
                    <p>© {new Date().getFullYear()} Studio Tecnico Berni Romeo — P.IVA</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie</Link>
                        <Link href="/termini" className="hover:text-white transition-colors">Termini</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
