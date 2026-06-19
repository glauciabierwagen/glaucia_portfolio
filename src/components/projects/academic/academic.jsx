// Restaurant.jsx - Project detail page for the Restaurant UX/UI project.
// Layout follows the portfolio design system: Nunito font, #1abc9c accent, card sections.
// Structure: hero (title + description | screenshot), research images, challenges text.

// useState is used to track the current carousel slide index.
import { useState } from 'react'
// Link is used for the back button - it navigates to '/' without a full page reload.
import { Link } from 'react-router-dom'
import './academic.css'
// Local cover image for the hero section
import academicCover from '../images/Cover Academic.png'
// Research & design process images
import imgBooks from '../images/Ebook.png'
import imgEducationalProducts from '../images/Educational Product.png'
import imgPaper from '../images/Paper.png'
import imgResearchGroup from '../images/Mecom imagem.png'


// Research & design process images
const researchImages = [
  { src: imgBooks,             caption: 'Books' },
  { src: imgEducationalProducts, caption: 'Educational Products' },
  { src: imgPaper,             caption: 'Paper' },
  { src: imgResearchGroup,     caption: 'Research Group' },
]

export default function Academic() {
  // Carousel state: tracks which slide is currently visible
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + researchImages.length) % researchImages.length)
  const next = () => setCurrent(i => (i + 1) % researchImages.length)

  // Lightbox state: null = closed, number = index of zoomed image
  const [zoomed, setZoomed] = useState(null)
  // Books detail modal: opens panel when clicking slide 0
  const [showAuthenticationDetail, setShowAuthenticationDetail] = useState(false)
  // Educational Products detail modal: opens panel when clicking slide 1
  const [showEmployerDetail, setShowEmployerDetail] = useState(false)
  // Paper detail modal: opens panel when clicking slide 2
  const [showEmployer2Detail, setShowEmployer2Detail] = useState(false)
  // Research Group detail modal: opens panel when clicking slide 3
  const [showEmployeesDetail, setShowEmployeesDetail] = useState(false)

  const handleCardClick = (index) => {
    if (index === 0) setShowAuthenticationDetail(true)
    else if (index === 1) setShowEmployerDetail(true)
    else if (index === 2) setShowEmployer2Detail(true)
    else if (index === 3) setShowEmployeesDetail(true)
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
            src={academicCover}
            alt="Academic Project cover"
          />
        </div>

        <div className="project-hero__text">
          <h1 className="project-title">Academic Production</h1>
          <p className="project-role">Academic literature</p>

          <p className="project-description">
            This section showcases my academic production, including educational online products, chapters of books,
            scientific papers, and participation in technology research led by Brazilian teachers and research groups.
          </p>
          <p className="project-description">
            These works reflect my engagement with education and technology, contributing to the development of
            digital learning materials and collaborative research in the Brazilian academic community.
          </p>

          {/* Link to the live project */}
          <a
            className="project-live-btn"
            href="http://lattes.cnpq.br/1678414427664271"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brazilian Lattes Platform  &#8599;
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
          <strong>Docker</strong> removed the "works on my machine" problem by running the backend, frontend,
          and database in containers that behave the same everywhere. It taught us how multi-service
          applications are structured in practice.
        </p>
        <p className="project-challenges__text">
          <strong>Testing</strong> was harder than expected because the tests had to work without a real
          database or Auth0 credentials, which meant learning how to mock dependencies. Once we got it
          working, having CI run every test on every push made deploying much less stressful.
        </p>
        <p className="project-challenges__text">
          <strong>Deployment</strong> was the most detail-heavy part. Every piece has to be correct at the
          same time — the Render URL, the Vercel URL, the Auth0 callback URLs, and the cookie flags.
          Working across three platforms at once meant a misconfiguration in one could look like a bug in
          another, which taught us to check each layer separately.
        </p>
        <p className="project-challenges__text">
          <strong>Database and ORM</strong> — Prisma made schema changes trackable through migrations and
          the seed script kept test data consistent across machines. Getting migrations to run at the right
          moment inside Docker took some trial and error.
        </p>
        <p className="project-challenges__text">
          <strong>Authentication with Auth0</strong> was the most complex part. Understanding the OAuth 2.0
          flow — the redirect, the callback, and the session cookie — was challenging at first, but it showed
          us the value of delegating security-critical work to a dedicated service.
        </p>
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <div className="project-nav">
        <a
          className="project-nav__prev"
          href="./projects/activities/activities.html"
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

      {/* ── AUTHENTICATION PANEL ── */}
      {showAuthenticationDetail && (
        <div className="rd-overlay" onClick={() => setShowAuthenticationDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowAuthenticationDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgAuthentication} alt="Mockup Restaurant App Authentication" />
            </div>

            {/* Col 2: title + description + Figma link */}
            <div className="rd-text">
              <h3> Authentication</h3>
              <p>
                Authentication is handled by Auth0. When a user logs in, they are redirected to the Auth0 login page
                and, after signing in, a session cookie is created automatically. Protected routes check if the user
                is logged in — if not, the request is rejected with 401 Unauthorized.
              </p>
              <p>
                To keep the app secure: secrets are stored in <code>.env</code> and never committed to Git;
                protected routes return 401 or 403 for unauthorized access; CORS only allows requests from the
                frontend origin; session state is stored in a cookie (not localStorage) to prevent XSS attacks;
                and the session cookie uses <code>sameSite</code> and <code>secure</code> flags to reduce CSRF risk.
                Passwords are hashed with bcrypt, and all request bodies are validated with Zod before reaching the database.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── EMPLOYER VIEW PANEL 1 ── */}
      {showEmployerDetail && (
        <div className="rd-overlay" onClick={() => setShowEmployerDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowEmployerDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgEmployer} alt="Employer View" />
            </div>

            {/* Col 2: title + description + Figma link */}
            <div className="rd-text">
              <h3>Employer View</h3>
              <p>
                After logging in, the employer sees a welcome screen confirming their role.
                The main dashboard displays a list of all registered employees — including their name,
                photo, and job role — with options to view, edit, or delete each profile.
              </p>
              <p>
                From the top navigation, the employer can switch between four sections:
                <strong> Employees</strong> (view all staff),
                <strong> Register Employee</strong> (add new members),
                <strong> Job Schedule</strong> (manage shift definitions), and
                <strong> Work Schedule</strong> (assign shifts to employees for each day of the week).
              </p>
              <a
                className="rd-figma-link"
                href="https://employeeschedulingsecond.vercel.app/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                &#8250; Go To Project
              </a>
            </div>
          </div>
        </div>
      )}

       {/* ── EMPLOYER VIEW PANEL 2── */}
      {showEmployer2Detail && (
        <div className="rd-overlay" onClick={() => setShowEmployer2Detail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowEmployer2Detail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgEmployer2} alt="Employer View - Work Schedule" />
            </div>

            {/* Col 2: title + description + Figma link */}
            <div className="rd-text">
              <h3>Employer View — Work Schedule</h3>
              <p>
                The Work Schedule tab gives the employer a weekly calendar view of all assigned shifts.
                Each row represents a shift (Morning, Afternoon, or Night), and each column is a day of the week.
                Cells show the number of employees scheduled versus the total slots available (e.g. 1/2 or 1/3).
              </p>
              <p>
                When an employee is assigned to a shift, their photo and name appear in the cell.
                Green cells indicate available slots, making it easy to spot gaps in coverage at a glance.
                Clicking an employee name opens their availability details for that shift.
              </p>
              <a
                className="rd-figma-link"
                href="https://employeeschedulingsecond.vercel.app/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                &#8250; Go To Project
              </a>
            </div>
          </div>
        </div>
      )}

        

      {/* ── EMPLOYEE DETAIL PANEL ── */}
      {showEmployeesDetail && (
        <div className="rd-overlay" onClick={() => setShowEmployeesDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowEmployeesDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgEmployee} alt="Employee Availability" />
            </div>

            {/* Col 2: title + description + Figma link */}
            <div className="rd-text">
              <h3>Employee View — Availability</h3>
              <p>
                The Availability screen allows each employee to set their schedule preferences for the week.
                The grid shows all shifts (Morning, Afternoon, and Evening) across each day of the week.
              </p>
              <p>
                Each cell can be marked as <strong>Available</strong> (green), <strong>Unavailable</strong> (red),
                or left as <strong>Choose Availability</strong> (default). Cells already assigned by the employer
                appear as <strong>Scheduled</strong> with the shift time confirmed.
                Clicking on a date header opens a modal to set availability for the entire day at once.
              </p>
              <a
                className="rd-figma-link"
                href="https://employeeschedulingsecond.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go To Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── TESTING PANEL ── */}
      {showTestingDetail && (
        <div className="rd-overlay" onClick={() => setShowTestingDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowTestingDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgTesting} alt="Testing" />
            </div>

            {/* Col 2: title + description */}
            <div className="rd-text">
              <h3>Testing</h3>
              <p>
                The project includes automated tests across three layers to ensure reliability and correctness.
              </p>
              <p>
                <strong>Unit Tests — Backend:</strong> Pure helper functions are tested in isolation (no database,
                no network, no Express). Functions covered include <code>normalizeEmail</code>, <code>isValidRole</code>,
                <code>parseId</code>, <code>filterEmployeesByName</code>, <code>validateEmployeeInput</code>, and
                <code>validateAvailabilityInput</code>, verifying edge cases such as empty strings, invalid formats,
                and missing fields.
              </p>
              <p>
                <strong>Integration Tests — API:</strong> All main endpoints are tested against real scenarios,
                including authentication, employee management, availability, and schedule routes. Tests verify
                correct HTTP status codes (200, 201, 204, 400, 401, 403) for both valid and invalid inputs.
              </p>
              <p>
                <strong>Frontend — Unit Tests:</strong> React components are tested in isolation using Testing Library
                with jsdom. Components covered include <code>LoginScreen</code>, <code>EmployeeList</code>,
                <code>EmployerView</code>, <code>RegisterEmployeeForm</code>, and the <code>App</code> auth guard,
                checking rendering, role-based display, form validation, and navigation behaviour.
              </p>
              <a
                className="rd-figma-link"
                href="https://github.com/deborah-boat/Employee_Scheduling"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8250; Go To GitHub
              </a>
            </div>
          </div>
        </div>
        
      )}

    </div>
  )
}
