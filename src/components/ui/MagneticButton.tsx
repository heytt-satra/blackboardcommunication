"use client";

import { ReactNode, useRef, useState } from "react";
import Link from "next/link";

interface MagneticButtonProps {
    children: ReactNode;
    href: string;
    variant?: "primary" | "secondary";
}

export default function MagneticButton({
    children,
    href,
    variant = "primary",
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.15, y: y * 0.15 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseStyles =
        "inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 relative overflow-hidden group";

    const variants = {
        primary:
            "bg-[#F26C21] text-white hover:shadow-[0_0_30px_rgba(242,108,33,0.4)]",
        secondary:
            "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-[#F26C21]",
    };

    return (
        <Link
            ref={buttonRef}
            href={href}
            className={`${baseStyles} ${variants[variant]}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            <span className="relative z-10">{children}</span>
            {variant === "primary" && (
                <span className="absolute inset-0 bg-gradient-to-r from-[#F26C21] to-[#FF8A47] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </Link>
    );
}
