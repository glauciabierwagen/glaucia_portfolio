// Activities.jsx - Project detail page for the Activities as student in UX/UI, Front End and BackEnd courses.
// Layout follows the portfolio design system: Nunito font, #1abc9c accent, card sections.
// Structure: hero (title + description | screenshot), research images, challenges text.

// useState is used to track the current carousel slide index.
import { useState } from 'react'
// Link is used for the back button - it navigates to '/' without a full page reload.
import { Link } from 'react-router-dom'
import './quizzapp.css'
// Local cover image for the hero section
import imgBoxes from '../images/boxes=main.png'
// Research & design process images
import imgResearch from '../images/Research Quizz App.png'
import imgStyleGuide from '../images/Style GuideApp.png'
import imgPriceCards from '../images/price-cards.png'
import imgStudents from '../images/Website Alunos.png'
import imgBoxes from '../images/boxes-main.png'
import imgBootstrap from '../images/bootstrap.png'

// Research & design process images
const researchImages = [
  { src: imgResearch,   caption: 'Researching process' },
  { src: imgStyleGuide, caption: 'Developing the Style Guide' },
  { src: imgPriceCards,   caption: 'Landing Page for Teachers' },
  { src: imgStudents,   caption: 'Landing Page for Students and Parents' },
  { src: imgBoxes,      caption: 'Boxes 3D' },
  { src: imgBootstrap,     caption: ' Bootstrap Project' },
]

export default function QuizzApp() {
  // Carousel state: tracks which slide is currently visible
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + researchImages.length) % researchImages.length)
  const next = () => setCurrent(i => (i + 1) % researchImages.length)

  // Lightbox state: null = closed, number = index of zoomed image
  const [zoomed, setZoomed] = useState(null)
  // Research detail modal: opens panel when clicking the first slide
  const [showResearchDetail, setShowResearchDetail] = useState(false)
  // Style Guide detail modal: opens panel when clicking the second slide
  const [showStyleGuideDetail, setShowStyleGuideDetail] = useState(false)
  // Teachers detail modal: opens panel when clicking the third slide
  const [showTeachersDetail, setShowTeachersDetail] = useState(false)
  // Students detail modal: opens panel when clicking the fourth slide
  const [showStudentsDetail, setShowStudentsDetail] = useState(false)
  // Boxes 3D detail modal: opens panel when clicking the fifth slide
  const [showBoxesDetail, setShowBoxesDetail] = useState(false)
  // Mockup detail modal: opens panel when clicking the sixth slide
  const [showMockupDetail, setShowMockupDetail] = useState(false)

  const handleCardClick = (index) => {
    if (index === 0) setShowResearchDetail(true)
    else if (index === 1) setShowStyleGuideDetail(true)
    else if (index === 2) setShowTeachersDetail(true)
    else if (index === 3) setShowStudentsDetail(true)
    else if (index === 4) setShowBoxesDetail(true)
    else if (index === 5) setShowMockupDetail(true)
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
            src={quizzCover}
            alt="Quiz App cover"
          />
        </div>

        <div className="project-hero__text">
          <h1 className="project-title">Activities in courses </h1>
          <p className="project-role">Front End and Backend Developer</p>

          <p className="project-description">
            The idea is to show some relevant projects developed during the courses and self-studies, such as websites and landing pages.
          </p>
          <p className="project-description">
            XXXXXX 
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

      {/* ── MOCKUP DETAIL PANEL ── */}
      {showMockupDetail && (
        <div className="rd-overlay" onClick={() => setShowMockupDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowMockupDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgBootstrap} alt="Mockup Bootstrap Project" />
            </div>

            {/* Col 2: title + description + Figma link */}
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
                href="../../projects-portfolio/bootstrap-project/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── DASHBOARD DETAIL PANEL ── */}
      {showDashboardDetail && (
        <div className="rd-overlay" onClick={() => setShowDashboardDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowDashboardDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgDashboard} alt="Boxes 3D" />
            </div>

            {/* Col 2: title + description + Figma link */}
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
                href="../../projects-portfolio/boxes-3d/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── STUDENTS DETAIL PANEL ── */}
      {showStudentsDetail && (
        <div className="rd-overlay" onClick={() => setShowStudentsDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowStudentsDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgStudents} alt="Landing Page for Students and Parents" />
            </div>

            {/* Col 2: title + description + Figma link */}
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
                href="../../projects-portfolio/price-cards/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── TEACHERS DETAIL PANEL ── */}
      {showTeachersDetail && (
        <div className="rd-overlay" onClick={() => setShowTeachersDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowTeachersDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgTeachers} alt="Landing Page for Teachers" />
            </div>

            {/* Col 2: title + description + Figma link */}
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
                href="https://www.figma.com/proto/vJRPOnXWwZ7YZWnIVhgPKw/Quizz-App-Meu?node-id=2-57800&t=i17QFDvc0lyPI6zb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A56856"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Figma
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── STYLE GUIDE DETAIL PANEL ── */}
      {showStyleGuideDetail && (
        <div className="rd-overlay" onClick={() => setShowStyleGuideDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowStyleGuideDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgStyleGuide} alt="Style Guide" />
            </div>

            {/* Col 2: title + description */}
            <div className="rd-text">
              <h3>Developing the Style Guide</h3>
              <p>
                The initial concepts for the Style Guide and cover page were
                developed to ensure a cohesive and user-friendly design.
              </p>
              <p>
                The Style Guide plays a key role in defining visual identity,
                components, and design patterns, providing consistency
                across the project.
              </p>
              <p>
                This process occurred in parallel with design development,
                allowing for iterative improvements that enhance both
                usability and aesthetics.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── RESEARCH DETAIL PANEL ── */}
      {showResearchDetail && (
        <div className="rd-overlay" onClick={() => setShowResearchDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowResearchDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgResearch} alt="Research process" />
            </div>

            {/* Col 2: title + description */}
            <div className="rd-text">
              <h3>Researching process</h3>
              <p>
                A FigJam board was created to document and organize key references,
                including inspirations, competitor analysis, research findings, and user
                flowcharts. This serves as a centralized resource, making it easier to
                visualize insights, track progress, and ensure user-centered design
                decisions throughout the project.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}