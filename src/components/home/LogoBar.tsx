"use client";

import React from "react";

/**
 * Placeholder logos displayed as SVG wordmarks.
 * These will be replaced with real partner logos later.
 */
const logos = [
    { name: "MedTech Group", svg: (<svg viewBox="0 0 160 32" fill="currentColor" className="h-6 md:h-7"><circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="16" cy="16" r="5" /><text x="38" y="22" fontSize="16" fontWeight="600" fontFamily="Inter, sans-serif">MedTech</text></svg>) },
    { name: "RadioSafe", svg: (<svg viewBox="0 0 160 32" fill="currentColor" className="h-6 md:h-7"><rect x="2" y="4" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M9 16h10M14 11v10" strokeWidth="2" stroke="currentColor" /><text x="36" y="22" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">RadioSafe</text></svg>) },
    { name: "DiagnoLab", svg: (<svg viewBox="0 0 160 32" fill="currentColor" className="h-6 md:h-7"><path d="M4 26L14 6l10 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><text x="34" y="22" fontSize="16" fontWeight="500" fontFamily="Inter, sans-serif">DiagnoLab</text></svg>) },
    { name: "ScanPro", svg: (<svg viewBox="0 0 140 32" fill="currentColor" className="h-6 md:h-7"><ellipse cx="14" cy="16" rx="12" ry="8" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="14" y1="8" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" /><text x="34" y="22" fontSize="16" fontWeight="600" fontFamily="Inter, sans-serif">ScanPro</text></svg>) },
    { name: "SafeBeam", svg: (<svg viewBox="0 0 150 32" fill="currentColor" className="h-6 md:h-7"><polygon points="14,4 24,28 4,28" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="14" cy="20" r="3" /><text x="34" y="22" fontSize="16" fontWeight="600" fontFamily="Inter, sans-serif">SafeBeam</text></svg>) },
];

export function LogoBar() {
    return (
        <section className="py-14 md:py-16 border-b border-outline-variant/15">
            <div className="container">
                {/* Label */}
                <p className="text-center text-xs font-medium uppercase tracking-widest text-on-surface-variant/60 mb-10">
                    Partner e strutture che si affidano a noi
                </p>

                {/* Logo grid */}
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16 lg:gap-x-20 text-on-surface/30">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="hover:text-on-surface/60 transition-colors duration-300"
                            title={logo.name}
                        >
                            {logo.svg}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
