"use client";

import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCode, FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => setIsOpen(!isOpen);

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/kalu_ufere.pdf';
        link.download = 'cv.pdf';
        link.click();
    };

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    // Smooth scroll handler
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href.startsWith('#')) {
            const sectionId = href.substring(1); // Remove '#' to get the section ID
            const section = document.getElementById(sectionId);
            if (section) {
                const offset = 80; // Adjust for Navbar height (h-20 ≈ 80px)
                const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: sectionPosition - offset, behavior: 'smooth' });
            }
        }
        if (isOpen) {
            toggleMenu(); // Close mobile menu only if open
        }
    };

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 w-full bg-gradient-to-r from-indigo-900 to-teal-500 shadow-md z-50 h-20"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <FaCode
                    onClick={() => router.push('/')}
                    className="w-12 h-12 text-white hover:text-teal-200 transition-colors cursor-pointer"
                    aria-label="Go to homepage"
                />

                {/* Hamburger Icon for Mobile */}
                <button
                    className="md:hidden text-2xl text-white hover:text-teal-200 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={(e) => handleScroll(e, href)}
                            className="text-white hover:text-teal-200 transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                    <button
                        onClick={downloadCV}
                        className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 hover:text-teal-200 transition-colors"
                        aria-label="Download CV"
                    >
                        <FaDownload className="w-4 h-4" />
                        Download CV
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-gradient-to-r from-indigo-900 to-teal-500 shadow-md"
                >
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map(({ href, label }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={(e) => handleScroll(e, href)}
                                className="text-lg text-white hover:text-teal-200 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                        <button
                            onClick={downloadCV}
                            className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 hover:text-teal-200 transition-colors text-lg"
                            aria-label="Download CV"
                        >
                            <FaDownload className="w-5 h-5" />
                            Download CV
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default memo(Navbar);