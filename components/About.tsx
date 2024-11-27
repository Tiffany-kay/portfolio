/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-orangered"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image 
              src="/images/myimage.jpg" 
              alt="Tiffany" 
              width={400} 
              height={400} 
              className="rounded-full shadow-lg border-4 border-orangered"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-6 text-gray-300">
                Hello! I'm Tiffany, a curious mind and passionate developer with a love for AI, robotics, and web technologies. I thrive on creating responsive and user-friendly applications using React and Flutter, always excited to learn, experiment, and apply new technologies in my projects. I believe that technology should feel personal and authentic, and that’s what I aim to bring into everything I create.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                    Outside of coding, you'll likely find me reflecting on new ideas, exploring nature trails, or diving deep into the latest AI research. I'm driven by the belief that tech can transform the world and solve real problems, especially when it’s crafted with passion and a sense of purpose. I’m constantly seeking opportunities to grow, collaborate, and contribute to innovative projects that truly matter.
</p>

            <motion.a 
              href="/MY RESUME.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orangered text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300 inline-block"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

