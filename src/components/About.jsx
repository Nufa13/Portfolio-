import { motion } from 'framer-motion'
import { profile, techChips } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading
          num="01"
          tag="about"
          title="Who I Am"
          sub="An IT undergraduate who loves turning ideas into real, working software."
        />

        <div className="about-grid">
          <Reveal>
            <div className="avatar-wrap">
              <motion.div
                className="avatar"
                whileHover={{ rotate: -2, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="avatar-inner">
                  <span className="big">N.F</span>
                  <span className="role">{profile.role}</span>
                  <span className="focus">HNDIT — SLIATE</span>
                  <span className="focus">{'{ React · PHP · SQL }'}</span>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <pre className="about-code card">
              <span className="prompt">$</span> cat profile.json
              {'\n'}
              {'{'}
              {'\n'}
              <span>  "name": "<span className="s">{profile.name}</span>",</span>
              {'\n'}
              <span>  "education": "<span className="s">HNDIT — SLIATE</span>",</span>
              {'\n'}
              <span>  "passion": [</span>
              <span className="s">"full-stack"</span>, <span className="s">"UI/UX"</span>, <span className="s">"databases"</span>
              {'],'}
              {'\n'}
              <span>  "focus": "<span className="cyan">{profile.tagline}</span>"</span>
              {'\n'}
              <span>  "openTo": "<span className="green">Internships &amp; Entry-Level Roles</span>"</span>
              {'\n'}
              {'}'}
            </pre>

            <p className="about-copy">{profile.about}</p>

            <div className="about-highlights">
              {profile.highlights.map((h) => (
                <div className="highlight card" key={h.title}>
                  <h.icon className="icon" size={22} />
                  <div>
                    <strong>{h.title}</strong>
                    <small>{h.text}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="tech-chips">
              {techChips.map((t) => (
                <span className="tech-chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}