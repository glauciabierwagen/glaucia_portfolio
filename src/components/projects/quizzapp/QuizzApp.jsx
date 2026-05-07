// QuizzApp.jsx - Project detail page for the Quiz App UX/UI project.
// Layout follows the portfolio design system: Nunito font, #1abc9c accent, card sections.
// Structure: hero (title + description | screenshot), research images, challenges text.

// useState is used to track the current carousel slide index.
import { useState } from 'react'
// Link is used for the back button - it navigates to '/' without a full page reload.
import { Link } from 'react-router-dom'
import './quizzapp.css'
// Local cover image for the hero section
import quizzCover from '../images/Quizz App cover.png'
// Research & design process images
import imgResearch from '../images/Research Quizz App.png'
import imgStyleGuide from '../images/Style Guide.png'
import imgTeachers from '../images/Website Professores.png'
import imgStudents from '../images/Website Alunos.png'
import imgDashboard from '../images/Dashboard.png'
import imgMockup from '../images/Quizz App.png'

// Research & design process images
const researchImages = [
  { src: imgResearch,   caption: 'Researching process' },
  { src: imgStyleGuide, caption: 'Developing the Style Guide' },
  { src: imgTeachers,   caption: 'Landing Page for Teachers' },
  { src: imgStudents,   caption: 'Landing Page for Students and Parents' },
  { src: imgDashboard,  caption: 'System for Teachers to Produce Educational Content' },
  { src: imgMockup,     caption: 'Mockup Quizz App' },
]

export default function QuizzApp() {
  // Carousel state: tracks which slide is currently visible
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + researchImages.length) % researchImages.length)
  const next = () => setCurrent(i => (i + 1) % researchImages.length)

  // Lightbox state: null = closed, number = index of zoomed image
  const [zoomed, setZoomed] = useState(null)
  // Research detail modal: opens 3-col panel when clicking the first slide
  const [showResearchDetail, setShowResearchDetail] = useState(false)

  const handleCardClick = (index) => {
    if (index === 0) setShowResearchDetail(true)
    else setZoomed(index)
  }

  return (
    <div className="project-page">

      {/* ── Back link - uses React Router Link to go back to the portfolio without reload ── */}
      <Link to="/" className="project-back">
        &#8592; Back to Portfolio
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
          <h1 className="project-title">Quiz App</h1>
          <p className="project-role">UX/UI Designer</p>

          <p className="project-description">
            The main idea of the project is to provide an educational content creation and
            management platform. The project is still in progress. An interface system has been
            developed to enhance the educational experience, including content creation and
            management, activity planning and tracking, and data-driven insights through
            dashboards that monitor student performance. These features help educators make
            informed decisions and improve learning outcomes.
          </p>
          <p className="project-description">
            Additionally, an interactive quiz game has been designed to engage students through
            gamified learning and instant feedback, making the learning process more dynamic and
            motivating. Landing pages have also been created, providing tailored perspectives for
            both educators and teachers.
          </p>

          {/* Link to the live project */}
          <a
            className="project-live-btn"
            href="https://www.uxmasterpiece.net/portfolio-collections/my-portfolio/my-project-1/"
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

          {/* Card - first slide opens detail panel, others open lightbox */}
          <figure className="carousel__card">
            <img
              src={researchImages[current].src}
              alt={researchImages[current].caption}
              onClick={() => handleCardClick(current)}
              title={current === 0 ? 'Click to see details' : 'Click to zoom'}
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

      {/* ── NEXT PROJECT NAVIGATION ── */}
      <div className="project-nav">
        <a
          className="project-nav__next"
          href="https://www.uxmasterpiece.net/portfolio-collections/my-portfolio/my-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next Project &#8250;
        </a>
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

      {/* ── RESEARCH DETAIL PANEL ── 3-col modal: main image | thumbnails | text */}
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
