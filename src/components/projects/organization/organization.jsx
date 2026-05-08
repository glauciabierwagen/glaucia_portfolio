import { useState } from 'react'
import { Link } from 'react-router-dom'
import './organization.css'
import twbCover from '../images/TWB cover.png'
// Research & design process images
import imgPersonas    from '../images/Persona e User Flow.png'
import imgWireframe   from '../images/Wireframes-Style.png'
import imgUserNeeds   from '../images/User needs.png'
import imgStyleGuide  from '../images/Style Guide.png'
import imgPrototype   from '../images/Prototype.png'

// Research & design process images
const researchImages = [
  { src: imgPersonas,   caption: 'Understanding the User Needs' },
  { src: imgWireframe,  caption: 'Wireframes & Style Guide' },
  { src: imgUserNeeds,  caption: 'Personas & User Flow' },
  { src: imgStyleGuide, caption: 'Creation of Style Guide' },
  { src: imgPrototype,  caption: 'Prototype' },
]

export default function Organization() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + researchImages.length) % researchImages.length)
  const next = () => setCurrent(i => (i + 1) % researchImages.length)

  const [zoomed, setZoomed] = useState(null)
  const [showPersonasDetail,   setShowPersonasDetail]   = useState(false)
  const [showWireframeDetail,  setShowWireframeDetail]  = useState(false)
  const [showUserNeedsDetail,  setShowUserNeedsDetail]  = useState(false)
  const [showStyleGuideDetail, setShowStyleGuideDetail] = useState(false)
  const [showPrototypeDetail,  setShowPrototypeDetail]  = useState(false)

  const handleCardClick = (index) => {
    if (index === 0) setShowPersonasDetail(true)
    else if (index === 1) setShowWireframeDetail(true)
    else if (index === 2) setShowUserNeedsDetail(true)
    else if (index === 3) setShowStyleGuideDetail(true)
    else if (index === 4) setShowPrototypeDetail(true)
  }

  return (
    <div className="org-page">

      {/* ── Back link ── */}
      <Link to="/" className="org-back">
        &#8592; Back to the Main page Portfolio
      </Link>

      {/* ── HERO SECTION ── */}
      <section className="org-hero">

        <div className="org-hero__img">
          <img src={twbCover} alt="Teaching without Borders cover" />
        </div>

        <div className="org-hero__text">
          <h1 className="org-title">Teaching without Borders</h1>
          <p className="org-role">UX/UI Designer</p>

          <p className="org-description">
            Teaching without Borders is a non-profit organization that the goal is to break
            down barriers in education and provide learning opportunities in areas where access
            to knowledge is limited. By sharing knowledge, individuals are empowered to become
            agents of change in their communities and the world.
          </p>
          <p className="org-description">
            Guided by the values of Fraternidade sem Fronteiras&mdash;fraternity, loyalty to
            purpose, appreciation of the individual, spirituality, and sustainability&mdash;hearts
            and minds are connected to create lasting impact and transform realities in underserved
            communities. A more inclusive and sustainable future is being built through education
            that transcends borders and impacts lives.
          </p>

          <a
            className="org-live-btn"
            href="https://www.uxmasterpiece.net/portfolio-collections/my-portfolio/my-project-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Project &#8599;
          </a>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="org-divider">
        <div className="org-divider-line"></div>
        <div className="org-divider-icon"><i className="fas fa-star"></i></div>
        <div className="org-divider-line"></div>
      </div>

      {/* ── RESEARCH IMAGES SECTION – carousel ── */}
      <section className="org-research">
        <h2 className="org-section-title">Research &amp; Design Process</h2>

        <div className="org-carousel">
          <button className="org-carousel__btn org-carousel__btn--prev" onClick={prev} aria-label="Previous">
            &#8592;
          </button>

          <figure className="org-carousel__card">
            <img
              src={researchImages[current].src}
              alt={researchImages[current].caption}
              onClick={() => handleCardClick(current)}
              title="Click to see details"
            />
            <figcaption>{researchImages[current].caption}</figcaption>
          </figure>

          <button className="org-carousel__btn org-carousel__btn--next" onClick={next} aria-label="Next">
            &#8594;
          </button>
        </div>

        <div className="org-carousel__dots">
          {researchImages.map((_, i) => (
            <button
              key={i}
              className={`org-carousel__dot${i === current ? ' org-carousel__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="org-divider">
        <div className="org-divider-line"></div>
        <div className="org-divider-icon"><i className="fas fa-star"></i></div>
        <div className="org-divider-line"></div>
      </div>

      {/* ── CHALLENGES SECTION ── */}
      <section className="org-challenges">
        <h2 className="org-section-title">Challenges</h2>
        <p className="org-challenges__text">
          Working on the UX/UI design for a non-profit organization presented unique challenges,
          particularly in balancing accessibility, emotional impact, and usability. Designing for
          an audience that spans different cultures, languages, and levels of digital literacy
          required deep research and a user-centered approach to ensure the platform would be
          inclusive and intuitive for everyone.
        </p>
        <p className="org-challenges__text">
          Additionally, translating the organization&rsquo;s values&mdash;fraternity, sustainability,
          and social impact&mdash;into a cohesive visual identity demanded careful consideration
          of typography, colour, and layout. Working independently through each stage of the
          design process reinforced the importance of iterative thinking and empathy-driven
          decision-making when creating solutions that truly serve communities in need.
        </p>
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <div className="org-nav">
        <Link className="org-nav__prev" to="/quizzapp">
          &#8249; Previous project
        </Link>
        <a
          className="org-nav__next"
          href="./projects-portfolio/bootstrap/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next project &#8250;
        </a>
      </div>

      {/* ── LIGHTBOX OVERLAY ── */}
      {zoomed !== null && (
        <div className="org-lightbox" onClick={() => setZoomed(null)}>
          <button className="org-lightbox-close" onClick={() => setZoomed(null)} aria-label="Close">&times;</button>
          <img
            src={researchImages[zoomed].src}
            alt={researchImages[zoomed].caption}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── PERSONAS & USER FLOW DETAIL PANEL ── */}
      {showPersonasDetail && (
        <div className="org-overlay" onClick={() => setShowPersonasDetail(false)}>
          <div className="org-panel" onClick={e => e.stopPropagation()}>
            <button className="org-panel-close" onClick={() => setShowPersonasDetail(false)} aria-label="Close">&times;</button>
            <div className="org-panel__img">
              <img src={imgPersonas} alt="Developing Persona e User Flow" />
            </div>
            <div className="org-panel__text">
              <h3>Developing Persona e User Flow</h3>
              <p>
                The design process emphasizes personas and user flows to create user-centered
                experiences.
              </p>
              <p>
                Personas ensure design decisions align with real user needs by representing key
                user groups&rsquo; goals, frustrations, and behaviors.
              </p>
              <p>
                User flows map user interactions, improving navigation and usability. Initially
                overlooked in favor of wireframing, user flows were later integrated, highlighting
                the importance of adaptability, continuous iteration and structured design. This
                approach enhances functionality and overall user experience.
              </p>
              <a className="org-figma-link" href="https://www.figma.com/board/i2TYiFnSJU0PfYuIym8Seb/Teaching-Without-Borders-%26-UXPAND?node-id=0-1&t=d7wklO9EXaMPjZPN-1" target="_blank" rel="noopener noreferrer">
                &#8250; Go to Figjam
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── WIREFRAME DETAIL PANEL ── */}
      {showWireframeDetail && (
        <div className="org-overlay" onClick={() => setShowWireframeDetail(false)}>
          <div className="org-panel" onClick={e => e.stopPropagation()}>
            <button className="org-panel-close" onClick={() => setShowWireframeDetail(false)} aria-label="Close">&times;</button>
            <div className="org-panel__img">
              <img src={imgWireframe} alt="Wireframes" />
            </div>
            <div className="org-panel__text">
              <h3>Wireframes</h3>
              <p>
                In this project, wireframes served as blueprints that define a product&rsquo;s
                structure and functionality before visual details are added. They establish layout,
                hierarchy, and navigation, ensuring a clear user experience.
              </p>
              <p>
                Functionally, they map key interactions and identify usability issues early.
                Wireframes also enhance collaboration by aligning designers, developers, and
                stakeholders, reducing costly revisions.
              </p>
              <p>
                This process ensured design consistency and functional efficiency, creating a
                solid foundation for a user-centered product.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── USER NEEDS DETAIL PANEL ── */}
      {showUserNeedsDetail && (
        <div className="org-overlay" onClick={() => setShowUserNeedsDetail(false)}>
          <div className="org-panel" onClick={e => e.stopPropagation()}>
            <button className="org-panel-close" onClick={() => setShowUserNeedsDetail(false)} aria-label="Close">&times;</button>
            <div className="org-panel__img">
              <img src={imgUserNeeds} alt="Understanding the user needs" />
            </div>
            <div className="org-panel__text">
              <h3>Understanding the user needs</h3>
              <p>
                To develop an effective and user-centered solution, it is essential to understand
                the needs and expectations of both stakeholders and end users. This process involves:
              </p>
              <p>
                <strong>1. Stakeholder Interviews</strong><br />
                Engaging with stakeholders helps understand user expectations, content needs, and
                key project goals. Aligning these insights with research ensures a solution that
                meets both stakeholder objectives and user needs.
              </p>
              <p>
                <strong>2. Inspiration and Benchmarking</strong><br />
                Analyzing similar projects offers insights into design, functionality, and
                communication, helping integrate best practices while identifying opportunities
                for improvement and differentiation.
              </p>
              <p>
                <strong>3. Competitor Analysis</strong><br />
                Analyzing competitors reveals industry best practices, strengths, and gaps,
                allowing for the adoption and refinement of effective strategies to suit project needs.
              </p>
              <p>
                By integrating these insights, the final solution becomes more engaging,
                user-friendly, and aligned with both stakeholder goals and user needs.
              </p>
              <a className="org-figma-link" href="https://www.figma.com/board/i2TYiFnSJU0PfYuIym8Seb/Teaching-Without-Borders-%26-UXPAND?node-id=0-1&t=d7wklO9EXaMPjZPN-1" target="_blank" rel="noopener noreferrer">
                &#8250; Go to Figjam
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── STYLE GUIDE DETAIL PANEL ── */}
      {showStyleGuideDetail && (
        <div className="org-overlay" onClick={() => setShowStyleGuideDetail(false)}>
          <div className="org-panel" onClick={e => e.stopPropagation()}>
            <button className="org-panel-close" onClick={() => setShowStyleGuideDetail(false)} aria-label="Close">&times;</button>
            <div className="org-panel__img">
              <img src={imgStyleGuide} alt="Creation of Style Guide" />
            </div>
            <div className="org-panel__text">
              <h3>Creation of Style Guide</h3>
              <p>
                A style guide can play a relevant role in maintaining consistency across design
                patterns, promoting uniformity across different screens and interaction.
              </p>
              <p>
                In a collaborative context, the style guide streamlines teamwork by providing a
                shared reference, ensuring alignment between designers, developers, and other
                stakeholders.
              </p>
              <p>
                By standardizing visual elements such as colors, typography, and spacing, it
                creates a cohesive and intuitive interface that enhances usability and reduces
                cognitive load.
              </p>
              <a className="org-figma-link" href="https://www.figma.com/design/e5t9k0ywJ7T28vBXiyAEKx/TWB-%7C-Oficial?node-id=0-1&p=f&t=0NMd7rv3p7CgJfUS-0" target="_blank" rel="noopener noreferrer">
                &#8250; Go to Figma
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── PROTOTYPE DETAIL PANEL ── */}
      {showPrototypeDetail && (
        <div className="org-overlay" onClick={() => setShowPrototypeDetail(false)}>
          <div className="org-panel" onClick={e => e.stopPropagation()}>
            <button className="org-panel-close" onClick={() => setShowPrototypeDetail(false)} aria-label="Close">&times;</button>
            <div className="org-panel__img">
              <img src={imgPrototype} alt="Prototype" />
            </div>
            <div className="org-panel__text">
              <h3>Prototype</h3>
              <p>
                At this stage of the project, the prototype can help the user experience and
                guide software development.
              </p>
              <p>
                By incorporating interactive elements, this prototype helps users understand
                navigation, workflows, and key interactions. This ensures that the design aligns
                with user expectations, identifying potential usability issues early.
              </p>
              <p>
                Currently, the project is in the usability testing and development phase, where
                user feedback is collected to refine interactions and optimize the experience.
                Simultaneously, the development team uses the prototype as a reference, ensuring
                a smooth transition from design to implementation.
              </p>
              <p>
                This process helps minimize errors, improve efficiency, and create a more
                intuitive, user-centered final product.
              </p>
              <a className="org-figma-link" href="https://www.figma.com/proto/e5t9k0ywJ7T28vBXiyAEKx/TWB-%7C-Oficial?node-id=1870-8409&t=jekROu9al9SPpRFc-1&scaling=scale-down&content-scaling=fixed&page-id=45%3A2&starting-point-node-id=1080%3A2571&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                &#8250; Go to Figma
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
