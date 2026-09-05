import { Heart } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          Designed &amp; built by <a href="#home">{profile.name}</a> with React + Vite
        </p>
        <p className="mono">
          &lt;/&gt; {'{/'} Generated with <Heart size={13} className="footer-heart" fill="currentColor" /> &amp; caffeine {'}'}
        </p>
        <p className="mono">© {new Date().getFullYear()} {profile.shortName}. All rights reserved.</p>
      </div>
    </footer>
  )
}