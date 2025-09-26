"use client";

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, href: 'https://x.com/lushak_tech', label: 'Twitter' },
    { icon: FaFacebookF, href: 'https://www.facebook.com/share/17XuC19WuV/', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/kaluuferekalu?utm_source=qr&igsh=MXYzdmx0Z21mOHh3ZQ==', label: 'Instagram' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bottom-0 w-full bg-gradient-to-r from-indigo-900 to-teal-500 shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 text-white">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Lushak Communication
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Footer);