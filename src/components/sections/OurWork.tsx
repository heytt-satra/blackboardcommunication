"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load CircularGallery for better initial load
const CircularGallery = dynamic(
    () => import("@/components/ui/CircularGallery"),
    {
        ssr: false,
        loading: () => (
            <div className="flex items-center justify-center h-full">
                <div className="w-12 h-12 border-4 border-[#F26C21]/20 border-t-[#F26C21] rounded-full animate-spin" />
            </div>
        ),
    }
);

const projects = [
    { image: "https://picsum.photos/seed/audi-event/800/600", text: "Audi Brand Experience" },
    { image: "https://picsum.photos/seed/redbull-act/800/600", text: "Red Bull Activation" },
    { image: "https://picsum.photos/seed/bmw-meet/800/600", text: "BMW Dealer Meet" },
    { image: "https://picsum.photos/seed/insta-day/800/600", text: "Instagram Creator Day" },
    { image: "https://picsum.photos/seed/porsche-ex/800/600", text: "Porsche Exhibition" },
    { image: "https://picsum.photos/seed/kotak-road/800/600", text: "Kotak Roadshow" },
    { image: "https://picsum.photos/seed/iifa-awards/800/600", text: "IIFA Awards" },
    { image: "https://picsum.photos/seed/lambo-rev/800/600", text: "Lamborghini Reveal" },
];

export default function OurWork() {
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Delay visibility for smooth animation
        const timer = setTimeout(() => setIsVisible(true), 100);

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section id="our-work" className="bg-[#0a0a0a] py-16 md:py-24">
            <div className="container mb-6 md:mb-8 px-4">
                <span className="text-[#F26C21] text-xs uppercase tracking-widest mb-3 md:mb-4 block">
                    Portfolio
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                    Our Work
                </h2>
                <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl">
                    A showcase of our finest brand experiences. {isMobile ? "Swipe" : "Scroll or drag"} to explore.
                </p>
            </div>

            {/* Gallery - reduced height on mobile */}
            <div
                style={{ height: isMobile ? "400px" : "600px", position: "relative" }}
                className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
                <CircularGallery
                    items={projects}
                    bend={isMobile ? 0.5 : 1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollSpeed={isMobile ? 1 : 2}
                    scrollEase={0.05}
                />
            </div>
        </section>
    );
}
