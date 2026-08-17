import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollReveal from "./ScrollReveal";

type ExperienceItem = {
  title: string;
  description?: string;
  intro?: string;
  paragraph?: string;
  expertise?: string[];
  skills?: string[];
  closing?: string;
  contact?: string;
  image: string;
};

const experienceItems: ExperienceItem[] = [
  {
    title: "Full-Stack JavaScript Developer",
    description:
      "I’m a results-driven Full-Stack JavaScript Developer specializing in Next.js, React, TypeScript, Tailwind CSS, MongoDB, Mongoose, NextAuth, and Stripe. I build high-performance, responsive, and scalable business websites, eCommerce platforms, and custom web applications. I combine clean architecture, modern UI/UX, secure functionality, and performance optimization to deliver reliable digital solutions that align with business goals.",
    image: "/images/work-expriences-1.png",
  },

  {
    title: "Web Application Development",

    intro:
      "I’m a Full-Stack JavaScript Developer specializing in building modern, responsive, and scalable web applications using Next.js, React, TypeScript, Tailwind CSS, MongoDB, and Mongoose.",

    paragraph:
      "I help businesses, startups, and individuals turn ideas into high-quality digital products—from responsive landing pages and business websites to full-stack web applications, eCommerce platforms, and custom business solutions.",

    expertise: [
      "Next.js & React web application development",
      "TypeScript-based scalable frontend development",
      "Responsive UI development with Tailwind CSS",
      "Backend and REST API development",
      "MongoDB database integration with Mongoose",
      "Authentication & authorization with NextAuth",
      "Stripe payment and checkout integration",
      "Business & eCommerce functionality",
      "Performance, SEO, and responsive design optimization",
      "Bug fixing, maintenance, and feature development",
    ],

    closing:
      "I focus on writing clean, maintainable code and creating interfaces that are fast, intuitive, and user-friendly. My goal is not just to build websites, but to deliver reliable solutions that help clients achieve their business objectives.",

    contact:
      "If you have an idea, an existing application that needs improvement, or a project that needs a reliable developer, I’d be happy to discuss how I can help.",

    image: "/images/work-expriences-2.png",
  },

  {
    title: "Work Experience",

    description: `I design and develop modern, responsive, and production-ready web applications for businesses, startups, and individual clients. I work across frontend and backend development to transform requirements and ideas into reliable digital solutions.`,

    expertise: [
      "Develop full-stack applications using Next.js, React, TypeScript, Tailwind CSS, MongoDB, and Mongoose.",
      "Build responsive and user-friendly interfaces with Tailwind CSS.",
      "Develop REST APIs and backend functionality.",
      "Design and integrate MongoDB databases.",
      "Implement secure authentication and authorization systems.",
      "Integrate Stripe payment and checkout functionality.",
      "Build business and eCommerce features including product management, cart, checkout, and order workflows.",
      "Optimize applications for performance, SEO, accessibility, and responsiveness.",
      "Debug existing applications and implement new features based on client requirements.",
      "Maintain clean, reusable, scalable, and production-ready code.",
    ],

    image: "/images/work-expriences-3.png",
  },

  {
    title: "Technical Skills & Expertise",

    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Git",
      "GitHub",
      "Stripe",
      "NextAuth.js",
      "Business Development",
      "Responsive Web Design",
      "Full-Stack Development",
      "Front-End Development",
      "Back-End Development",
      "E-Commerce Development",
    ],

    image: "/images/work-expriences-4.png",
  },
];

const WorkExperience = () => {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-5 py-24 md:px-15"
    >
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-70 w-[90vw] -translate-x-1/2 opacity-40 blur-3xl sm:h-95 sm:w-190 md:h-130 md:w-250"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(168,85,247,0.6) 0%, rgba(126,34,206,0) 70%)",
        }}
      />

      <div className="relative">
        <h3 className="mb-8 text-2xl font-semibold text-violet-600 dark:text-violet-500 md:text-3xl">
          Work Experience
        </h3>

        <ScrollReveal
          stagger={0.15}
          className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8"
        >
          {experienceItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border dark:border-[#2f1c55] dark:bg-[#140a26] dark:border-[#2f1c55] bg-violet-100 border-violet-200 p-5 shadow-[0_10px_40px_rgba(113,39,186,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113,39,186,0.40)] md:p-7"
            >
              {/* Card Gradient */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background:
                    "radial-gradient(120% 80% at 80% 10%, rgba(125,58,242,0.35) 0%, rgba(126,58,242,0.15) 25%, rgba(18,8,36,0) 60%)",
                }}
              />

              <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 md:gap-8">
                {/* Image */}
                <div className="relative h-16 w-16 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 sm:h-20 sm:w-20 md:h-24 md:w-24">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-[0_8px_24px_rgba(113,39,186,0.35)]"
                    priority={index < 2}
                  />
                </div>

                {/* Content */}
                <div className="w-full">
                  <h4 className="mt-2 mb-3 text-center text-base font-semibold text-slate-700 dark:text-slate-400  sm:text-left sm:text-lg md:text-xl">
                    {item.title}
                  </h4>

                  {/* Description */}
                  {item.description && (
                    <p className=" text-lg md:text-base leading-6 text-slate-700 dark:text-slate-400 ">
                      {item.description}
                    </p>
                  )}

                  {/* Intro */}
                  {item.intro && (
                    <p className="text-center text-base leading-6 text-slate-700 dark:text-slate-400   ">
                      {item.intro}
                    </p>
                  )}

                  {/* Paragraph */}
                  {item.paragraph && (
                    <p className="mt-3 text-center text-base 
                    leading-6 text-slate-700 dark:text-slate-400  sm:text-left ">
                      {item.paragraph}
                    </p>
                  )}

                  {/* Expertise */}
                  {item.expertise && item.expertise.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-3 text-lg font-semibold text-slate-700 dark:text-slate-400  md:text-lg">
                        {item.title === "Work Experience"
                          ? "Key Responsibilities"
                          : "My Expertise Includes"}
                      </p>

                      <ul className="space-y-2">
                        {item.expertise.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="flex items-start gap-3 text-base leading-5 text-slate-700 dark:text-slate-400 "
                          >
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills */}
                  {item.skills && item.skills.length > 0 && (
                    <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {item.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="flex items-center gap-3 text-base text-slate-700 dark:text-slate-400  "
                        >
                          <span className="h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Closing */}
                  {item.closing && (
                    <p className="mt-4 text-base leading-6 text-slate-700 dark:text-slate-400  ">
                      {item.closing}
                    </p>
                  )}

                  {/* Contact */}
                  {item.contact && (
                    <p className="mt-3 text-base leading-6 text-slate-700 dark:text-slate-400  ">
                      {item.contact}
                    </p>
                  )}

                  {/* Learn More */}
                  <div className="mt-5 flex justify-center sm:justify-start">
                    <Link
                      href="#"
                      className="inline-flex items-center rounded-full border border-[#3e1d6d] bg-[#1a0c2e] px-4 py-1.5 text-[11px] text-white/80 transition-colors hover:border-[#a855f7] hover:bg-[#220e3d] hover:text-white md:text-xs"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkExperience;