import { Header } from "@/components/layout/Header/Header";
import { Button } from "@/components/ui/Button/Button";

export default function MethodPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />

            {/* ═══════════════════════ Hero ═══════════════════════ */}
            <section className="pt-36 pb-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-headline italic font-normal tracking-tight text-on-surface leading-[0.95] mb-8">
                        Precisione<br />
                        <span className="not-italic font-light">a Strati.</span>
                    </h1>
                    <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-xl">
                        Il nostro protocollo diagnostico è un processo iterativo di
                        raffinamento. Scopriamo strato dopo strato i dati clinici per rivelare
                        la verità essenziale sotto la superficie.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════ Steps ═══════════════════════ */}
            <section className="pb-24 px-8">
                <div className="max-w-6xl mx-auto flex flex-col gap-28">

                    {/* ──── Step 01 — Consultation ──── */}
                    <div className="relative">
                        {/* Decorative Number */}
                        <span className="absolute -top-4 left-0 text-[8rem] md:text-[10rem] font-headline italic text-secondary/10 leading-none select-none pointer-events-none">
                            01
                        </span>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8">
                            {/* Text */}
                            <div className="lg:col-span-5 relative z-10 pt-12">
                                <h3 className="text-3xl md:text-4xl font-headline italic text-on-surface mb-5 leading-[1.1]">
                                    Consulenza
                                </h3>
                                <p className="text-base text-on-surface-variant leading-relaxed mb-8 max-w-md">
                                    Il percorso inizia con un&apos;analisi narrativa approfondita.
                                    Ascoltiamo la storia clinica, le sfumature diagnostiche e
                                    l&apos;esperienza del paziente per costruire lo strato fondamentale.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                        <span className="text-sm text-on-surface font-medium">Pre-Valutazione Specialistica</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                        <span className="text-sm text-on-surface font-medium">Mappatura Dati Storici</span>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="lg:col-span-7">
                                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-on-surface relative">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIkUrbXPlAlP2ckXVuKobSIeDWiz1upl_4mMaFh1cjrh63UpEnAZTefLcq_nleOEjBkPAdIzQnxbTrataptVIU8f5AUFazczpjfdBXSdM0B0RIUU1E0tQCPoiqxbIGu5QSD_nAizZPNeC66gBNKzVRd5izmoVHJ8ggSZLmyjIlhIcjrZLN-tdHw4FDsRLV817_XOemhcmYY4PFZV7thyC0nLR7nes92O766jzjUXjFRBNETCT3ffMw3WlPS5WOuMSHpvcTLE3mjEo"
                                        alt="Consulenza specialistica"
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ──── Step 02 — Acquisition ──── */}
                    <div className="relative">
                        {/* Decorative Number */}
                        <span className="absolute -top-4 right-0 text-[8rem] md:text-[10rem] font-headline italic text-secondary/10 leading-none select-none pointer-events-none">
                            02
                        </span>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
                            {/* Dark Feature Card */}
                            <div className="lg:col-span-5 relative z-10">
                                <div className="bg-on-surface text-surface rounded-2xl p-10 md:p-12">
                                    <h3 className="text-4xl md:text-5xl font-headline italic text-surface leading-[1.05] mb-2">
                                        Acquisizione
                                    </h3>
                                </div>
                            </div>

                            {/* Text + Spec */}
                            <div className="lg:col-span-7 pt-4">
                                <h4 className="text-2xl font-headline italic text-on-surface mb-4">Acquisizione</h4>
                                <p className="text-base text-on-surface-variant leading-relaxed mb-8 max-w-lg">
                                    Cattura tecnica ad alta fedeltà. Utilizziamo protocolli di imaging
                                    all&apos;avanguardia per acquisire dati grezzi con precisione
                                    chirurgica, assicurando che nessun dettaglio venga perso.
                                </p>
                                <div className="inline-block bg-surface-container-low rounded-xl px-6 py-4">
                                    <p className="text-[11px] tracking-[0.15em] uppercase text-on-surface-variant mb-1 font-label">Specifica</p>
                                    <p className="text-sm text-on-surface leading-relaxed">
                                        Rendering volumetrico sub-millimetrico con riduzione del rumore multi-spettrale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ──── Step 03 — Analysis ──── */}
                    <div className="relative">
                        {/* Decorative Number */}
                        <span className="absolute -top-4 left-0 text-[8rem] md:text-[10rem] font-headline italic text-secondary/10 leading-none select-none pointer-events-none">
                            03
                        </span>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8">
                            {/* Text + Stats */}
                            <div className="lg:col-span-6 relative z-10 pt-12">
                                <h3 className="text-3xl md:text-4xl font-headline italic text-on-surface mb-5 leading-[1.1]">
                                    Analisi
                                </h3>
                                <p className="text-base text-on-surface-variant leading-relaxed mb-8 max-w-md">
                                    I dati diventano insight. Attraverso screening algoritmico e
                                    curatela umana esperta, incrociamo i risultati per isolare anomalie
                                    e verificare pattern fisiologici.
                                </p>
                                <div className="flex gap-4">
                                    <div className="bg-surface-container-low rounded-xl px-6 py-5 text-center min-w-[100px]">
                                        <p className="text-2xl font-headline text-on-surface mb-1">99.8%</p>
                                        <p className="text-[10px] tracking-[0.15em] uppercase text-on-surface-variant font-label">Accuratezza</p>
                                    </div>
                                    <div className="bg-surface-container-low rounded-xl px-6 py-5 text-center min-w-[100px]">
                                        <p className="text-2xl font-headline text-on-surface mb-1">1.2</p>
                                        <p className="text-[10px] tracking-[0.15em] uppercase text-on-surface-variant font-label">Tempo Medio (h)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="lg:col-span-6">
                                <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjiUyfpJ5wK9DY_heffRNTkuqF1LLxSiAxafSaGft5rqYFv-6Aqq8IhpbAWMbhqwDncQKhh8wb3ZfTj0wmt8RpBUt7nJfym9awZwz4h3pENzWxEPgLbFu9clAFjj_OOc1gXXERVTs9SSKNKHQuNeoxtVcrmwZs39vPg2CafNQ26AZQbSCZi_dbWHAud5TNwa-Idv094XU5WbUGGA75nvkxrjm4B8KrCZTSIGACTjwsgGK0RyaoH3phaENy7hmRfJRm4CpKN_Odc5M"
                                        alt="Analisi diagnostica"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ──── Step 04 — Diagnosis (Full-Width Dark Card) ──── */}
                    <div className="relative">
                        <div className="bg-on-surface rounded-2xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                                {/* Text */}
                                <div className="flex flex-col justify-center px-10 md:px-14 py-14">
                                    <span className="material-symbols-outlined text-secondary text-2xl mb-6">target</span>
                                    <h3 className="text-3xl md:text-4xl font-headline italic text-surface mb-5 leading-[1.1]">
                                        Diagnosi
                                    </h3>
                                    <p className="text-base text-surface-dim leading-relaxed mb-10 max-w-md">
                                        La distillazione finale. Una sintesi narrativa completa che fornisce
                                        chiarezza clinica assoluta e un percorso definitivo. Precisione, realizzata.
                                    </p>
                                    <div>
                                        <Button variant="primary" href="/contatti" size="sm">
                                            Richiedi Consulenza
                                            <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                                        </Button>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative overflow-hidden hidden lg:block">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDercOqQScL9dn0HaPFqeaP_d-4xjUysoHurA7bYJiBOfVQmynaFxbZ8aM_y6WBM9liDLz9hy1Hu7q2nAlBl41DkU6XGqJV5no0dhKMrx02s0875yAPN2GAZlCtN856D2ABy9uDdXLfJ-XwHEVML3pkfUUgIPUSARRYgHhknWNvb801khFbg-9xeATtnyhB716NMAlt6TUZJHcmG-a81CMX6v8UWiZlxcGW_y3bdQInctSuKUIVLzC93QOztenJtr7nlvEQtdQa5KY"
                                        alt="Diagnosi finale"
                                        className="w-full h-full object-cover opacity-40 absolute inset-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ═══════════════════════ CTA ═══════════════════════ */}
            <section className="py-32 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-headline italic mb-6 leading-[1.05]">
                        Sperimenta la Differenza<br />
                        <span className="not-italic font-light">nella Cura.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                        <Button variant="primary" href="/contatti">
                            Prenota Appuntamento
                        </Button>
                        <Button variant="outline" href="/metodo">
                            Il Nostro Approccio
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
