"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaEye } from "react-icons/fa";
import { projectsData } from "@/data/projectData";

const ITEMS_PER_PAGE = 4;
const categories = ["All", "Web", "Mobile", "API"];

const Projects = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleTap = (projectId: number) => {
    const idStr = String(projectId);
    setActiveCard((prev) => (prev === idStr ? null : idStr));
  };

  // 🔍 Filtering, Searching, Sorting
  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projectsData
      .filter((p) =>
        activeCategory === "All" ? true : p.tag.includes(activeCategory)
      )
      .filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

    switch (sortBy) {
      case "title-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "date-newest":
        filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "date-oldest":
        filtered.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
    }

    return filtered;
  }, [searchQuery, sortBy, activeCategory]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredAndSortedProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredAndSortedProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 transition-colors duration-500
      bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] 
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-200"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-10"
        >
          My Projects
        </motion.h2>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full border text-sm font-medium backdrop-blur-md transition-all ${
                activeCategory === cat
                  ? "bg-cyan-400 text-black font-semibold shadow-lg"
                  : "border-white/30 text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-1/2 px-4 py-2 rounded-lg border border-white/30 bg-white/20 dark:bg-gray-800/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300 backdrop-blur-md"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-white/30 bg-white dark:bg-gray-800/40 text-black-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 backdrop-blur-md"
          >
            <option value="title-asc">Title (A - Z)</option>
            <option value="title-desc">Title (Z - A)</option>
            <option value="date-newest">Date (Newest)</option>
            <option value="date-oldest">Date (Oldest)</option>
          </select>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {paginatedProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer 
              bg-white/15 dark:bg-gray-800/40 backdrop-blur-md 
              border border-white/20 dark:border-gray-700 transition-all"
              onTap={() => handleTap(project.id)}
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center text-white p-6"
                >
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                  <p className="text-xs text-gray-300 mb-3">
                    {new Date(project.date).toISOString().split("T")[0]}
                  </p>
                  <div className="flex justify-center gap-6">
                    {project.gitUrl && (
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-300 transition"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.previewUrl && (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-300 transition"
                      >
                        <FaEye className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Card Info */}
              <div className="p-5 text-white">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg text-white/80 hover:text-white bg-white/20 hover:bg-white/30 disabled:opacity-40 transition"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === i + 1
                    ? "bg-cyan-400 text-black font-bold shadow-md"
                    : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg text-white/80 hover:text-white bg-white/20 hover:bg-white/30 disabled:opacity-40 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
