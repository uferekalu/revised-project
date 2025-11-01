"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaTelegramPlane, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contactOptions = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "+2348130149426",
      href: "tel:+2348130149426",
      color: "text-blue-600",
    },
    {
      icon: FaTelegramPlane,
      label: "Telegram",
      value: "@IntelligentProgrammer",
      href: "https://t.me/IntelligentProgrammer",
      color: "text-sky-500",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+2348130149426",
      href: "https://wa.me/+2348130149426",
      color: "text-green-600",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "uferekalu.dev@gmail.com",
      href: "mailto:uferekalu.dev@gmail.com",
      color: "text-amber-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-8"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-lg text-gray-200 max-w-2xl mx-auto mb-12"
        >
          Have a project idea or need a developer for collaboration? Reach out
          and let’s make something impactful together.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {contactOptions.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all rounded-xl p-5 backdrop-blur-md border border-white/10 group"
              >
                <Icon className={`w-8 h-8 ${color} group-hover:scale-110 transition-transform`} />
                <div>
                  <p className="text-sm text-gray-200 font-semibold uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-white text-lg font-medium">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white text-gray-900 rounded-xl shadow-lg p-6 sm:p-8 space-y-5"
          >
            <h3 className="text-2xl font-bold mb-3 text-center">
              Send a Message
            </h3>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-700 to-cyan-500 text-white rounded-md font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
