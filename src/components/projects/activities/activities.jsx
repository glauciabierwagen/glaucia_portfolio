// Activities.jsx - Project detail page for the Activities as student in UX/UI, Front End and BackEnd courses.
// Layout follows the portfolio design system: Nunito font, #1abc9c accent, card sections.
// Structure: hero (title + description | screenshot), research images, challenges text.

// useState is used to track the current carousel slide index.
import { useState } from 'react'
// Link is used for the back button - it navigates to '/' without a full page reload.
import { Link } from 'react-router-dom'
import './activities.css'
// Local cover image for the hero section
import imgBoxes from '../images/boxes-main.png'
// Research & design process images
import imgPriceCards from '../images/price-cards.png'
import imgLandingPage from '../images/landingpage.png'
import imgBootstrap from '../images/bootstrap.png'
import imgPetAdoption from '../images/petadotption.png'

// Research & design process images
const researchImages = [
  
  { src: imgPriceCards,   caption: 'Landing Page Price Cards' },
  { src: imgLandingPage,   caption: 'Landing Page for Bhromaon' },
  { src: imgBoxes,      caption: 'Boxes 3D' },
  { src: imgBootstrap,     caption: ' Bootstrap Project' },
  {src: imgPetAdoption, caption: 'Pet Adoption Webpage'}
]

export default function Activities() {
  // Carousel state: tracks which slide is currently visible
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + researchImages.length) % researchImages.length)
  const next = () => setCurrent(i => (i + 1) % researchImages.length)

  // Lightbox state: null = closed, number = index of zoomed image
  const [zoomed, setZoomed] = useState(null)
  // Price Cards detail modal: opens panel when clicking slide 0
  const [showPriceCardsDetail, setShowPriceCardsDetail] = useState(false)
  // Landing Page detail modal: opens panel when clicking slide 1
  const [showLandingPageDetail, setShowLandingPageDetail] = useState(false)
  // Boxes 3D detail modal: opens panel when clicking slide 2
  const [showDashboardDetail, setShowDashboardDetail] = useState(false)
  // Bootstrap detail modal: opens panel when clicking slide 3
  const [showBootstrapDetail, setShowBootstrapDetail] = useState(false)
  // Pet Adoption detail modal: opens panel when clicking slide 4
  const [showPetAdoptionDetail, setShowPetAdoptionDetail] = useState(false)

  const handleCardClick = (index) => {
    if (index === 0) setShowPriceCardsDetail(true)
    else if (index === 1) setShowLandingPageDetail(true)
    else if (index === 2) setShowDashboardDetail(true)
    else if (index === 3) setShowBootstrapDetail(true)
    else if (index === 4) setShowPetAdoptionDetail(true)
  }

  return (
    <div className="project-page">

      {/* ── Back link - uses React Router Link to go back to the portfolio without reload ── */}
      <Link to="/" className="project-back">
        &#8592; Back to the Main page Portfolio
      </Link>

      {/* ── HERO SECTION ── image on top (centered), then text below */}
      <section className="project-hero">

        {/* Hero screenshot - centered above the description */}
        <div className="project-hero__img">
          <img
            src={imgBoxes}
            alt="Courses Projects cover"
          />
        </div>

        <div className="project-hero__text">
          <h1 className="project-title">Activities in courses </h1>
          <p className="project-role">Front End and Backend Developer</p>

          <p className="project-description">
            The idea is to showcase relevant projects developed during courses and self-studies, including websites and landing pages.
            This collection features five projects: a landing page with interactive price cards, a landing page for Bhromaon,
            an animated 3D boxes page, a Bootstrap-based responsive layout, and a pet adoption webpage built as a group project.
          </p>
          <p className="project-description">
            Each project reflects different skills and technologies explored throughout the learning journey.
            Additional projects can be found on my GitHub profile.
          </p>

          {/* Link to the live project */}
          <a
            className="project-live-btn"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Project &#8599;
          </a>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>

      {/* ── RESEARCH IMAGES SECTION – carousel ── */}
      <section className="project-research">
        <h2 className="project-section-title">Research &amp; Design Process</h2>

        <div className="carousel">
          {/* Prev button */}
          <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous">
            &#8592;
          </button>

          {/* Card - slides 0 and 1 open detail panels, others open lightbox */}
          <figure className="carousel__card">
            <img
              src={researchImages[current].src}
              alt={researchImages[current].caption}
              onClick={() => handleCardClick(current)}
              title="Click to see details"
            />
            <figcaption>{researchImages[current].caption}</figcaption>
          </figure>

          {/* Next button */}
          <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next">
            &#8594;
          </button>
        </div>

        {/* Dot indicators */}
        <div className="carousel__dots">
          {researchImages.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot${i === current ? ' carousel__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>

      {/* ── CHALLENGES SECTION ── */}
      <section className="project-challenges">
        <h2 className="project-section-title">Challenges</h2>
        <p className="project-challenges__text">
          Working on the development of an educational quiz app presented several challenges,
          especially when conducting research and working independently throughout the process.
          One of the main difficulties was ensuring that the research phase was comprehensive
          and user-centered without the direct support of a team to brainstorm, validate ideas,
          or provide diverse perspectives. Collecting insights from educators and students
          required extra effort to engage participants, analyze qualitative data, and translate
          findings into actionable design decisions on my own.
        </p>
        <p className="project-challenges__text">
          Additionally, balancing research, ideation, prototyping, and iteration independently
          made the process more complex. Without immediate feedback loops, I had to continuously
          reevaluate my decisions, ensuring they aligned with the users' needs while maintaining
          usability and engagement. Despite these challenges, this experience strengthened my
          ability to self-manage, adapt, and refine my problem-solving approach, reinforcing the
          importance of collaboration and iterative design in user-centered solutions.
        </p>
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <div className="project-nav">
        <a
          className="project-nav__prev"
          href="./projects-portfolio/petadoption-project/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#8249; Previous project
        </a>
        <Link className="project-nav__next" to="/organization">
          Next project &#8250;
        </Link>
      </div>

      {/* ── LIGHTBOX OVERLAY ── renders when an image is zoomed */}
      {zoomed !== null && (
        <div className="lightbox-overlay" onClick={() => setZoomed(null)}>
          <button className="lightbox-close" onClick={() => setZoomed(null)} aria-label="Close">&times;</button>
          <img
            src={researchImages[zoomed].src}
            alt={researchImages[zoomed].caption}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── BOOTSTRAP DETAIL PANEL ── */}
      {showBootstrapDetail && (
        <div className="rd-overlay" onClick={() => setShowBootstrapDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowBootstrapDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgBootstrap} alt="Mockup Bootstrap Project" />
            </div>

            {/* Col 2: title + description + webpage */}
            <div className="rd-text">
              <h3> Bootstrap Project</h3>
              <p>
                Application of Bootstrap framework for responsive design and layout. 
                This project focused on the application of the Bootstrap framework to create responsive and organized web interfaces. The objective was to develop 
                layouts that automatically adapt to different screen sizes, providing a consistent and accessible user experience across desktops, tablets, and mobile devices.
              </p>
              <p>
                Using Bootstrap’s grid system, responsive classes, and pre-designed components, the project focused on improving layout structure, 
                navigation, and user experience across desktops, tablets, and mobile devices. 
                It also emphasized mobile-first design principles and strengthened front-end development and responsive design skills.
              </p>
              <a
                className="rd-figma-link"
                href="./projects-portfolio/bootstrap/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── BOXES 3D DETAIL PANEL ── */}
      {showDashboardDetail && (
        <div className="rd-overlay" onClick={() => setShowDashboardDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowDashboardDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgBoxes} alt="Boxes 3D" />
            </div>

            {/* Col 2: title + description + webpage */}
            <div className="rd-text">
              <h3> Boxes 3D</h3>
              <p>
                This project involved creating a dynamic landing page using HTML, CSS, and JavaScript, 
                featuring animated 3D-style boxes with movement and interaction. 
                The goal was to build an engaging and modern interface with depth, motion, and interactivity.
              </p>
              <p>
                CSS was used to create the 3D effects and animations, while JavaScript controlled movement and user interaction. 
                The project improved skills in combining structure, styling, and logic to build interactive web pages
              </p>
              <p>
                I developed a better understanding of CSS 3D transformations, animations, and JavaScript-based interactivity, 
                as well as how to integrate these technologies to create dynamic user experiences. The main challenge was ensuring smooth 
                animations and balancing performance while synchronizing CSS effects with JavaScript interactions without causing delays or layout issues.
              </p>
              <a
                className="rd-figma-link"
                href="./projects-portfolio/boxes-main/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── PRICE CARDS DETAIL PANEL ── */}
      {showPriceCardsDetail && (
        <div className="rd-overlay" onClick={() => setShowPriceCardsDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowPriceCardsDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgPriceCards} alt="Landing Page for Price Cards" />
            </div>

            {/* Col 2: title + description + webpage */}
            <div className="rd-text">
              <h3> Price Cards</h3>
              <p>
                This project involved building interactive pricing cards using HTML, CSS, and JavaScript. The goal was to create a clear and visually appealing layout to present different pricing options in a structured and user-friendly way.
                HTML was used to organize the content of each card, while CSS was responsible for styling, layout design, and visual effects such as spacing, colors, and hover animations. JavaScript was added to improve interactivity, 
                allowing dynamic behavior such as highlighting selected cards or enhancing user feedback when interacting with the elements. 
              </p>
               <p>
                Through this project, I developed a better understanding of responsive layout design, CSS styling techniques for UI components, 
                and how JavaScript can be used to add interactivity to static elements. 
                It also improved my ability to design clean and structured interfaces.
              </p>
              <p>
                The main challenge was creating a balanced visual hierarchy between the pricing cards while ensuring consistency and 
                responsiveness across different screen sizes.
                It was also important to keep the design simple but engaging without overwhelming the user with too many visual elements.
              </p>
              <a
                className="rd-figma-link"
                href="./projects-portfolio/price-cards/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── LANDING PAGE DETAIL PANEL ── */}
      {showLandingPageDetail && (
        <div className="rd-overlay" onClick={() => setShowLandingPageDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowLandingPageDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgLandingPage} alt="Landing Page Bhromaon" />
            </div>

            {/* Col 2: title + description + webpage */}
            <div className="rd-text">
              <h3>Landing Page Bhromaon</h3>
              <p>
                This project involved creating a simple and responsive webpage using HTML and CSS. 
                The main goal was to design a clean and well-structured layout with a focus on visual organization and user-friendly presentation.
              </p>
              <p>
                Through this project, I improved my understanding of how HTML structures content and how CSS is used to control the visual presentation of a webpage. 
                It also helped strengthen my skills in layout design and creating clean, readable interfaces.
              </p>
              <a
                className="rd-figma-link"
                href="./projects-portfolio/bhromaon/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Project
              </a>
            </div>
          </div>
        </div>
      )}

        {/* ── PET ADOPTION WEBPAGE DETAIL PANEL ── */}
      {showPetAdoptionDetail && (
        <div className="rd-overlay" onClick={() => setShowPetAdoptionDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowPetAdoptionDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgPetAdoption} alt="Pet Adoption Webpage" />
            </div>

            {/* Col 2: title + description + webpage */}
            <div className="rd-text">
              <h3>Pet Adoption Webpage</h3>
              <p>
                This project involved creating a simple and responsive webpage using HTML and CSS. 
                The main goal was to design a clean and well-structured layout with a focus on visual organization and user-friendly presentation.
              </p>
              <p>
                Through this project, I learned more about how HTML organizes content and how CSS changes the look of a webpage. It also helped me improve my layout design skills and create simple, easy-to-read pages. 
                This group project also gave me the chance to work and collaborate with a team.
              </p>
              <a
                className="rd-figma-link"
                href="./projects-portfolio/petadoption-project/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Project
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}