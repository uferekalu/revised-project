"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";
import { useRouter } from "next/navigation";
import { FaCode, FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { href: "#skills", label: "Skills" },
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
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-foreground ${
        isScrolled
          ? "backdrop-blur-xl bg-background/70 shadow-md border-b border-border"
          : "bg-transparent"
      }`}
      style={{ height: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ rotate: 8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => router.push("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FaCode className="w-8 h-8 text-brand-500 dark:text-brand-400 drop-shadow-[0_0_10px_rgba(146,10,242,0.45)]" />
          <a href="#hero" onClick={(e) => handleScroll(e, "#hero")}>
            <span className="font-bold text-lg tracking-wide">Ufere Kalu</span>
          </a>
        </motion.div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-2xl hover:text-brand-500 dark:hover:text-brand-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <motion.a
              key={label}
              href={href}
              onClick={(e) => handleScroll(e, href)}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative font-medium text-foreground/80 hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all hover:after:w-full"
            >
              {label}
            </motion.a>
          ))}
          <ThemeToggle />
          <motion.button
            onClick={downloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-[var(--radius-sm)] shadow-md hover:shadow-glow transition-all"
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
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full overflow-hidden border-t border-border shadow-lg"
          >
            <div className="relative bg-background/95 backdrop-blur-xl py-10 flex flex-col items-center space-y-6">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
                }}
                className="relative z-10 flex flex-col items-center space-y-6"
              >
                {navLinks.map(({ href, label }) => (
                  <motion.li
                    key={label}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <a
                      href={href}
                      onClick={(e) => handleScroll(e, href)}
                      className="text-lg font-medium tracking-wide text-foreground hover:text-brand-500 dark:hover:text-brand-400 transition"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={downloadCV}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-[var(--radius-sm)] shadow-md hover:shadow-glow transition relative z-10"
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
