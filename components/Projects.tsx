'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'E-commerce App',
    description: 'A full-stack e-commerce platform built with React',
    image: '/images/ecomm.png?height=300&width=400',
    link: 'https://github.com/Tiffany-kay/commerce1',
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'Blog App',
    description: 'A mobile blog application developed using Flutter and Dart with Django backend',
    image: '/images/blog.png?height=300&width=400',
    link: 'https://github.com/Tiffany-kay/blog-frontend',
    tags: ['Flutter', 'Dart', 'Django', 'REST API']
  },
  {
    title: 'AI Project (In Progress)',
    description: 'An ongoing AI project showcasing machine learning algorithms',
    image: '/images/PROG.png?height=300&width=400',
    link: 'https://github.com/Tiffany-kay/chatBot',
    tags: ['Python', 'TensorFlow', 'Scikit-learn']
  },
  {
  title: 'Prediction Analysis Project',
  description: 'A data science project using machine learning for predictive analysis, implemented in Google Colab',
  image: '/images/sevanaly.png?height=300&width=400&text=Prediction+Results+Visualization',
  link: 'https://github.com/Tiffany-kay/road_accident_severity_analysis',
  tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Google Colab']
},
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-orangered"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
                {hoveredProject === project.title && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-orangered text-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
                    >
                      View Project
                    </a>
                  </motion.div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-600 text-gray-200 px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

