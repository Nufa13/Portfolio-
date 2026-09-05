import { motion } from 'framer-motion'
import Reveal from './Reveal'

const decor = {
  hidden: { width: 0 },
  show: (i) => ({
    width: i * 12,
    transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
  }),
}

export default function SectionHeading({ num, tag, title, sub }) {
  return (
    <Reveal>
      <div className="section-tag">
        <span className="num">{num}</span> {tag}
      </div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {sub && (
        <p className="section-sub" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <motion.span
            custom={decor}
            variants={decor}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ height: 2, borderRadius: 2, background: 'linear-gradient(90deg, var(--cyan), transparent)' }}
          />
          {sub}
        </p>
      )}
    </Reveal>
  )
}