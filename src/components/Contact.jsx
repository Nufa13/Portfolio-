import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Linkedin, MessageCircle, FileDown, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const cvUrl = import.meta.env.BASE_URL + 'Nufa-CV.pdf'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const subject = encodeURIComponent(`Portfolio Inquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('email')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact">
      <div className="container">
        <SectionHeading
          num="05"
          tag="contact"
          title="Let's Build Together"
          sub="Have an internship, project, or opportunity in mind? Reach out — I reply fast."
        />

        <div className="contact-grid">
          <Reveal>
            <div className="contact-card card">
              <div className="contact-item">
                <span className="icon"><Mail size={20} /></span>
                <div>
                  <strong>Email</strong>
                  <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><Phone size={20} /></span>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p><a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><Linkedin size={20} /></span>
                <div>
                  <strong>LinkedIn</strong>
                  <p><a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinShort}</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><MapPin size={20} /></span>
                <div>
                  <strong>Location</strong>
                  <p>{profile.location}</p>
                </div>
              </div>
              <p className="contact-item" style={{ borderBottom: 'none', paddingTop: 6, color: 'var(--text-muted)' }}>
                Currently open to <strong style={{ color: 'var(--cyan)', fontWeight: 600 }}> internships</strong> and{' '}
                <strong style={{ color: 'var(--cyan)', fontWeight: 600 }}> entry-level developer roles</strong>.
              </p>

              <div className="social-row">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="social-btn" aria-label="WhatsApp">
                  <MessageCircle size={20} />
                </a>
                <a href={`mailto:${profile.email}`} className="social-btn" aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href={cvUrl} download="Niyas-Fathima-Nufa-CV.pdf" className="social-btn" aria-label="Download CV">
                  <FileDown size={20} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@email.com" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Internship, collaboration, opportunity..." />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
                {sent ? 'Opening your mail app...' : 'Send Message'}
              </button>
              <p className="form-note">
                {sent ? '✓ Opening Mail — please press send there' : '// Opens your default email client'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}