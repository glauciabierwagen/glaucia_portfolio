import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education & Experience', href: '#education' },
  { label: 'My works', href: '#portfolio' },
  { label: 'Academic Work', href: 'http://lattes.cnpq.br/1678414427664271', external: true },
  { label: 'Blogs', href: 'https://medium.com/@galsilv/users-perceptions-of-sustainable-self-care-products-fa7b8b7b5069', external: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="container_header">
      <button
        className={`hamburger-menu${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </button>

      <nav className={`navbar${open ? ' change' : ''}`}>
        <ul className="nav-list">
          {navLinks.map(({ label, href, external }) => (
            <li key={label} className="nav-item">
              <a
                href={href}
                className="nav-link"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
