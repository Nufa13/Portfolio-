import { Check } from 'lucide-react'
import { education, experiences } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHeading
          num="04"
          tag="education & experience"
          title="Journey So Far"
          sub="Academic foundation and hands-on experience that shaped my engineering mindset."
        />

        <div className="timeline">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="tl-item card">
                <div className="tl-meta">
                  <span className="tl-badge">{e.status}</span>
                  <span className="tl-date">{e.period}</span>
                </div>
                <h3>{e.degree}</h3>
                <h4>{e.school}</h4>
                <p>{e.description}</p>
                <ul className="tl-list">
                  {e.points.map((p) => (
                    <li key={p}>
                      <Check size={15} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {experiences.map((x, i) => (
            <Reveal key={x.title} delay={0.1 * (i + 1)}>
              <div className="tl-item card">
                <div className="tl-meta">
                  <span className="tl-badge">Experience</span>
                  <span className="tl-date">2024 — Present</span>
                </div>
                <h3>{x.title}</h3>
                <h4>{x.subtitle}</h4>
                <p>{x.description}</p>
                <ul className="tl-list">
                  {x.points.map((p) => (
                    <li key={p}>
                      <Check size={15} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}