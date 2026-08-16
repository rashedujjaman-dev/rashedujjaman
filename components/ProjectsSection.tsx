import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

const ProjectsSection = () => {
  return (
    <section id="projects" className='relative py-28 space-y-24 max-w-7xl mx-auto px-5 md:px-15'>
        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-105 opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.12} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='relative -pl-50 z-10'>
                    {/* heading */}
                    <div className='mb-12'>
                        <p className='text-xl font-semibold text-violet-600 dark:text-violet-400'>Featured Project</p>
                        <h3 className='text-2xl md:text-3xl font-semibold  text-slate-600 dark:text-slate-50'>Example Project</h3>
                    </div>

                    {/* description */}
                    <div className='relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 border dark:border-[#2f1c55] dark:bg-[#140a26]  bg-violet-100 border-violet-200 backdrop-blur-sm  shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>
                        <p className='text-sm p-4 text-slate-600 dark:text-violet-400'>A sleek, modern e-commerce and Business platform built with Next.js, React, TypeScript, Tailwind CSS, MongoDB & Mongoose. It delivers a fast, responsive, and seamless shopping experience with dynamic products, smart filtering, secure authentication, cart management, and smooth checkout. Built with clean architecture, reusable components, and scalable backend functionality, this project combines modern design, powerful performance, and real-world functionality to create a professional, production-ready web experience.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-start space-x-3 '>
                        <span className='text-slate-600 dark:text-slate-50'>*</span>
                        <span className='text-slate-600 dark:text-slate-50'>*</span>
                    </div>
                </div>

                {/* project image */}
                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden border dark:border-[#2f1c55] dark:bg-[#140a26]  bg-violet-100 border-violet-200 shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-90'>
                            <Image src="/images/portfolio-picmymyWT.webp" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:translate-y-[-55%] group-active:translate-y-[-55%] group-focus:translate-y-[-55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-105 opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.14} delay={0.8} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                {/* text content */}
                <div className='relative md:order-2 z-10'>
                    {/* heading */}
                    <div className='mb-12 text-right'>
                        <p className='text-xl font-semibold text-violet-600 dark:text-violet-400'>Featured Project</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-50'>Example Project</h3>
                    </div>

                    {/* description */}
                    <div className='relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 border dark:border-[#2f1c55] dark:bg-[#140a26]  bg-violet-100 border-violet-200  backdrop-blur-sm  shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>
                        <p className='text-sm p-4 text-slate-600 dark:text-violet-400 '>A modern, high-performance e-commerce web application built with Next.js, React, TypeScript, Tailwind CSS, MongoDB and Mongoose. The platform features a responsive and user-friendly interface, product browsing, category filtering, shopping cart, secure authentication, and seamless checkout functionality. A powerful backend manages products, users, orders, and dynamic data efficiently through MongoDB. The application is optimized for speed, scalability, SEO, and a smooth experience across desktop, tablet, and mobile devices. Designed with clean, reusable components and modern development practices, this project demonstrates my ability to transform business requirements into professional, scalable, and production-ready full-stack web applications.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-end space-x-3 text-white/60'>
                        <span className='text-slate-600 dark:text-slate-50'>*</span>
                        <span className='text-slate-600 dark:text-slate-50'>*</span>
                    </div>
                </div>

                {/* project image */}
                <div className='relative md:order-1'>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden md:h-90 h-62.5'>
                            <Image src="/images/portfolio-picmymy.webp" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:translate-y-[-55%] group-active:translate-y-[-55%] group-focus:translate-y-[-55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  )
}

export default ProjectsSection