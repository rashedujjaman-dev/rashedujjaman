import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import { FaX } from 'react-icons/fa6'
import SocialLinks from './SocialLinks'

const ContactSection = () => {
  return (
    <section id="contact" className='max-w-7xl mx-auto px-5 md:px-15 py-10 relative'>
        <ScrollReveal stagger={0.08}>
            <h3 className='text-2xl md:text-3xl font-semibold text-slate-400  not-dark:text-slate-600 mb-6'>Contact</h3>
            <p className='text-sm text-slate-400  not-dark:text-slate-600 max-w-xl'>Have a project in mind or need a modern, high-performing website? Let’s connect and turn your ideas into a powerful digital experience.</p>
            {/* <div className='mt-6 text-slate-400  not-dark:text-slate-600'>
                <Link href="sincere.team@yahoo.com" className='hover:text-[#a855f7]'>sincere.team@yahoo.com</Link>
            </div> */}

            <div className='mt-5 flex items-center gap-4 text-white/80'>
               <SocialLinks />
            </div>
        </ScrollReveal>
    </section>
  )
}

export default ContactSection