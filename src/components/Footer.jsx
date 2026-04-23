import githubImg    from '../../images/github.png'
import facebookImg  from '../../images/facebook.png'
import linkedinImg  from '../../images/Linkedin.png'
import instagramImg from '../../images/instagram.png'

const socialLinks = [
  { href: 'https://github.com/glauciabierwagen',                                               img: githubImg,    label: 'Github' },
  { href: 'https://www.facebook.com/glaucia.silva.121',                                        img: facebookImg,  label: 'Facebook' },
  { href: 'https://www.linkedin.com/in/gl%C3%A1ucia-silva-bierwagen-09860420/',                img: linkedinImg,  label: 'LinkedIn' },
  { href: 'https://www.instagram.com/galbierwagen/',                                            img: instagramImg, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          {socialLinks.map(({ href, img, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label={label}
            >
              <img src={img} alt={label} />
            </a>
          ))}
        </div>
        <div className="footer-links">
          <span className="footer-link">All rights reserved 2025 ©</span>
        </div>
      </div>
    </footer>
  )
}
