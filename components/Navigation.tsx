'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <ul className="flex justify-center space-x-6 py-4">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`text-lg font-semibold transition-colors duration-300 ${
                activeSection === item ? 'text-orangered' : 'text-white hover:text-orangered'
              }`}
            >
              {item}
              {activeSection === item && (
                <motion.div
                  className="h-1 bg-orangered mt-1"
                  layoutId="underline"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

