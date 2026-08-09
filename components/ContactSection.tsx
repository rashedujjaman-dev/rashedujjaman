import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import { FaX } from 'react-icons/fa6'

const ContactSection = () => {
  return (
    <section id="contact" className='py-24 relative'>
        <ScrollReveal stagger={0.08}>
            <h3 className='text-2xl md:text-3xl font-semibold text-white/90 mb-7'>Contact</h3>
            <p className='text-sm text-white/60 max-w-xl'>I’m currently looking to join a cross-functional team that values improving people’s lives through accessible design, or have a project in mind? Let’s connect.</p>
            <div className='mt-6 text-white/80'>
                <Link href="mailto:hello@codetutorbd.com" className='hover:text-[#a855f7]'>sincere.team@outlook.com</Link>
            </div>

            <div className='mt-6 flex items-center gap-4 text-white/80'>
                <Link href="https://www.linkedin.com/in/rashedujjaman-dev" target="_blank" rel="noopener noreferrer" className='hover:text-[#a855f7]'>
                <FaLinkedin className='size-5'/>
                </Link>

                <Link href="https://x.com/rashedjaman_dev" target="_blank" rel="noopener noreferrer" className='hover:text-[#a855f7]'>           
                <FaX />
                </Link>

                <Link href="http://facebook.com./rashedujjaman.dev" target="_blank" rel="noopener noreferrer" className='hover:text-[#a855f7]'>
                <FaFacebook className=' size-5'/>       
                </Link>

            </div>
        </ScrollReveal>
    </section>
  )
}

export default ContactSection