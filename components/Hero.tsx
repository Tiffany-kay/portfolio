'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const phrases = ["Web Developer", "AI Enthusiast", "Flutter Developer", "Curious Mind", "Crafting Solutions One Line at a Time", "Curiosity Drives My Code"]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-white mb-4"
        >
          Tiffany Wanjiku Gathoni
        </motion.h1>
        <motion.h2 
          key={phraseIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-orangered mb-8 h-12"
        >
          {phrases[phraseIndex]}
        </motion.h2>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orangered text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300 inline-block"
        >
          <Image 
              src="/images/image2.jpg" 
              alt="Tiffany" 
              width={150} 
              height={150} 
              className="rounded-full shadow-lg border-4 border-orangered"
            />
          Get in Touch
        </motion.a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

