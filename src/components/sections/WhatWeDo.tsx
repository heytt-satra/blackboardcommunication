"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef, useCallback } from "react";
import { Card } from "@/components/ui/CardSwap";

// Lazy load CardSwap
const CardSwap = dynamic(() => import("@/components/ui/CardSwap"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-full">
            <div className="w-12 h-12 border-4 border-[#F26C21]/20 border-t-[#F26C21] rounded-full animate-spin" />
        </div>
    ),
});

const services = [
    {
        title: "Experiential Marketing",
        description:
            "Immersive brand experiences and activations that connect people and brands on a deeper, emotional level.",
        icon: (
            <svg
                className="w-8 h-8 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
        ),
        features: ["Brand Activations", "Pop-up Experiences", "Immersive Installations"],
    },
    {
        title: "Events",
        description:
            "Launches, conferences, dealer meets, and large-format events that leave lasting impressions.",
        icon: (
            <svg
                className="w-8 h-8 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
        ),
        features: ["Product Launches", "Corporate Conferences", "Dealer Meets"],
    },
    {
        title: "Promotions",
        description:
            "On-ground promotions, roadshows, and retail activations that drive engagement and conversions.",
        icon: (
            <svg
                className="w-8 h-8 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
            </svg>
        ),
        features: ["Roadshows", "Retail Activations", "Sampling Campaigns"],
    },
    {
        title: "Exhibitions",
        description:
            "Design and production of exhibition booths and experiential spaces that stand out.",
        icon: (
            <svg
                className="w-8 h-8 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
            </svg>
        ),
        features: ["Booth Design", "Trade Shows", "Brand Pavilions"],
    },
];

export default function WhatWeDo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setIsMobile(window.innerWidth < 1024);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-play functionality for mobile
    const startAutoPlay = useCallback(() => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);

        autoPlayRef.current = setInterval(() => {
            if (!isPaused && isMobile) {
                setActiveIndex((prev) => (prev + 1) % services.length);
            }
        }, 3000);
    }, [isPaused, isMobile]);

    useEffect(() => {
        if (isMobile) {
            startAutoPlay();
        }
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isMobile, startAutoPlay]);

    // Scroll to active card when activeIndex changes
    useEffect(() => {
        if (sliderRef.current && isMobile) {
            const card = sliderRef.current.children[activeIndex] as HTMLElement;
            if (card) {
                sliderRef.current.scrollTo({
                    left: card.offsetLeft - 16,
                    behavior: "smooth",
                });
            }
        }
    }, [activeIndex, isMobile]);

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
        // Pause auto-play briefly when user interacts
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 5000);
    };

    const handleTouchStart = () => {
        setIsPaused(true);
    };

    const handleTouchEnd = () => {
        // Resume auto-play after 5 seconds of no touch
        setTimeout(() => setIsPaused(false), 5000);
    };

    return (
        <section id="what-we-do" className="bg-[#0a0a0a] py-16 md:py-24 overflow-hidden">
            <div className="container px-4">
                {/* Header */}
                <div className="mb-6 md:mb-12">
                    <span className="text-[#F26C21] text-xs uppercase tracking-widest mb-2 md:mb-4 block">
                        Our Services
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6">
                        What we do
                    </h2>
                    <p className="text-[#a0a0a0] text-sm md:text-lg max-w-lg">
                        We specialize in creating memorable brand experiences across
                        multiple platforms and formats.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-start">
                    {/* Left - Service List (Desktop) / Slider (Mobile) */}
                    <div>
                        {/* Desktop Service List */}
                        <div className="hidden lg:block space-y-4">
                            {services.map((service, index) => (
                                <div
                                    key={service.title}
                                    onClick={() => handleCardClick(index)}
                                    className={`flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer ${activeIndex === index
                                            ? "bg-[#F26C21]/10 border border-[#F26C21]"
                                            : "bg-[#151515] border border-[#1f1f1f] hover:border-[#F26C21]/50"
                                        }`}
                                >
                                    <div
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${activeIndex === index
                                                ? "bg-[#F26C21] text-white"
                                                : "bg-[#F26C21]/10 text-[#F26C21]"
                                            }`}
                                    >
                                        <span className="font-bold">{index + 1}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-medium">{service.title}</h3>
                                        <p className="text-[#666666] text-sm truncate">
                                            {service.features.join(" • ")}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Tabs */}
                        <div className="lg:hidden flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                            {services.map((service, index) => (
                                <button
                                    key={service.title}
                                    onClick={() => handleCardClick(index)}
                                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${activeIndex === index
                                            ? "bg-[#F26C21] text-white"
                                            : "bg-[#151515] text-[#a0a0a0] border border-[#1f1f1f]"
                                        }`}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Slider Cards - Manual + Auto */}
                        <div
                            ref={sliderRef}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {services.map((service, index) => (
                                <div
                                    key={service.title}
                                    className={`flex-shrink-0 w-[80vw] max-w-[300px] snap-center bg-[#151515] border rounded-xl p-5 transition-all duration-300 ${activeIndex === index
                                            ? "border-[#F26C21] scale-[1.02]"
                                            : "border-[#1f1f1f] opacity-70"
                                        }`}
                                    onClick={() => handleCardClick(index)}
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-[#F26C21]/10 flex items-center justify-center text-[#F26C21] mb-4">
                                        {service.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-1.5">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-2 text-xs"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F26C21]" />
                                                <span className="text-white/70">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Pagination Dots with Progress */}
                        <div className="lg:hidden flex justify-center gap-2 mt-3">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCardClick(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                            ? "bg-[#F26C21] w-8"
                                            : "bg-[#333333] w-2 hover:bg-[#555555]"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Auto-play indicator */}
                        <p className="lg:hidden text-center text-[#666666] text-xs mt-3">
                            {isPaused ? "Swipe to explore" : "Auto-playing • Tap to pause"}
                        </p>
                    </div>

                    {/* Right - Card Swap (Desktop only) */}
                    <div className="hidden lg:block" style={{ height: "550px", position: "relative" }}>
                        <CardSwap
                            cardDistance={50}
                            verticalDistance={60}
                            delay={3000}
                            pauseOnHover={true}
                            width={420}
                            height={480}
                            skewAmount={4}
                            easing="elastic"
                            onCardClick={handleCardClick}
                        >
                            {services.map((service) => (
                                <Card key={service.title} customClass="service-card">
                                    <div className="p-8 h-full flex flex-col">
                                        <div className="w-16 h-16 rounded-2xl bg-[#F26C21]/10 flex items-center justify-center text-[#F26C21] mb-6">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#a0a0a0] leading-relaxed mb-6 flex-grow">
                                            {service.description}
                                        </p>
                                        <div className="space-y-2">
                                            {service.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-center gap-2 text-sm"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F26C21]" />
                                                    <span className="text-white/70">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-[#1f1f1f]">
                                            <a
                                                href="#connect"
                                                className="inline-flex items-center gap-2 text-[#F26C21] font-medium hover:gap-3 transition-all"
                                            >
                                                Learn more
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </CardSwap>
                    </div>
                </div>
            </div>
        </section>
    );
}
