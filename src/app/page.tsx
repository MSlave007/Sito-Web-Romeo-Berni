import { Header } from "@/components/layout/Header/Header";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import styles from "./page.module.css";
import { cn } from "@/lib/cn";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <TrustSection />
      <ServicesGrid />
      <ReviewsCarousel />
      <HowItWorks />

      <div className="pb-20"></div>
    </main>
  );
}
