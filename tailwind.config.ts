import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                /* ── Surface Hierarchy ─────────────────────────── */
                "surface": "#f9f9f7",
                "surface-bright": "#f9f9f7",
                "surface-dim": "#dadad8",
                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#f4f4f2",
                "surface-container": "#eeeeec",
                "surface-container-high": "#e8e8e6",
                "surface-container-highest": "#e2e3e1",
                "surface-variant": "#e2e3e1",

                /* ── On-Surface (Text) ─────────────────────────── */
                "on-surface": "#1a1c1b",
                "on-surface-variant": "#404848",
                "on-background": "#1a1c1b",

                /* ── Primary (Neutral Charcoal) ────────────────── */
                "primary": "#5f5e5e",
                "primary-container": "#d3d0d0",
                "primary-fixed": "#e5e2e1",
                "primary-fixed-dim": "#c8c6c5",
                "on-primary": "#ffffff",
                "on-primary-container": "#5a5959",
                "on-primary-fixed": "#1c1b1b",
                "on-primary-fixed-variant": "#474746",

                /* ── Secondary (Mint Green — Brand #A8DADC) ───── */
                "secondary": "#4A8F91",
                "secondary-container": "#A8DADC",
                "secondary-fixed": "#C5E8E9",
                "secondary-fixed-dim": "#A8DADC",
                "on-secondary": "#ffffff",
                "on-secondary-container": "#1A1C1B",
                "on-secondary-fixed": "#0D2E30",
                "on-secondary-fixed-variant": "#1A4E50",

                /* ── Tertiary (Steel Blue) ─────────────────────── */
                "tertiary": "#2b6485",
                "tertiary-container": "#a2d7fd",
                "tertiary-fixed": "#c7e7ff",
                "tertiary-fixed-dim": "#98cdf2",
                "on-tertiary": "#ffffff",
                "on-tertiary-container": "#245e7f",
                "on-tertiary-fixed": "#001e2e",
                "on-tertiary-fixed-variant": "#064c6b",

                /* ── Utility ───────────────────────────────────── */
                "outline": "#707979",
                "outline-variant": "#c0c8c8",
                "error": "#ba1a1a",
                "error-container": "#ffdad6",
                "on-error": "#ffffff",
                "on-error-container": "#93000a",
                "inverse-surface": "#2f3130",
                "inverse-on-surface": "#f1f1ef",
                "inverse-primary": "#c8c6c5",
                "surface-tint": "#5f5e5e",
                "background": "#f9f9f7",
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px",
            },
            fontFamily: {
                "headline": ["var(--font-newsreader)", "Newsreader", "serif"],
                "body": ["var(--font-inter)", "Inter", "sans-serif"],
                "label": ["var(--font-inter)", "Inter", "sans-serif"],
            },
            animation: {
                "marquee": "marquee 40s linear infinite",
                "marquee-reverse": "marquee-reverse 40s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "marquee-reverse": {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
