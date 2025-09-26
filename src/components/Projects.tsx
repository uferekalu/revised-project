"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaEye } from 'react-icons/fa';
import { projectsData } from '@/data/projectData';

const Projects = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 },
        },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
    };

    return (
        <section id="projects" className="bg-gradient-to-r from-blue-600 to-cyan-400 py-16 px-4 sm:px-6 pb-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                        >
                            {/* Project Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-all duration-300 group-hover:blur-sm"
                            />

                            {/* Hover Overlay */}
                            <motion.div
                                variants={overlayVariants}
                                initial="hidden"
                                animate="hidden"
                                whileHover="visible"
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                            >
                                <motion.div
                                    variants={contentVariants}
                                    className="text-center text-white p-6"
                                >
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                                    <div className="flex justify-center gap-4">
                                        {project.gitUrl && (
                                            <a
                                                href={project.gitUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-cyan-200 transition-colors"
                                                aria-label={`View ${project.title} on GitHub`}
                                            >
                                                <FaGithub className="w-6 h-6" />
                                            </a>
                                        )}
                                        {project.previewUrl && (
                                            <a
                                                href={project.previewUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-cyan-200 transition-colors"
                                                aria-label={`Preview ${project.title}`}
                                            >
                                                <FaEye className="w-6 h-6" />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;