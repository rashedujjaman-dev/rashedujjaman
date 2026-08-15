
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
    title: "Shoplix — E-commerce",
    category: "E-COMMERCE",
    description:
      "A modern full-stack e-commerce platform with authentication, product management, shopping cart, checkout and secure online payment.",
    image: "images/shoplix.png",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Stripe"],
    link: "https://food-flavor-smoky.vercel.app/",
  },
  {
    title: "E-commerce Made - E-commerce Platform",
    category: "E-commerce",
    description:
      "A full-stack financial management platform for subscription management, payment tracking, savings and financial reporting.",
    image: "images/ecommercemade.png",
    technologies: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    link: "#",
  },
  {
    title: "ClassyBuy — A modern E-COMMERCE",
    category: "E-COMMERCE",
    description:
      "A modern e-commerce dashboard for managing products, orders, users, categories and business analytics from one place.",
    image: "images/classybuy.png",
    technologies: ["Next.js", "React", "Tailwind", "MongoDB"],
    link: "#",
  },
  {
    title: "Raj Furniture A modern E-COMMERCE Website",
    category: "E-COMMERCE",
    description:
      "A modern e-commerce platform with authentication, product management, shopping cart, checkout and secure online payment.",
    image: "images/rajfurniture.png",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Stripe"],
    link: "https://stellular-dragon-7999f8.netlify.app/",
  },
  {
    title: "Food Flavor - A modern E-COMMERCE Website",
    category: "E-COMMERCE",
    description:
      "A modern e-commerce  for managing products, orders,  categories and business analytics from one place.",
    image: "images/foodflavor.png",
    technologies: ["React",   "Tailwind"],
    link: "https://food-flavor-smoky.vercel.app/",
  }, 
  {
    title: "Raj Plus - E-COMMERCE web applications ",
    category: "E-COMMERCE",
    description:
      "A modern e-commerce  for managing products, orders,  categories and business analytics from one place.",
    image: "images/rajplus.png",
    technologies: ["JavaScript",  "Css"],
    link: "https://slideshow-brown.vercel.app",
  },
];

const SelectedWorks = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-5 md:px-15 py-16"
    >
      <div className="max-w-375">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-wide text-violet-600 dark:text-violet-500 sm:text-3xl">
            Selected Works
          </h2>

          <p className="mt-3 max-w-287.5 text-sm leading-7 not-dark:text-slate-600 text-slate-300 sm:text-base">
            A collection of real-world Next.js, React, TypeScript, Tailwind CSS, NextAuth, MongoDB & Mongoose full-stack projects The application is optimized for speed, scalability, SEO Friendly, and a smooth experience across desktop, tablet, and mobile devices, production-ready systems, and custom
            internal tools built with modern technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-15  md:grid-cols-2 ">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative  pt-0"
            >
              {/* Popup menu */}
              <div
                className="
                  pointer-events-none absolute
                  -bottom-57.5 left-1/2 z-20
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
                <div className="rounded-2xl border border-violet-200 bg-[#0b0416] p-5 shadow-[0_20px_60px_rgba(91,33,182,0.18)] backdrop-blur-md">
                  {/* Category */}
                  <p className="text-xs font-semibold tracking-widest text-violet-600">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-bold text-slate-400">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-violet-200 bg-violet-300 px-3 py-1 text-xs font-medium text-violet-800"
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
                      bg-violet-950
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
                <div className="relative w-full overflow-hidden">
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
                      bg-linear-to-t
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

                  <a
                    href={project.link}
                    className="
                      md:hidden flex h-10 w-10 shrink-0
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
                  </a>
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
