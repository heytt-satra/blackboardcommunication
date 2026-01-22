import Link from "next/link";

const navLinks = [
    { label: "Home", anchor: "#home" },
    { label: "Work", anchor: "#our-work" },
    { label: "Services", anchor: "#what-we-do" },
    { label: "About", anchor: "#who-we-are" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f]">
            {/* Main Footer - Compact on Mobile */}
            <div className="container py-10 md:py-16 px-4">
                {/* Mobile Layout: Compact 2-column grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                    {/* Brand Column - Full width on mobile */}
                    <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
                        <Link href="#home" className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[#F26C21] rounded-lg flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-white"
                                    fill="currentColor"
                                >
                                    <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
                                </svg>
                            </div>
                            <span className="text-white font-bold">Blackboard</span>
                        </Link>
                        <p className="text-[#a0a0a0] text-xs md:text-sm leading-relaxed mb-4 max-w-[280px]">
                            Creating experiences where people connect with brands.
                        </p>
                        {/* Social Icons - Horizontal */}
                        <div className="flex items-center gap-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-[#151515] flex items-center justify-center text-[#a0a0a0] hover:bg-[#F26C21] hover:text-white transition-all"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-[#151515] flex items-center justify-center text-[#a0a0a0] hover:bg-[#F26C21] hover:text-white transition-all"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-[#151515] flex items-center justify-center text-[#a0a0a0] hover:bg-[#F26C21] hover:text-white transition-all"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-semibold text-sm md:text-lg mb-3 md:mb-6">Navigate</h4>
                        <ul className="space-y-2 md:space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.anchor}>
                                    <Link
                                        href={link.anchor}
                                        className="text-[#a0a0a0] hover:text-[#F26C21] transition-colors text-xs md:text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-white font-semibold text-sm md:text-lg mb-3 md:mb-6">Contact</h4>
                        <div className="space-y-2 text-xs md:text-sm">
                            <a
                                href="mailto:info@blackboardcommunications.in"
                                className="text-[#a0a0a0] hover:text-[#F26C21] transition-colors block truncate"
                            >
                                info@blackboardcommunications.in
                            </a>
                            <a
                                href="tel:+919321567069"
                                className="text-[#a0a0a0] hover:text-[#F26C21] transition-colors block"
                            >
                                +91 9321567069
                            </a>
                            <p className="text-[#666666]">Mumbai, India</p>
                        </div>
                    </div>

                    {/* Careers - Hidden on mobile */}
                    <div className="hidden md:block">
                        <h4 className="text-white font-semibold text-lg mb-6">Join Us</h4>
                        <a
                            href="mailto:careers@blackboardcommunications.in"
                            className="inline-flex items-center gap-2 text-[#F26C21] text-sm font-medium hover:gap-3 transition-all"
                        >
                            Send resume
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
            </div>

            {/* Bottom Bar - Compact */}
            <div className="border-t border-[#1f1f1f]">
                <div className="container py-4 px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                        <p className="text-[#666666] text-xs">
                            © 2025 Blackboard Communications
                        </p>
                        <p className="text-[#666666] text-xs">
                            Crafted in Mumbai
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
