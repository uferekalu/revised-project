"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/share/17XuC19WuV/", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/kaluuferekalu?utm_source=qr", label: "Instagram" },
    { icon: FaTwitter, href: "https://x.com/lushak_tech", label: "Twitter" },
  ];

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Brand Gradient Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#17142b,#43104f,#920af2,#43104f)] animate-gradient-flow opacity-95" />

      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.9 82.38-16.37 168.19-17.15 250.45-.39C939.9 34.11 1052 70.88 1200 92.08V0H0v27.35c101.64 48.77 214.79 53.44 321.39 29.09z"
            fill="url(#footer-wave-gradient)"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="footer-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#17142b" />
              <stop offset="50%" stopColor="#920af2" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-left space-y-3"
        >
          <h3 className="text-2xl font-bold tracking-wide">Ufere Kalu</h3>
          <p className="text-white/70 text-sm max-w-md leading-relaxed">
            Full Stack Developer &amp; Data Analyst — building scalable
            software, elegant interfaces, and data-driven products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex gap-6"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg backdrop-blur-md"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-white/10 pt-5 pb-8 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Ufere Kalu</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
