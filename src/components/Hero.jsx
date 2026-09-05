import { motion } from 'framer-motion'
import { Send, MapPin, Rocket, Braces } from 'lucide-react'
import { profile } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { useCountUp } from '../hooks/useCountUp'

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
              <a href="#projects" className="btn btn-ghost">
                <Braces size={16} /> View Projects
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
            <div className="terminal">
              <div className="terminal-bar">
                <span className="term-dot red" />
                <span className="term-dot yellow" />
                <span className="term-dot green" />
                <span>nufa@portfolio: ~/developer</span>
              </div>
              <div className="terminal-body">
                <div>
                  <span className="cmd">const</span> <span className="k">developer</span> = {'{'}{' '}
                  <span className="path">profile</span> {'}'}
                </div>
                <div>
                  <span className="prompt">$</span> developer<span className="path">.who()</span>
                </div>
                <div>
                  <span className="comment">// {profile.role}</span>
                </div>
                <div>
                  <span className="prompt">$</span> developer<span className="path">.stack()</span>
                </div>
                <div>
                  <span className="k">['</span>React.js<span className="k">', '</span>PHP
                  <span className="k">', '</span>MySQL<span className="k">', '</span>PostgreSQL
                  <span className="k">', '</span>C#<span className="k">']</span>
                </div>
                <div>
                  <span className="prompt">$</span> developer<span className="path">.status()</span>
                </div>
                <div>
                  <span className="s">&gt; Active &amp; open to opportunities &apos;</span>
                </div>
                <div>
                  <span className="prompt">$</span> <motion.span className="caret" />
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