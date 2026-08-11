
"use client";

import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Shoplix — Full Stack E-commerce",
    category: "E-COMMERCE",
    description:
      "A modern full-stack e-commerce platform with authentication, product management, shopping cart, checkout and secure online payment.",
    image: "images/github-cover.png",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Stripe"],
    link: "https://food-flavor-smoky.vercel.app/",
  },
  {
    title: "Taqwa Savings — Financial Web App",
    category: "FINANCIAL PLATFORM",
    description:
      "A full-stack financial management platform for subscription management, payment tracking, savings and financial reporting.",
    image: "/projects/taqwa.png",
    technologies: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    link: "#",
  },
  {
    title: "Tarnix — Admin Dashboard",
    category: "ADMIN DASHBOARD",
    description:
      "A modern e-commerce dashboard for managing products, orders, users, categories and business analytics from one place.",
    image: "/projects/tarnix.png",
    technologies: ["Next.js", "React", "Tailwind", "MongoDB"],
    link: "#",
  },
  {
    title: "fgfdgfdg",
    category: "E-COMMERCE",
    description:
      "A modern full-stack e-commerce platform with authentication, product management, shopping cart, checkout and secure online payment.",
    image: "images/github-cover.png",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Stripe"],
    link: "https://food-flavor-smoky.vercel.app/",
  },
  {
    title: "fgfgfg",
    category: "FINANCIAL PLATFORM",
    description:
      "A full-stack financial management platform for subscription management, payment tracking, savings and financial reporting.",
    image: "/projects/taqwa.png",
    technologies: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    link: "#",
  },
  {
    title: "fgfdgdfggdfg",
    category: "sdwerwerwr",
    description:
      "A modern e-commerce dashboard for managing products, orders, users, categories and business analytics from one place.",
    image: "/projects/tarnix.png",
    technologies: ["Next.js", "React", "Tailwind", "MongoDB"],
    link: "#",
  },
];

const SelectedWorks = () => {
  return (
    <section
      id="projects"
      className="w-full bg-[#f9f8ff] px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-wide text-[#5b21b6] sm:text-3xl">
            Selected Works
          </h2>

          <p className="mt-3 max-w-[1150px] text-sm leading-7 text-slate-600 sm:text-base">
            A collection of real-world Next.js full-stack projects showcasing
            scalable web applications, production-ready systems, and custom
            internal tools built with modern technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative pt-0"
            >
              {/* Popup */}
              <div
                className="
                  pointer-events-none absolute
                  -bottom-50 left-1/2 z-20
                  w-[calc(100%-24px)]
                  -translate-x-1/2
                  translate-y-6
                  opacity-0
                  transition-all duration-500
                  ease-out
                  group-hover:pointer-events-auto
                  group-hover:-translate-y-[calc(100%-10px)]
                  group-hover:opacity-100
                "
              >
                <div className="rounded-2xl border border-violet-200 bg-white/95 p-5 shadow-[0_20px_60px_rgba(91,33,182,0.18)] backdrop-blur-md">
                  {/* Category */}
                  <p className="text-xs font-semibold tracking-widest text-violet-700">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  
                    <a
                    href={project.link}
                    className="
                      mt-5 flex w-fit items-center  gap-2
                      text-sm font-semibold rounded-3xl bg-violet-700 text-white
                      transition-colors px-10 py-3 
                      hover:bg-violet-800
                    "
                  >
                   Live Demo
                    <LuArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                  

                  {/* Small arrow */}
                  <div
                    className="
                      absolute -bottom-2 left-1/2
                      h-4 w-4 -translate-x-1/2
                      rotate-45 border-b border-r
                      border-violet-200
                      bg-white
                    "
                  />
                </div>
              </div>

              {/* Image Card */}
              <div
                className="
                  relative overflow-hidden rounded-[20px]
                  border border-violet-100
                  bg-white
                  shadow-sm
                  transition-all duration-500
                  group-hover:-translate-y-1
                  group-hover:shadow-[0_20px_50px_rgba(91,33,182,0.16)]
                "
              >
                {/* Image */}
                <div className="relative aspect-[1.80/1] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full w-full object-cover
                      transition-transform duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/20 via-transparent to-transparent
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Project number */}
                  <div
                    className="
                      absolute right-4 top-4
                      flex h-9 w-9 items-center justify-center
                      rounded-full
                      bg-white/90
                      text-xs font-bold text-violet-700
                      shadow-sm backdrop-blur
                    "
                  >
                    0{index + 1}
                  </div>
                </div>

                {/* Bottom content */}
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      {project.category}
                    </p>

                    <h3 className="mt-1 line-clamp-1 text-base font-bold text-slate-900">
                      {project.title}
                    </h3>
                  </div>

                  <div
                    className="
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-violet-50
                      text-violet-700
                      transition-all duration-300
                      group-hover:bg-violet-700
                      group-hover:text-white
                    "
                  >
                    <LuArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;