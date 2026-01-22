"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Always load Beams now (for both mobile and desktop)
const Beams = dynamic(() => import("@/components/ui/Beams"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
    ),
});

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Beams Background - Now on all devices */}
            <div className="absolute inset-0 z-0">
                <Beams
                    beamWidth={3}
                    beamHeight={30}
                    beamNumber={15}
                    lightColor="#F26C21"
                    speed={1.5}
                    noiseIntensity={1.5}
                    scale={0.2}
                    rotation={30}
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 md:px-5 py-2 md:py-2.5 mb-8 md:mb-10">
                        <span className="text-base md:text-lg">✨</span>
                        <span className="text-xs md:text-sm text-white/80 font-medium">
                            30+ years of experiential excellence
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
                        <span className="block">We create experiences</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#F26C21]">
                            where brands connect
                        </span>
                        <span className="block text-white/90">with people</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-sm md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
                        Blackboard Communications is your trusted brand experience agency
                        offering bespoke experiential and event production solutions.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                        {/* Primary Button */}
                        <Link
                            href="#connect"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all active:scale-95"
                        >
                            Get Started
                        </Link>

                        {/* Secondary Button */}
                        <Link
                            href="#our-work"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white/80 rounded-full font-medium text-sm hover:bg-white/10 hover:text-white transition-all active:scale-95"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
        </section>
    );
}
