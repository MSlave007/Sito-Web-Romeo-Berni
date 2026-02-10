import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />
            <div className="container py-32 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
                <div className="prose prose-lg">
                    <p>Informativa sui cookie in fase di redazione.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
