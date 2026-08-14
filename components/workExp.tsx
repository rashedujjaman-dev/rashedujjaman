
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import ScrollReveal from "./ScrollReveal";

// type ExperienceItem = {
//   title?: string;
//   intro?: string;
//   skills: string;
//   paragraph?: string;
//   expertise?: string[];
//   closing?: string;
//   contact?: string;
//   description?: string;
//   image?: string;
// };

// const experienceItems: ExperienceItem[] = [
//   {
//     title: "Full-Stack JavaScript Developer",
//     description:
//       `I’m a results-driven Full-Stack JavaScript Developer specializing in Next.js, React, TypeScript, Tailwind CSS,  MongoDB, Mongoose, NextAuth and Stripe. I build high-performance, responsive, and scalable business websites, eCommerce platforms, and custom web applications. I combine clean architecture, modern UI/UX, secure functionality, and performance optimization to deliver reliable digital solutions that align with business goals.`,
//     image: "/images/work-expriences-1.png",
//   },


//   {
//   title: "Full-Stack JavaScript Developer",

//   intro:
//     "I’m a Full-Stack JavaScript Developer specializing in building modern, responsive, and scalable web applications using Next.js, React, TypeScript, Tailwind CSS, MongoDB, and Mongoose.",

//   paragraph:
//     "I help businesses, startups, and individuals turn ideas into high-quality digital products—from responsive landing pages and business websites to full-stack web applications, eCommerce platforms, and custom business solutions.",

//   expertise: [
//     "Next.js & React web application development",
//     "TypeScript-based scalable frontend development",
//     "Responsive UI development with Tailwind CSS",
//     "Backend and REST API development",
//     "MongoDB database integration with Mongoose",
//     "Authentication & authorization with NextAuth",
//     "Stripe payment and checkout integration",
//     "Business & eCommerce functionality",
//     "Performance, SEO, and responsive design optimization",
//     "Bug fixing, maintenance, and feature development",
//   ],

//   closing:
//     "I focus on writing clean, maintainable code and creating interfaces that are fast, intuitive, and user-friendly. My goal is not just to build websites, but to deliver reliable solutions that help clients achieve their business objectives.",

//   contact:
//     "If you have an idea, an existing application that needs improvement, or a project that needs a reliable developer, I’d be happy to discuss how I can help.",

//   image: "/images/work-expriences-2.png",
// },



//   {
//     title: "Work Experience",
//     description: `
//     I design and develop modern, responsive, and production-ready web applications for businesses, startups, and individual clients. I work across frontend and backend development to transform requirements and ideas into reliable digital solutions.

// Key Responsibilities

// "Develop full-stack applications using Next.js, React, TypeScript, Tailwind CSS, MongoDB and Mongoose "
// "Build responsive and user-friendly interfaces with Tailwind CSS."
// Develop REST APIs and backend functionality.
// Design and integrate MongoDB databases.
// Implement secure authentication and authorization systems.
// Integrate Stripe payment and checkout functionality.
// Build Businesses & eCommerce features including product management, cart, checkout, and order workflows.
// Optimize applications for performance, SEO, accessibility, and responsiveness.
// Debug existing applications and implement new features based on client requirements.
// Maintain clean, reusable, scalable, and production-ready code.`,
//     image: "/images/work-expriences-3.png",
//   },
//   {
//     title: "Technical Skills & Expertise",
//     skills: [
//     "JavaScript",
//     "TypeScript",
//     "React.js",
//     "Next.js",
//     "Node.js",
//     "Tailwind CSS",
//     "MongoDB",
//     "Mongoose",
//     "REST API",
//     "HTML5",
//     "CSS3",
//     "Git",
//     "GitHub",
//     "Stripe",
//     "NextAuth.js",
//     "Responsive Web Design",
//     "Full-Stack Development",
//     "Front-End Development",
//     "Back-End Development",
//     "E-Commerce Development",
//   ],

//     image: "/images/work-expriences-4.png",
//   },
// ];

// const WorkExperience = () => {
//   return (
//     <section
//       id="about"
//       className="max-w-7xl mx-auto px-5 md:px-15 relative py-24"
//     >
//       {/* glow effect */}
//       <div
//         className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2  w-[90vw] sm:w-190 md:w-250 h-70 sm:h-95 md:h-130 opacity-40 blur-3xl"
//         style={{
//           background:
//             "radial-gradient(60% 60% at 50% 0%, rgba(168,85, 247, 0.6) 0%, rgba(126,34, 206, 0.0) 70%)",
//         }}
//       />
//       <div>
//         <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-8">
//           Work Exprience
//         </h3>

//         <ScrollReveal
//           stagger={0.15}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8"
//         >
//           {experienceItems.map((item, index) => (
//             <article
//               key={index}
//               className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 not-dark:bg-white  bg-[#140a26] border border-gray-200 shadow-[0_10px_40px_rgba(113, 39, 186, 0.25)] transition-all duration-300 hover:-translate-y-1 md:-translate-y-2 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113, 39, 186, 0.40)]"
//             >
//               {/* card gradient */}
//               <div
//                 className="pointer-events-none absolute inset-0 rounded-2xl  opacity-70 transition-opacity duration-300 group-hover:opacity-90"
//                 style={{
//                   background:
//                     "radial-gradient(120% 80% at 80% 10%, rgba(125,58, 242, 0.35) 0%, rgba(126,58, 242, 0.15) 25%), rgba(18, 8, 36, 0) 60%",
//                 }}
//               ></div>

//               <div className="relative  flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
//                 {/* icon */}
//                 <div className="relative shrink-0 w-16 h-16 sm:size-20 md:size-24 transition-transform duration-300 group-hover:-translate-y-1">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-contain drop-shadow-[0_8px_24px_rgba(113, 39, 186, 0.35)]"
//                     priority
//                   />
//                 </div>

//                 {/* text content */}
//                 <div>
                 
//   <p>{item.intro}</p>

//   <p>{item.paragraph}</p>

//   <div>
//     <p className="mb-3 font-semibold">My expertise includes:</p>

//     <ul className="space-y-2">
//       {item.expertise.map((skill, index) => (
//         <li key={index} className="flex items-start gap-3">
//           <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />

//           <span>{skill}</span>
//         </li>
//       ))}
//     </ul>
//   </div>

//   <p>{item.closing}</p>

//   <p>{item.contact}</p>

//                   <div className="mt-4 flex justify-center sm:justify-start">
//                     <Link
//                       href="#"
//                       className="inline-flex items-center text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors"
//                     >
//                       Learn More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;




// <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mt-4 mb-2">
//                     {" "}
//                     {item.title}
//                   </h4>
//                   <p className="mt-2 text-xs md:text-sm text-white/60 max-w-sm mx-auto sm:mx-0">
//                     {item.description}
//                   </p>