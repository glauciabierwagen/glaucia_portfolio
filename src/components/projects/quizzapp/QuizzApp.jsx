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
  // Research detail modal: opens panel when clicking the first slide
  const [showResearchDetail, setShowResearchDetail] = useState(false)
  // Style Guide detail modal: opens panel when clicking the second slide
  const [showStyleGuideDetail, setShowStyleGuideDetail] = useState(false)
  // Teachers detail modal: opens panel when clicking the third slide
  const [showTeachersDetail, setShowTeachersDetail] = useState(false)
  // Students detail modal: opens panel when clicking the fourth slide
  const [showStudentsDetail, setShowStudentsDetail] = useState(false)
  // Dashboard detail modal: opens panel when clicking the fifth slide
  const [showDashboardDetail, setShowDashboardDetail] = useState(false)
  // Mockup detail modal: opens panel when clicking the sixth slide
  const [showMockupDetail, setShowMockupDetail] = useState(false)

  const handleCardClick = (index) => {
    if (index === 0) setShowResearchDetail(true)
    else if (index === 1) setShowStyleGuideDetail(true)
    else if (index === 2) setShowTeachersDetail(true)
    else if (index === 3) setShowStudentsDetail(true)
    else if (index === 4) setShowDashboardDetail(true)
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
            Additionally, an interactive quizz game has been designed to engage students through
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

      {/* ── NEXT PROJECT NAVIGATION ── */}
      <div className="project-nav">
        <a
          className="project-nav__next"
          href="https://glauciabierwagen.github.io/glaucia_portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to the Main page Portfolio &#8250;
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

      {/* ── MOCKUP DETAIL PANEL ── */}
      {showMockupDetail && (
        <div className="rd-overlay" onClick={() => setShowMockupDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowMockupDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgMockup} alt="Mockup Quizz App" />
            </div>

            {/* Col 2: title + description + Figma link */}
            <div className="rd-text">
              <h3>Mockup Quizz App</h3>
              <p>
                The concept embraces a space-themed journey,
                incorporating clouds, rockets, and other visual elements to
                enhance gamification. Students can earn badges and
                points, with themed rewards such as &ldquo;Junior Astronaut&rdquo; and
                &ldquo;Senior Astronaut&rdquo;, making learning more interactive and
                fun. To improve usability, the mockup is being refined with
                softer colors and card-based question presentation.
              </p>
              <p>
                Additionally, a feature is being explored to enable teachers
                to easily create quick content, such as texts and videos, to
                complement classroom activities. The idea of animated
                avatars is also being developed, with ongoing research into
                the best ways to integrate them into the user experience.
              </p>
              <a
                className="rd-figma-link"
                href="https://www.figma.com/proto/vJRPOnXWwZ7YZWnIVhgPKw/Quizz-App-Meu?node-id=2-83162&t=1MGQYCnzjUxna7KK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A56856"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Figma
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
              <img src={imgDashboard} alt="System for Teachers to Produce Educational Content" />
            </div>

            {/* Col 2: title + description + Figma link */}
            <div className="rd-text">
              <h3>System for Teachers to Produce Educational Content</h3>
              <p>
                The first version of the prototype was developed to provide
                an intuitive and user-friendly experience. It includes a
                Landing Page designed specifically for teachers, along with
                a Login Page for secure access.
              </p>
              <p>
                The prototype introduces key system screens, such as a
                Dashboard for an overview of activities, a Student
                Information page for tracking progress, a Material Page to
                access pre-existing questions, a Question Creation Page
                where teachers can design custom questions, and a
                Settings/Profile section for personalization.
              </p>
              <p>
                This initial version lays the foundation for a structured and
                efficient platform, ensuring a seamless experience for
                educators.
              </p>
              <a
                className="rd-figma-link"
                href="https://www.figma.com/proto/vJRPOnXWwZ7YZWnIVhgPKw/Quizz-App-Meu?node-id=2-54441&t=sO95LLHW6yWSY7EC-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A56856"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go to Figma
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
              <h3>Landing Page for Students and Parents</h3>
              <p>
                A Landing Page was designed for students and parents,
                featuring an engaging and intuitive interface. A prominent
                &ldquo;Spela Nu&rdquo; (Play Now) button allows seamless navigation to
                the quiz game, which will include refined colors and
                animations for a more immersive experience.
              </p>
              <a
                className="rd-figma-link"
                href="https://www.figma.com/proto/vJRPOnXWwZ7YZWnIVhgPKw/Quizz-App-Meu?node-id=2-80098&t=nYaAOyo9efaEbZxL-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A56856"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go To Figma
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
              <h3>Landing Page Teachers</h3>
              <p>
                The first version of the prototype was designed to offer an
                intuitive and user-friendly experience tailored to teachers'
                needs. The Landing Page features classroom imagery,
                visually reinforcing how the system supports educators in
                creating, managing, and organizing content for their students.
              </p>
              <p>
                This design ensures a seamless and efficient workflow,
                helping teachers focus on delivering engaging and effective
                learning experiences.
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
