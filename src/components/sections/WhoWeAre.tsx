"use client";

import { useEffect, useRef, useState } from "react";

const values = [
    {
        number: "1",
        title: "Self Driven",
        description: "We take ownership and initiative in everything we do.",
    },
    {
        number: "2",
        title: "Motivated",
        description: "Passion fuels our creativity and commitment to excellence.",
    },
    {
        number: "3",
        title: "Inspired",
        description: "We draw inspiration from every challenge and opportunity.",
    },
];

export default function WhoWeAre() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="who-we-are"
            ref={sectionRef}
            className="bg-[#0a0a0a] py-16 md:py-24"
        >
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
                    {/* Left Content */}
                    <div
                        className={`transition-all duration-700 ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                            }`}
                    >
                        <span className="text-[#F26C21] text-xs font-semibold uppercase tracking-widest mb-3 block">
                            About Us
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8">
                            Who we are
                        </h2>

                        <div className="space-y-4 text-[#a0a0a0] text-sm md:text-base leading-relaxed">
                            <p>
                                Blackboard Communications is your trusted brand experience
                                agency offering bespoke experiential and event production
                                solutions to propel your brand to the industry forefront.
                            </p>
                            <p className="hidden md:block">
                                We create experiences where people can connect with brands the
                                same way they connect with each other. We bring our 30 years of
                                expertise in innovative designs & creativity combined with
                                technical precision & focused attention for our clients.
                            </p>
                        </div>

                        <p className="text-[#F26C21] font-semibold text-sm md:text-lg italic mt-4 md:mt-8">
                            &ldquo;It&apos;s not what we do but how we do it that makes a
                            difference!&rdquo;
                        </p>
                    </div>

                    {/* Right Content - Values */}
                    <div
                        className={`transition-all duration-700 delay-300 ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-10"
                            }`}
                    >
                        <div className="space-y-3 md:space-y-5">
                            {values.map((value, index) => (
                                <div
                                    key={value.title}
                                    className={`bg-[#151515] rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#1f1f1f] hover:border-[#F26C21]/30 transition-all duration-300 ${isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4"
                                        }`}
                                    style={{
                                        transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                                    }}
                                >
                                    <div className="flex items-start gap-3 md:gap-5">
                                        {/* Number Badge */}
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F26C21] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold text-base md:text-lg">
                                                {value.number}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base md:text-lg font-bold text-white mb-0.5 md:mb-1">
                                                {value.title}
                                            </h3>
                                            <p className="text-[#a0a0a0] text-xs md:text-sm leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
