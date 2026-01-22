"use client";

import { useEffect, useRef, useState } from "react";

export default function Connect() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section
            id="connect"
            ref={sectionRef}
            className="bg-[#0a0a0a] py-16 md:py-24"
        >
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
                    {/* Left Column - Contact Info */}
                    <div
                        className={`transition-all duration-700 ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                            }`}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                            Connect With Us
                        </h2>
                        <p className="text-[#a0a0a0] text-sm md:text-lg mb-6 md:mb-10 max-w-md">
                            Ready to bring your brand&apos;s next big experience to life?
                        </p>

                        {/* Contact Cards - Horizontal on mobile */}
                        <div className="grid grid-cols-1 gap-3 md:space-y-4 md:block">
                            {/* Address Card */}
                            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-[#151515] border border-[#1f1f1f] rounded-xl">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F26C21]/15 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-4 h-4 md:w-5 md:h-5 text-[#F26C21]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-white font-medium text-sm md:text-base truncate">
                                        Crystal Plaza, Andheri West
                                    </p>
                                    <p className="text-[#a0a0a0] text-xs md:text-sm">
                                        Mumbai 400053
                                    </p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <a
                                href="mailto:info@blackboardcommunications.in"
                                className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-[#151515] border border-[#1f1f1f] rounded-xl hover:bg-[#1a1a1a] transition-colors group"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F26C21]/15 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#F26C21] transition-colors">
                                    <svg
                                        className="w-4 h-4 md:w-5 md:h-5 text-[#F26C21] group-hover:text-white transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-white font-medium text-sm md:text-base truncate">
                                        info@blackboardcommunications.in
                                    </p>
                                    <p className="text-[#a0a0a0] text-xs md:text-sm">Email us</p>
                                </div>
                            </a>

                            {/* Phone Card */}
                            <a
                                href="tel:+919321567069"
                                className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-[#151515] border border-[#1f1f1f] rounded-xl hover:bg-[#1a1a1a] transition-colors group"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F26C21]/15 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#F26C21] transition-colors">
                                    <svg
                                        className="w-4 h-4 md:w-5 md:h-5 text-[#F26C21] group-hover:text-white transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-white font-medium text-sm md:text-base">+91 9321567069</p>
                                    <p className="text-[#a0a0a0] text-xs md:text-sm">Call us</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div
                        className={`transition-all duration-700 delay-200 ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-10"
                            }`}
                    >
                        {isSubmitted ? (
                            <div className="bg-[#151515] border border-[#1f1f1f] rounded-xl md:rounded-2xl p-6 md:p-12 text-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F26C21] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                    <svg
                                        className="w-8 h-8 md:w-10 md:h-10 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-[#a0a0a0] text-sm md:text-base">
                                    We&apos;ll get back to you soon.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-4 text-[#F26C21] hover:underline text-sm"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <div className="bg-[#151515] border border-[#1f1f1f] rounded-xl md:rounded-2xl p-5 md:p-10">
                                <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                                    Let&apos;s create an experience
                                </h3>
                                <p className="text-[#a0a0a0] text-xs md:text-base mb-4 md:mb-8">
                                    Fill out the form to start your project brief.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-[#a0a0a0] text-xs uppercase tracking-wider mb-1.5 md:mb-2"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg text-white text-sm placeholder-[#666666] focus:outline-none focus:border-[#F26C21] transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-[#a0a0a0] text-xs uppercase tracking-wider mb-1.5 md:mb-2"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg text-white text-sm placeholder-[#666666] focus:outline-none focus:border-[#F26C21] transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-[#a0a0a0] text-xs uppercase tracking-wider mb-1.5 md:mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg text-white text-sm placeholder-[#666666] focus:outline-none focus:border-[#F26C21] transition-colors resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#F26C21] text-white rounded-lg font-semibold text-sm hover:bg-[#FF8A47] transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="w-4 h-4 md:w-5 md:h-5 animate-spin"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Challenge us!
                                                <svg
                                                    className="w-4 h-4 md:w-5 md:h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
