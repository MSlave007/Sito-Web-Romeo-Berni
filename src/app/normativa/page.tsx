import { Header } from "@/components/layout/Header/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card/Card";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function NormativaPage() {
    return (
        <main className="min-h-screen bg-surface-alt">
            <Header />
            <div className="container py-16">
                <h1 className="text-4xl font-bold mb-8">Normativa & Risorse</h1>
                <p className="text-lg text-body mb-8">
                    Riferimenti legislativi e guide pratiche per la gestione della radioprotezione.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card variant="hoverable">
                        <CardHeader>
                            <BookOpen className="mb-4 text-primary" size={24} />
                            <CardTitle>D.Lgs 101/2020</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-body mb-4">
                                La normativa di riferimento per la radioprotezione in Italia. Scopri cosa cambia per il tuo studio.
                            </p>
                            <Link href="#" className="text-primary text-sm font-semibold hover:underline">Leggi approfondimento &rarr;</Link>
                        </CardContent>
                    </Card>

                    <Card variant="hoverable">
                        <CardHeader>
                            <BookOpen className="mb-4 text-primary" size={24} />
                            <CardTitle>Obblighi del Detentore</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-body mb-4">
                                Checklist degli obblighi per chi detiene apparecchi radiologici.
                            </p>
                            <Link href="#" className="text-primary text-sm font-semibold hover:underline">Scarica PDF &rarr;</Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
