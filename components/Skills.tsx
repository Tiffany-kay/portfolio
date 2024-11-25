'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skills = [
  { name: 'React', level: 90, color: '#61DAFB' },
  { name: 'Flutter', level: 85, color: '#02569B' },
  { name: 'AI/Machine Learning', level: 75, color: '#FF6F00' },
  { name: 'Django', level: 80, color: '#092E20' },
  { name: 'Dart', level: 85, color: '#0175C2' },
  { name: 'UI/UX Design', level: 70, color: '#FF3366' },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-orangered"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
              <div className="bg-gray-700 h-4 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              {hoveredSkill === skill.name && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-gray-400 mt-1"
                >
                  {skill.level}% proficiency
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

