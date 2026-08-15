import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

const TechStack = () => {
  return (
    <section id='lab' className='relative py-28'>
        <ScrollReveal stagger={0.08} className='text-center'>
            <p className='text-slate-700 dark:text-slate-400  mb-6'>I’m currently looking to join a <span className='text-[#a855f7]'>cross-functional</span> team</p>
            <p className='text-slate-700 dark:text-slate-400  text-sm mb-16'>that values improving people’s lives through accessible developing</p>

            <div className='relative max-w-4xl mx-auto w-full'>
                <Image
                src='/images/skills-section.png'
                alt='tech stack'
                width={1280}
                height={920}
                className='w-full h-auto'
                priority
                />
            </div>
        </ScrollReveal>
    </section>
  )
}

export default TechStack