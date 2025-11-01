"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, delay: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.5, },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 text-gray-800 overflow-hidden"
    >
      {/* 🌊 Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-200/30 via-transparent to-transparent"></div>

      {/* ✨ Floating Decorative Orbs */}
      <div className="absolute top-10 left-16 w-48 h-48 bg-cyan-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-16 right-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-float"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12"
      >
        {/* 💬 Text Section */}
        <motion.div variants={itemVariants} className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Who I Am
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I’m <span className="font-semibold text-cyan-600">Ufere Kalu</span>,
            a passionate <span className="font-semibold">Full Stack Developer</span> and{" "}
            <span className="font-semibold">Data Analyst</span> with a deep focus on
            building scalable, efficient, and beautiful digital solutions. I enjoy
            transforming complex problems into seamless experiences — from backend
            systems to front-end interfaces.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I have experience across a wide range of technologies — from
            <span className="font-semibold text-indigo-600"> React, Next.js, and
            TypeScript</span> on the frontend, to <span className="font-semibold text-cyan-600">NestJS, Node.js, and
            MongoDB</span> on the backend. My goal is to create elegant,
            performant, and intuitive applications that make an impact.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            When I’m not coding, I enjoy <span className="font-semibold text-indigo-600">analyzing data</span>,
            exploring new technologies, and contributing to open-source projects
            that inspire innovation and collaboration.
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all font-semibold"
          >
            View My Projects
          </motion.a>
        </motion.div>

        {/* 🧑‍💻 Image / Visual Section */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <Image
              src="/assets/profile.jpeg"
              alt="Ufere Kalu"
              fill
              className="object-cover rounded-full border-4 border-white shadow-2xl"
              priority
            />
          </div>

          {/* Floating icons */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-0 right-10 bg-white/80 text-cyan-600 p-3 rounded-full shadow-lg"
          >
            💡
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-6 left-10 bg-white/80 text-indigo-600 p-3 rounded-full shadow-lg"
          >
            ⚙️
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
