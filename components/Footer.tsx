'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p>&copy; 2024 Tiffany. All rights reserved.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <motion.a 
              href="https://github.com/Tiffany-kay" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, color: '#f56565' }}
              className="hover:text-orangered"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/Tiffany%20Gathoni" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, color: '#f56565' }}
              className="hover:text-orangered"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href="https://twitter.com/Tifkayq" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, color: '#f56565' }}
              className="hover:text-orangered"
            >
              <FaTwitter size={24} />
            </motion.a
>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

