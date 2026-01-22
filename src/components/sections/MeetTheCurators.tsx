"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load TiltedCard
const TiltedCard = dynamic(() => import("@/components/ui/TiltedCard"), {
    ssr: false,
    loading: () => (
        <div className="w-[300px] h-[400px] bg-[#151515] rounded-2xl animate-pulse" />
    ),
});

const founders = [
    {
        name: "Ankita Vasaikar",
        role: "Co-Founder",
        expertise: "Creative & Strategy",
        image: "/team/ankita.png",
    },
    {
        name: "Aditya Patni",
        role: "Co-Founder",
        expertise: "Business Development",
        image: "/team/aditya.png",
    },
    {
        name: "Amit Singh",
        role: "Co-Founder",
        expertise: "Production & Execution",
        image: "/team/amit.png",
    },
];

export default function MeetTheCurators() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="team" className="bg-[#0a0a0a] py-16 md:py-24 overflow-hidden">
            <div className="container px-4">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-[#F26C21] text-xs uppercase tracking-widest mb-3 md:mb-4 block">
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                        Meet the Curators
                    </h2>
                    <p className="text-[#a0a0a0] text-base md:text-lg max-w-xl mx-auto">
                        It&apos;s not what we do but how we do it that makes a difference
                    </p>
                </div>

                {/* Founders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {founders.map((founder) => (
                        <div key={founder.name} className="flex flex-col items-center">
                            {isMobile ? (
                                /* Mobile: Simple card without 3D effect */
                                <div className="bg-[#151515] border border-[#1f1f1f] rounded-2xl overflow-hidden w-full max-w-[280px]">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-[350px] object-cover object-top"
                                        loading="lazy"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-white">{founder.name}</h3>
                                        <p className="text-[#F26C21] text-sm">{founder.role}</p>
                                        <p className="text-[#666666] text-xs mt-1">{founder.expertise}</p>
                                    </div>
                                </div>
                            ) : (
                                /* Desktop: TiltedCard with 3D effect */
                                <TiltedCard
                                    imageSrc={founder.image}
                                    altText={founder.name}
                                    captionText={founder.expertise}
                                    containerHeight="400px"
                                    containerWidth="100%"
                                    imageHeight="400px"
                                    imageWidth="300px"
                                    rotateAmplitude={12}
                                    scaleOnHover={1.05}
                                    showMobileWarning={false}
                                    showTooltip={true}
                                    displayOverlayContent={true}
                                    overlayContent={
                                        <div className="curator-overlay-content">
                                            <h3>{founder.name}</h3>
                                            <p>{founder.role}</p>
                                            <span>{founder.expertise}</span>
                                        </div>
                                    }
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10 md:mt-16">
                    <a
                        href="#connect"
                        className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#F26C21] text-white rounded-lg font-semibold text-sm md:text-base hover:bg-[#FF8A47] transition-colors active:scale-95"
                    >
                        <span>Challenge us!</span>
                        <svg
                            className="w-4 md:w-5 h-4 md:h-5"
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
        </section>
    );
}
