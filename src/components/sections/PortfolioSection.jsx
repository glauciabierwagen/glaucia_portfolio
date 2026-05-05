import { useState } from 'react'

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

function ProjectCard({ title, img, href, linkLabel, description }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="box">
      <div className="hover__container">
        <div className="hover__text">
          <a href={href} target="_blank" rel="noopener noreferrer" title="Click to see the website!">
            {linkLabel.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
          </a>
        </div>
        <img className="projects__item-img" src={img} alt={`Screenshot of ${title}`} />
      </div>
      <div className="projects_info">
        <h2 className="title">{title}</h2>
        <button className="show-btn" onClick={() => setOpen(o => !o)}>
          {open ? 'Show less' : 'Show more'}
        </button>
        {open && (
          <div className="dropdown-content p-1 text-muted" style={{ display: 'block', textAlign: 'center', padding: '8px 0 4px', fontSize: '1.4rem', color: '#555' }}>
            <p>
              {description.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const [visible, setVisible] = useState(6)

  return (
    <section className="portfolio-b" id="portfolio">
      <h1 className="heading"><span>My works</span></h1>
      <p className="mb-0" style={{ textAlign: 'center' }}>The codes are available on my GitHub</p>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="box-container">
        {projects.slice(0, visible).map(p => <ProjectCard key={p.id} {...p} />)}
      </div>

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
