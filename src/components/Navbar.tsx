"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";
import { useRouter } from "next/navigation";
import { FaCode, FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const router = useRouter();

    const toggleMenu = () => setIsOpen(!isOpen);

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "/assets/ufere_resume.pdf";
        link.download = "ufere_resume.pdf";
        link.click();
    };

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href.startsWith("#")) {
            const sectionId = href.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                const offset = 80;
                const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
            }
        }
        if (isOpen) toggleMenu();
    };

    useEffect(() => {
        const handleScrollEvent = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScrollEvent);

        // Detect section visibility
        const sections = document.querySelectorAll("section[data-theme]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const themeAttr = entry.target.getAttribute("data-theme");
                        if (themeAttr === "light" || themeAttr === "dark") {
                            setTheme(themeAttr);
                        }
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const isDark = theme === "dark";
    const navTextColor = isDark ? "text-white" : "text-gray-900";
    const iconColor = isDark ? "text-teal-300" : "text-teal-700";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "backdrop-blur-xl bg-white/10 shadow-lg border-b border-white/10"
                    : "bg-gradient-to-r from-indigo-900/70 to-teal-500/70"
                }`}
            style={{ height: "80px" }}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => router.push("/")}
                    className={`flex items-center gap-2 cursor-pointer ${navTextColor}`}
                >
                    <FaCode
                        className={`w-10 h-10 ${iconColor} drop-shadow-[0_0_10px_rgba(45,255,196,0.7)]`}
                    />
                    <a
                        href={"#hero"}
                        onClick={(e) => handleScroll(e, "#hero")}
                    >
                        <span className="font-bold text-lg tracking-wide">Ufere Dev</span>
                    </a>
                </motion.div>

                {/* Hamburger Icon */}
                <button
                    className={`md:hidden text-3xl ${navTextColor} hover:text-teal-300 focus:outline-none`}
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            onClick={(e) => handleScroll(e, href)}
                            whileHover={{ scale: 1.1, color: "#5eead4" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`relative ${navTextColor} font-medium after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all hover:after:w-full`}
                        >
                            {label}
                        </motion.a>
                    ))}
                    <motion.button
                        onClick={downloadCV}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors shadow-md shadow-teal-400/30"
                    >
                        <FaDownload className="w-4 h-4" />
                        CV
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="md:hidden absolute top-full left-0 w-full overflow-hidden border-t border-teal-400/30 shadow-lg"
                    >
                        <div className="relative bg-gradient-to-b from-indigo-950/95 to-teal-800/95 backdrop-blur-xl py-10 flex flex-col items-center space-y-6 overflow-hidden">
                            <div className="absolute inset-0 rounded-lg border-2 border-teal-400/20 animate-pulse blur-sm"></div>

                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                                }}
                                className="relative z-10 flex flex-col items-center space-y-6"
                            >
                                {navLinks.map(({ href, label }) => (
                                    <motion.li
                                        key={label}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        <a
                                            href={href}
                                            onClick={(e) => handleScroll(e, href)}
                                            className="text-lg text-white font-medium tracking-wide hover:text-teal-300 transition"
                                        >
                                            {label}
                                        </a>
                                    </motion.li>
                                ))}
                                <motion.li
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <button
                                        onClick={downloadCV}
                                        className="flex items-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-700 hover:text-teal-200 transition relative z-10"
                                    >
                                        <FaDownload className="w-5 h-5" />
                                        Download CV
                                    </button>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default memo(Navbar);
