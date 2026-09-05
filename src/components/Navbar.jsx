import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.id))
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress, transformOrigin: '0%' }} />

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar-inner">
          <a href="#home" className="logo" onClick={close}>
            <span>{'<'}</span>nufa<span>{' />'}</span>
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={`nav-link ${active === link.id ? 'active' : ''}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary nav-cta">
            Hire Me <ArrowUpRight size={16} />
          </a>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}