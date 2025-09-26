"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactDetails = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+2348130149426',
      href: 'tel:+2348130149426',
    },
    {
      icon: FaTelegramPlane,
      label: 'Telegram',
      value: '@IntelligentProgrammer',
      href: 'https://t.me/IntelligentProgrammer',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+2348130149426',
      href: 'https://wa.me/+2348130149426',
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">
            Reach out to discuss projects, collaborations, or opportunities!
          </p>
          <div className="grid grid-cols-1 gap-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-yellow-100/50 hover:bg-yellow-200/70 rounded-md transition-colors"
                aria-label={`Contact via ${label}`}
              >
                <Icon className="w-6 h-6 text-yellow-700" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">{label}</p>
                  <p className="text-base text-gray-700">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;