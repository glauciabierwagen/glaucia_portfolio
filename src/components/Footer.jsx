// Footer.jsx - This component renders the footer of the page.
// It shows social media icons that link to external profiles.

// socialLinks is an array of objects. Each object holds:
// - href: the URL to open when clicked
// - img: the path to the social media icon image
// - label: a text description used for accessibility (aria-label and alt)
const socialLinks = [
  { href: 'https://github.com/glauciabierwagen',                                        img: `${import.meta.env.BASE_URL}images/github.png`,    label: 'Github' },
  { href: 'https://www.facebook.com/glaucia.silva.121',                                 img: `${import.meta.env.BASE_URL}images/facebook.png`,  label: 'Facebook' },
  { href: 'https://www.linkedin.com/in/gl%C3%A1ucia-silva-bierwagen-09860420/',         img: `${import.meta.env.BASE_URL}images/Linkedin.png`,  label: 'LinkedIn' },
  { href: 'https://www.instagram.com/galbierwagen/',                                     img: `${import.meta.env.BASE_URL}images/instagram.png`, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Loop through the socialLinks array and create an <a> tag for each one.
            We use .map() to turn each item in the array into a JSX element.
            The key prop is required by React to track list items efficiently. */}
        <div className="footer-social">
          {socialLinks.map(({ href, img, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"          // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice for external links
              className="footer-social-icon"
              aria-label={label}       // Helps screen readers describe the link
            >
              <img src={img} alt={label} />
            </a>
          ))}
        </div>

        {/* Copyright text at the bottom */}
        <div className="footer-links">
          <span className="footer-link">All rights reserved 2025 ©</span>
        </div>

      </div>
    </footer>
  )
}
