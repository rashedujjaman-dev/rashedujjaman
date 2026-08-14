import React from 'react'

const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto px-5 md:px-15 pt-3 pb-15 mt-24 border-t border-white/10'>
      <div className=' text-center'>
        <p className='text-sm text-white/40'>© {new Date().getFullYear()} Rashedujjaman All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer