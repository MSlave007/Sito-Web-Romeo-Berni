import React from "react";
import styles from "./Button.module.css";
import { cn } from "@/lib/cn";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
    fullWidth?: boolean;
    href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", fullWidth, href, children, ...props }, ref) => {
        const classes = cn(
            styles.button,
            styles[variant],
            size !== "default" && styles[size],
            fullWidth && styles.full,
            className
        );

        if (href) {
            return (
                <Link href={href} className={classes}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
