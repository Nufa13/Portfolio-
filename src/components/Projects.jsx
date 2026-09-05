import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading
          num="03"
          tag="projects"
          title="Things I've Built"
          sub="End-to-end applications that sharpen my full-stack, database, and UI/UX skills."
        />

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              className="project-card card"
              custom={i}
              variants={cardVariants}
            >
              <div className="project-icon" style={{ color: p.accent }}>
                <p.icon size={26} />
              </div>
              <div className="project-tagline">{p.tagline}</div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <ul className="project-stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={p.link} aria-label={`View ${p.name}`}>
                  <Github size={15} /> Code
                </a>
                <a href={p.link} aria-label={`Visit ${p.name}`}>
                  View <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}