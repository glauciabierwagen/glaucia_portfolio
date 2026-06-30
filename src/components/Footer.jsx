// Footer.jsx - This component renders the footer of the page.
// It shows social media icons that link to external profiles.

// socialLinks is an array of objects. Each object holds:
// - href: the URL to open when clicked
// - icon: the Font Awesome class for the icon
// - label: a text description used for accessibility (aria-label)
const socialLinks = [
  { href: 'https://github.com/glauciabierwagen',                                      icon: 'fab fa-github',    label: 'Github' },
  { href: 'https://www.facebook.com/glaucia.silva.121',                               icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: 'https://www.linkedin.com/in/gl%C3%A1ucia-silva-bierwagen-09860420/',       icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/galbierwagen/',                                   icon: 'fab fa-instagram',  label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <nav className="bottom-nav">
          <ul className="icons">
            {socialLinks.map(({ href, icon, label }) => (
              <li key={label} className="icon-item">
                <a
                  href={href}
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <i className={icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright text at the bottom */}
        <div className="footer-links">
          <span className="footer-link">All rights reserved 2025 ©</span>
        </div>

      </div>
    </footer>
  )
}
