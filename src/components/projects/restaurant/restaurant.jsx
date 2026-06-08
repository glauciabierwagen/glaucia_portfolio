// Restaurant.jsx - Project detail page for the Restaurant UX/UI project.
// Layout follows the portfolio design system: Nunito font, #1abc9c accent, card sections.
// Structure: hero (title + description | screenshot), research images, challenges text.

// useState is used to track the current carousel slide index.
import { useState } from 'react'
// Link is used for the back button - it navigates to '/' without a full page reload.
import { Link } from 'react-router-dom'
import './restaurant.css'
// Local cover image for the hero section
import resataurantCover from '../images/restaurant.png'
// Research & design process images
import imgResearch from '../images/Research Quizz App.png'
import imgAuthentication from '../images/authentication.png'
import imgEmployer from '../images/employerview.jpg'
import imgEmployer2 from '../images/employerview2.png'
import imgEmployee from '../images/employee.png'
import imgTesting from '../images/testing.png'



// Research & design process images
const researchImages = [
  { src: imgResearch,   caption: 'Authentication process' },
  { src: imgEmployer,  caption: 'Employer View' },
  { src: imgEmployer2,   caption: 'Employer View - Work Schedules' },
  { src: imgEmployee,   caption: 'Employee View - Availability' },
  { src: imgTesting,    caption: 'Testing' },
]

export default function QuizzApp() {
  // Carousel state: tracks which slide is currently visible
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + researchImages.length) % researchImages.length)
  const next = () => setCurrent(i => (i + 1) % researchImages.length)

  // Lightbox state: null = closed, number = index of zoomed image
  const [zoomed, setZoomed] = useState(null)
  // Authentication detail modal: opens panel when clicking slide 0
  const [showAuthenticationDetail, setShowAuthenticationDetail] = useState(false)
  // Employer View detail modal: opens panel when clicking slide 1
  const [showEmployerDetail, setShowEmployerDetail] = useState(false)
  // Employer Work Schedule detail modal: opens panel when clicking slide 2
  const [showEmployer2Detail, setShowEmployer2Detail] = useState(false)
  // Employee Availability detail modal: opens panel when clicking slide 3
  const [showEmployeesDetail, setShowEmployeesDetail] = useState(false)
  // Testing detail modal: opens panel when clicking slide 4
  const [showTestingDetail, setShowTestingDetail] = useState(false)

  const handleCardClick = (index) => {
    if (index === 0) setShowAuthenticationDetail(true)
    else if (index === 1) setShowEmployerDetail(true)
    else if (index === 2) setShowEmployer2Detail(true)
    else if (index === 3) setShowEmployeesDetail(true)
    else if (index === 4) setShowTestingDetail(true)
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
            src={resataurantCover}
            alt="Restaurant App cover"
          />
        </div>

        <div className="project-hero__text">
          <h1 className="project-title">Restaurant Scheduling App</h1>
          <p className="project-role">Front End and Back End Developer</p>

          <p className="project-description">
            This is an employee scheduling web application designed to simplify shift management for both employers and employees.
            Employers can manage registered staff, assign morning, afternoon, and night shifts for each day of the week,
            and get a visual overview of the full weekly schedule. Shift definitions — including name, start time, and end time —
            can also be configured through the Job Schedule feature.
          </p>
          <p className="project-description">
            Employees have access to their personal schedule for the current week, can submit and update their availability
            preferences for each day and shift, and view their profile information and role details. The project is still in progress,
            with the goal of creating a clear and accessible interface for both roles.
          </p>

          {/* Link to the live project */}
          <a
            className="project-live-btn"
            href="https://employeeschedulingsecond.vercel.app/"
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
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
