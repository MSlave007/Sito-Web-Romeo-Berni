import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />
            <div className="container py-32 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-lg">
                    <p>Informativa sulla privacy in fase di redazione.</p>
                    <p>Questa pagina è un placeholder per la conformità legale.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
