import { Download } from 'lucide-react'
import { profile, techChips } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const cvUrl = import.meta.env.BASE_URL + 'Nufa-CV.pdf'

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

            <a href={cvUrl} download="Niyas-Fathima-Nufa-CV.pdf" className="btn btn-primary about-cv-btn" style={{ marginTop: 28 }}>
              <Download size={16} /> Download CV
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}