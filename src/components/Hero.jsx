import { motion } from 'framer-motion'
import { Send, MapPin, Rocket, Download } from 'lucide-react'
import { profile } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { useCountUp } from '../hooks/useCountUp'

const cvUrl = import.meta.env.BASE_URL + 'Nufa-CV.pdf'
const photo = import.meta.env.BASE_URL + 'Nufa.jpeg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Stat({ value, suffix, label }) {
  const [count, ref] = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <h3>
        {count}
        <em>{suffix}</em>
      </h3>
      <p>{label}</p>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(profile.typedWords)

  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div
          className="hero-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div>
            <motion.span variants={item} className="hero-eyebrow">
              <span className="pulse-dot" /> Available for internships &amp; entry-level roles
            </motion.span>

            <motion.h1 variants={item} className="hero-name">
              Niyas Fathima <span className="gradient">Nufa</span>
            </motion.h1>

            <motion.div variants={item} className="hero-role">
              {typed}
              <span className="caret" />
            </motion.div>

            <motion.p variants={item} className="hero-desc">
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                <Send size={16} /> Let&apos;s Connect
              </a>
              <a href={cvUrl} download="Niyas-Fathima-Nufa-CV.pdf" className="btn btn-ghost">
                <Download size={16} /> Download CV
              </a>
            </motion.div>

            <motion.div variants={item} className="hero-stats">
              {profile.stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="hero-card"
            initial={{ opacity: 0, x: 50, rotate: 1.5 }}
            animate={{ opacity: 1, x: 0, rotate: 1.5 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="id-card">
              <div className="id-band">
                <div className="id-brand">
                  <strong className="id-org">SLIATE</strong>
                  <small>HNDIT · Student Identity Card</small>
                </div>
                <div className="id-chip" aria-hidden="true" />
              </div>

              <div className="id-photo">
                <img src={photo} alt={`${profile.name} portrait`} />
              </div>

              <div className="id-info">
                <h4>{profile.name}</h4>
                <p>{profile.role}</p>
                <span className="tag">Software Developer</span>
              </div>

              <div className="id-bottom">
                <div className="barcode" aria-hidden="true" />
                <div className="id-code">
                  <small>STUDENT ID</small>
                  <strong>NN-2026</strong>
                </div>
              </div>
            </div>

            <div className="float-badge b1">
              <MapPin className="icon" size={20} />
              <div>
                <b>{profile.location}</b>
                <small>Based in</small>
              </div>
            </div>
            <div className="float-badge b2">
              <Rocket className="icon" size={20} />
              <div>
                <b>3+ Projects</b>
                <small>Shipped end-to-end</small>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-hint">
        <div className="mouse" />
        scroll
      </div>
    </section>
  )
}