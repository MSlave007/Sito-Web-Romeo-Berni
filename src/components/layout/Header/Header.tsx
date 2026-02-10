"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const navigation = [
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Servizi", href: "/servizi" },
    { name: "Metodo", href: "/metodo" },
    { name: "Settori", href: "/settori" },
    { name: "Contatti", href: "/contatti" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        <div className="relative w-8 h-8 md:w-10 md:h-10">
                            <Image
                                src="/images/logo-v2.png"
                                alt="Studio Berni Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="md:hidden">Studio Berni</span>
                            <span className="hidden md:inline">Studio Tecnico</span>
                            <span className="hidden md:inline">Berni Romeo</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={styles.nav}>
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className={styles.link}>
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.actions}>
                        <Button size="sm" href="/valutazione">
                            Richiedi Valutazione
                        </Button>

                        <button
                            className={styles.menuToggle}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu - Detached for Pill Layout */}
            <div className={cn(styles.mobileMenu, isOpen && styles.open)}>
                <nav className="flex flex-col gap-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={styles.mobileLink}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mt-4 flex flex-col gap-3">
                        <Button variant="outline" className="w-full justify-start" href="/contatti">
                            Prenota Call 15 min
                        </Button>
                    </div>
                </nav>
            </div>
        </>
    );
}
