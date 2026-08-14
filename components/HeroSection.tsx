
"use client";

import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { Typewriter } from "react-simple-typewriter";
import PhotoHero from "./PhotoHero";
import SocialLinks from "./SocialLinks";
import { LuMoveRight } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto relative pt-28 pb-24 px-5 md:px-15">
      <div className="mt-12 md:mt-24">
        {/* avatar and headline */}
        <ScrollReveal
          stagger={0.12}
          className="flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          {/* avatar and greetings */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-7 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] vai-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
              <PhotoHero />

              {/* small greeting with curve arrow */}
              <div className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-54 text-xs text-white/70">
                <div className="relative flex items-center justify-end">
                  <div className="relative w-16 h-6 md:w-22 md:h-22">
                    <Image
                      src="/images/hero-arrow.png"
                      alt="arrow image"
                      fill
                      className="object-contain scale-x-100 -rotate-2"
                      priority
                    />
                  </div>
                  <div className=" text-3xl -mt-5 md:-mt-10 shrink-0">
                    <span className=" not-dark:text-slate-500 ">Hello! I am </span>
                    <span className="text-[#a78bfa]">Rashedujjaman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* headline */}
          <div className="md:pl-2 text-center md:text-left">
            <p className="text-2xl md:text-2xl mb-8">
              Full-stack JavaScript developer| I specialize in building strong focus, SEO-friendly, fully responsive web applications & Superior Software for Leading Businesses using Next.js, React, TypeScript, Tailwind CSS, MongoDB & Mongoose.
            </p>

            <h1 className="text-2xl sm:text-2xl font-normal tracking-tight leading-[1.15] not-dark:text-slate-600 text-slate-300">
              <span className="block"> Building modern, responsive & </span>
              <span className="block">
                high-converting web apps & websites for{" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#7127BA]">
                    global businesses
                  </span>
                  <span className="pointer-events-none absolute -inset-x-2  -inset-y-2 translate-y-1 -z-10 rotate-12">
                    <Image
                      src="/images/ellipse.png"
                      alt="arrow"
                      fill
                      className="object-contain"
                      priority
                    />
                  </span>
                </span>
                ...
              </span>
            </h1>

            <p className="mt-8  text-base md:text-lg not-dark:text-slate-600 text-slate-300 max-w-md md:max-w-lg mx-auto md:mx-0">
              full-stack web developer with a strong focus on modern JavaScript
              ecosystems. I specialize in building fast, SEO-friendly, and fully
              responsive web applications using Next.js, React, TypeScript, Tailwind CSS, MongoDB & Mongoose.
            </p>
          </div>
        </ScrollReveal>

        {/* role and description */}
        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            <Typewriter
              words={[
                "I'm a Full Stack Developer.",
                "I'm a Tech Enthusiast.",
                "Building modern & responsive Web Apps & websites.",
              ]}
              typeSpeed={65}
              deleteSpeed={0}
              delaySpeed={600}
              cursor
              cursorStyle="|"
              loop={1}
            />
          </h2>
          <div className="flex items-center justify-center gap-3 py-5 ">
            <p>Currently, I'm a Full-stack JavaScript developer at </p>
              <LuMoveRight size={30} />           
            <SocialLinks />
          </div>

          <p className="mt-6 not-dark:text-slate-600 text-slate-300 leading-7">
           Build full-featured web apps (e-commerce, dashboards, financial tools). Clean, maintainable, and scalable code with TypeScript. ImplementAuthentication systems with NextAuth.js, OAuth & JWT.Optimize images & media management with Cloudinary. Database modeling using Mongoose & MongoDB. 100% responsive design — flawless on mobile, tablet, and desktop. SEO-optimized architecture for better search engine ranking.  I ensure your site runs smoothly.
           </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
