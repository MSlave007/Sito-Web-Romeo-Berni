import { Header } from "@/components/layout/Header/Header";
import { ServicesGrid } from "@/components/home/ServicesGrid";


export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />
            {/* Embr Wave Style Banner */}
            <section className="pt-24 pb-8 md:pt-32 md:pb-12 container px-4">
                <div className="relative w-full h-[450px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group">
                    {/* Background Image & Gradient */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop')` // Technical Check / Laboratory
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/90 via-purple-200/80 to-transparent mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                    </div>

                    {/* Content Top-Left */}
                    <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 drop-shadow-sm">
                            La Sicurezza <br />
                            <span className="italic font-serif text-slate-800">è Personale.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-lg leading-relaxed text-balance">
                            Offriamo un supporto completo per la sicurezza radiologica, dalla valutazione iniziale alla gestione delle verifiche periodiche.
                        </p>
                    </div>
                </div>
            </section>

            <div className="pt-12">

                {/* Reuse existing component */}
                <ServicesGrid />

                <div className="container py-24">
                    <h2 className="text-3xl font-bold mb-8">Settori di Intervento</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white border border-gray-200 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">Studi Odontoiatrici</h3>
                            <p className="mb-4 text-body">Verifiche su endorali, ortopantomografi, CBCT e Teleradiografi.</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-200 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">Poliambulatori e Cliniche</h3>
                            <p className="mb-4 text-body">Gestione parco macchine complesso: RX tradizionali, Mammografi, TAC e Risonanze</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-200 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">Studi Veterinari</h3>
                            <p className="mb-4 text-body">Controlli di qualità e progettazione schermature per radiologia veterinaria.</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-200 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">Studi Medici Specialistici</h3>
                            <p className="mb-4 text-body">Oculisti (Laser), Dermatologi, Ginecologi, Otorino e Fisiatri.</p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
