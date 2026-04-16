"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/Button/Button";
import Link from "next/link";
import Image from "next/image";
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
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/logo-signature.svg"
                            alt="Romeo Berni"
                            className="h-9 md:h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={styles.nav}>
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className={styles.link}>
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <Button size="sm" href="/valutazione">
                            Prenota
                        </Button>

                        <button
                            className={styles.menuToggle}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                                {isOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={cn(styles.mobileMenu, isOpen && styles.open)}>
                <nav className="flex flex-col gap-1">
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
                    <div className="mt-6 pt-6 border-t border-outline-variant/30">
                        <Button variant="primary" fullWidth href="/valutazione">
                            Prenota Valutazione
                        </Button>
                    </div>
                </nav>
            </div>
        </>
    );
}
