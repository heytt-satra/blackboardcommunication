"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
    { label: "Home", anchor: "#home" },
    { label: "Work", anchor: "#our-work" },
    { label: "Services", anchor: "#what-we-do" },
    { label: "Careers", anchor: "#connect" },
    { label: "About", anchor: "#who-we-are" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-[#0a0a0a]/95 backdrop-blur-md py-3 border-b border-[#1f1f1f]"
                        : "bg-transparent py-4"
                    }`}
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-[#F26C21] rounded flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-white"
                                fill="currentColor"
                            >
                                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
                            </svg>
                        </div>
                        <span className="text-white font-semibold text-lg hidden sm:block">
                            Blackboard
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.anchor}
                                href={item.anchor}
                                className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="#connect"
                            className="px-6 py-2.5 bg-[#F26C21] text-white rounded-lg font-medium text-sm hover:bg-[#FF8A47] transition-colors"
                        >
                            Challenge us!
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-[#0a0a0a] transition-all duration-500 lg:hidden ${isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.anchor}
                            href={item.anchor}
                            onClick={handleNavClick}
                            className="text-white text-3xl font-semibold hover:text-[#F26C21] transition-colors"
                            style={{
                                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                                opacity: isMobileMenuOpen ? 1 : 0,
                                transform: isMobileMenuOpen
                                    ? "translateY(0)"
                                    : "translateY(20px)",
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="#connect"
                        onClick={handleNavClick}
                        className="mt-4 px-8 py-4 bg-[#F26C21] text-white rounded-lg font-semibold text-lg hover:bg-[#FF8A47] transition-colors"
                    >
                        Challenge us!
                    </Link>
                </div>
            </div>
        </>
    );
}
