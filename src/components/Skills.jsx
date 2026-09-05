import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0])

  return (
    <section id="skills">
      <div className="container">
        <SectionHeading
          num="02"
          tag="skills"
          title="Tech Arsenal"
          sub="The technologies and disciplines I use to design, build, and ship software."
        />

        <div className="skills-wrap">
          <Reveal>
            <div className="skill-tabs">
              {skillGroups.map((group) => (
                <button
                  key={group.id}
                  className={`skill-tab ${active.id === group.id ? 'active' : ''}`}
                  onClick={() => setActive(group)}
                >
                  <span className="tab-left">
                    <group.icon className="icon" size={20} />
                    {group.label}
                  </span>
                  <ChevronRight className="arrow" size={18} />
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="skills-panel card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <h4>
                    <active.icon size={20} color="var(--primary)" /> {active.label}
                  </h4>
                  {active.skills.map((skill) => (
                    <div className="skill-row" key={skill.name}>
                      <div className="skill-row-head">
                        <span>{skill.name}</span>
                        <small>{skill.level}%</small>
                      </div>
                      <div className="bar">
                        <motion.div
                          className="bar-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}