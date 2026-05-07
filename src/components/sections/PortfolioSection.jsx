// PortfolioSection.jsx - This section displays a grid of project cards.
// Each card shows a screenshot with a hover overlay, the project title,
// and a 'Show more' button that reveals extra description text.

// useState is needed for two things:
// 1. In ProjectCard: track if the description dropdown is open.
// 2. In PortfolioSection: track how many projects are visible (pagination).
import { useState } from 'react'

// 'projects' is the data array for all portfolio items.
// Each object contains the project's id, title, image, link, label, and description.
const projects = [
  {
    id: 1,
    title: "Pet Adoption's Project",
    img: `${import.meta.env.BASE_URL}images/projects/petadotption.png`,
    href: './projects-portfolio/petadoption-project/index.html',
    linkLabel: 'Pet Adoptions Project\nClick to see the website!',
    description: "Pet's adoptions page.\nGroup project.\nBuilt on: Figma, CSS, Sass,\nJavascript, HTML.",
  },
  {
    id: 2,
    title: 'Quizz App Educational',
    img: `${import.meta.env.BASE_URL}images/projects/uxportfolio.png`,
    href: 'https://www.uxmasterpiece.net/portfolio-collections/my-portfolio/my-project-1/',
    linkLabel: 'UX/UI Portfolio\nClick to see the website!',
    description: 'UX/UI Portfolio.\nQuizz App Educational.\nBuilt on: Wix Studio, Figma.',
  },
  {
    id: 3,
    title: 'Bootstrap Test Project',
    img: `${import.meta.env.BASE_URL}images/projects/bootstrap.png`,
    href: './projects-portfolio/bootstrap/index.html',
    linkLabel: 'Bootstrap Test Project\nClick to see the website!',
    description: 'Bootstrap Project.\nBuilt on: CSS, HTML,\nBootstrap.',
  },
  {
    id: 4,
    title: 'Boxes Landing Page',
    img: `${import.meta.env.BASE_URL}images/projects/boxes-main.png`,
    href: './projects-portfolio/boxes-main/index.html',
    linkLabel: 'Boxes Landing Page\nClick to see the website!',
    description: 'Landing Page (boxes).\nBuilt on: CSS, HTML,\nJavaScript.',
  },
  {
    id: 5,
    title: 'Blogs post',
    img: `${import.meta.env.BASE_URL}images/projects/blog.png`,
    href: 'https://www.uxmasterpiece.net/blog',
    linkLabel: "Blog's Posts\nClick to see the website!",
    description: "Blog's post.\nUX Research Exercise.\nBuilt on: Wix Studio and\nMedium Article.",
  },
  {
    id: 6,
    title: 'UX/UI Website Project',
    img: `${import.meta.env.BASE_URL}images/teaching.png`,
    href: 'https://www.uxmasterpiece.net/portfolio-collections/my-portfolio/my-project',
    linkLabel: 'UX/UI Website Project\nClick to see the website!',
    description: 'UX/UI Portfolio.\nWebsite Organization.\nBuilt on: Figma and Wix.',
  },
  {
    id: 7,
    title: 'Minha Prova App',
    img: `${import.meta.env.BASE_URL}images/projects/Minha Prova.png`,
    href: 'https://www.uxmasterpiece.net/portfolio-collections/my-portfolio/my-project-1-1',
    linkLabel: 'UX/UI Portfolio\nClick to see the website!',
    description: 'UX/UI Portfolio.\nMinha Prova.\nBuilt on: Figma and Wix.',
  },
]

// ProjectCard is a reusable component that renders a single project card.
// It receives all its data as props (title, img, href, linkLabel, description).
function ProjectCard({ title, img, href, linkLabel, description }) {
  // 'open' controls whether the description dropdown is visible.
  // It starts as false (closed) and toggles when the button is clicked.
  const [open, setOpen] = useState(false)

  return (
    <div className="box">

      {/* Hover container: shows an overlay link on top of the project image */}
      <div className="hover__container">
        <div className="hover__text">
          {/* Link to the live project - opens in a new tab */}
          <a href={href} target="_blank" rel="noopener noreferrer" title="Click to see the website!">
            {/* Split the label by newlines and render each line separately */}
            {linkLabel.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
          </a>
        </div>
        <img className="projects__item-img" src={img} alt={`Screenshot of ${title}`} />
      </div>

      <div className="projects_info">
        <h2 className="title">{title}</h2>

        {/* Toggle button: clicking it flips 'open' between true and false.
            'o => !o' is an arrow function that returns the opposite of the current value. */}
        <button className="show-btn" onClick={() => setOpen(o => !o)}>
          {open ? 'Show less' : 'Show more'}
        </button>

        {/* Conditional rendering: the description only appears when open === true */}
        {open && (
          <div className="dropdown-content p-1 text-muted" style={{ display: 'block', textAlign: 'center', padding: '8px 0 4px', fontSize: '1.4rem', color: '#555' }}>
            <p>
              {/* Split description text by newlines and render each line */}
              {description.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  // 'visible' controls how many project cards are shown at once.
  // It starts at 6. Clicking 'Show more' adds 3 more cards each time.
  const [visible, setVisible] = useState(6)

  return (
    // id="portfolio" links this section to the 'My works' menu item in the Navbar
    <section className="portfolio-b" id="portfolio">
      <h1 className="heading"><span>My works</span></h1>
      <p className="mb-0" style={{ textAlign: 'center' }}>The codes are available on my GitHub</p>

      {/* Decorative divider with a star icon */}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>

      {/* Render only the first 'visible' projects using .slice(0, visible).
          .map() turns each project object into a ProjectCard component. */}
      <div className="box-container">
        {projects.slice(0, visible).map(p => <ProjectCard key={p.id} {...p} />)}
      </div>

      {/* Show the 'Show more' button only if there are more projects to display.
          When clicked, it increases 'visible' by 3 using the updater function. */}
      {visible < projects.length && (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <button className="show-btn" onClick={() => setVisible(v => v + 3)}>
            Show more
          </button>
        </div>
      )}
    </section>
  )
}
