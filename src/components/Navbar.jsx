// Navbar.jsx - This component renders the navigation menu.
// It includes a hamburger button (for mobile screens) and a list of links.

// useState is a React Hook. It lets us store and update values inside a component.
// Here we use it to track whether the mobile menu is open or closed.
import { useState } from 'react'

// navLinks is an array with all the menu items.
// Each object has a label (the text), an href (where to go), and optionally
// external: true if the link goes to an outside website.
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education & Experience', href: '#education' },
  { label: 'My works', href: '#portfolio' },
  { label: 'Academic Work', href: 'http://lattes.cnpq.br/1678414427664271', external: true },
  { label: 'Blogs', href: 'https://medium.com/@galsilv/users-perceptions-of-sustainable-self-care-products-fa7b8b7b5069', external: true },
]

export default function Navbar() {
  // 'open' holds true or false - whether the mobile menu is visible.
  // 'setOpen' is the function we call to change that value.
  const [open, setOpen] = useState(false)

  return (
    <div className="container_header">

      {/* Hamburger button - visible on small screens.
          When clicked, it toggles the 'open' state.
          The class changes to 'open' so CSS can animate the icon. */}
      <button
        className={`hamburger-menu${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}   // "!o" flips true to false and vice versa
        aria-label="Toggle menu"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        {/* These three divs are the three lines of the hamburger icon */}
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </button>

      {/* The <nav> element changes its class when 'open' is true,
          which triggers the CSS to show/hide the menu on mobile. */}
      <nav className={`navbar${open ? ' change' : ''}`}>
        <ul className="nav-list">

          {/* .map() loops through navLinks and creates a <li> for each one */}
          {navLinks.map(({ label, href, external }) => (
            <li key={label} className="nav-item">
              <a
                href={href}
                className="nav-link"
                // External links open in a new tab; internal links do not
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                // Clicking a link closes the mobile menu
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
