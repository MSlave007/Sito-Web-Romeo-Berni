import { Header } from "@/components/layout/Header/Header";
import { Hero } from "@/components/home/Hero";
import { LogoBar } from "@/components/home/LogoBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { HowItWorks } from "@/components/home/HowItWorks";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <LogoBar />
            <ServicesGrid />
            <TrustSection />
            <ReviewsCarousel />
            <HowItWorks />
        </main>
    );
}
