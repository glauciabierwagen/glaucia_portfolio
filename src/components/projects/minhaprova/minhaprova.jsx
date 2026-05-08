import { useState } from 'react'
import { Link } from 'react-router-dom'
import './minhaprova.css'
import mpCover from '../images/MinhaProvaCover.png'
// Research & design process images
import imgReferences        from '../images/Prototype_Minha Prova.png'
import imgStyleWireframes   from '../images/References.png'
import imgPrototype         from '../images/Wireframes-Style.png'


// Research & design process images
const researchImages = [
  { src: imgReferences,       caption: 'References' },
  { src: imgStyleWireframes,  caption: 'Developing Style Guide and Wireframes' },
  { src: imgPrototype,        caption: 'High-fidelity Prototype' },
]

export default function MinhaProva() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + researchImages.length) % researchImages.length)
  const next = () => setCurrent(i => (i + 1) % researchImages.length)

  const [zoomed, setZoomed] = useState(null)
  const [showReferencesDetail,      setShowReferencesDetail]      = useState(false)
  const [showStyleWireframesDetail, setShowStyleWireframesDetail] = useState(false)
  const [showPrototypeDetail,       setShowPrototypeDetail]       = useState(false)

  const handleCardClick = (index) => {
    if (index === 0) setShowReferencesDetail(true)
    else if (index === 1) setShowStyleWireframesDetail(true)
    else if (index === 2) setShowPrototypeDetail(true)
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
          <img src={mpCover} alt="Minha Prova cover" />
        </div>

        <div className="org-hero__text">
          <h1 className="org-title">Minha Prova</h1>
          <p className="org-role">UX/UI Designer</p>

          <p className="org-description">
            The project proposes the development of an application for the iOS platform, designed
            for administering, digitizing, and grading tests within the Brazilian educational
            context. Its main objective is to optimize the assessment process by providing teachers
            with a precise, agile, and user-friendly tool capable of handling the large number of
            students in Brazil&rsquo;s school systems.
          </p>
          <p className="org-description">
            Through the reading of QR codes generated from students&rsquo; responses, the
            application will allow educators to quickly access both individual and group results,
            reducing the time spent on grading and enhancing the quality of pedagogical analysis.
          </p>
          <p className="org-description">
            The Brazilian educational context is characterized by large class sizes, widespread
            large-scale assessments, and an increasing need for reliable data to support
            pedagogical decisions. In this scenario, tools that automate grading and generate
            instant reports are essential to support teachers, save time, and strengthen a
            data-informed learning culture.
          </p>

          <a
            className="org-live-btn"
            href="https://www.figma.com/proto/e5t9k0ywJ7T28vBXiyAEKx/TWB-%7C-Oficial?node-id=1870-8409&t=jekROu9al9SPpRFc-1&scaling=scale-down&content-scaling=fixed&page-id=45%3A2&starting-point-node-id=1080%3A2571&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Prototype &#8599;
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
          Working on the development of an educational app presented several challenges,
          especially when conducting research and working independently throughout the process.
          One of the main difficulties was ensuring that the research phase was comprehensive
          and user-centered without the direct support of a team to brainstorm, validate ideas,
          or provide diverse perspectives. Collecting insights from educators and students
          required extra effort to engage participants, analyze qualitative data, and translate
          findings into actionable design decisions on my own.
        </p>
        <p className="org-challenges__text">
          Additionally, balancing research, ideation, prototyping, and iteration independently
          made the process more complex. Without immediate feedback loops, I had to continuously
          reevaluate my decisions, ensuring they aligned with the users&rsquo; needs while
          maintaining usability and engagement. Despite these challenges, this experience
          strengthened my ability to self-manage, adapt, and refine my problem-solving approach,
          reinforcing the importance of collaboration and iterative design in user-centered
          solutions.
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

      {/* ── REFERENCES DETAIL PANEL ── */}
      {showReferencesDetail && (
        <div className="org-overlay" onClick={() => setShowReferencesDetail(false)}>
          <div className="org-panel" onClick={e => e.stopPropagation()}>
            <button className="org-panel-close" onClick={() => setShowReferencesDetail(false)} aria-label="Close">&times;</button>
            <div className="org-panel__img">
              <img src={imgReferences} alt="References" />
            </div>
            <div className="org-panel__text">
              <h3>References</h3>
              <p>
                The reference collection process revealed how different apps structure the
                experience of grading exams, highlighting navigation patterns, visual clarity,
                and usability flows.
              </p>
              <p>
                The qualitative analysis identified solutions focused on efficiency, reduced
                cognitive load, and more intuitive interactions for teachers.
              </p>
              <p>
                By comparing the old flow with the new proposal, it was possible to recognize
                friction points and transform insights into functional improvements.
              </p>
              <p>
                The visual and structural references supported the creation of a more accessible,
                efficient, and user-centered experience.
              </p>
              <a className="org-figma-link" href="https://www.figma.com/board/i2TYiFnSJU0PfYuIym8Seb/Teaching-Without-Borders-%26-UXPAND?node-id=0-1&t=d7wklO9EXaMPjZPN-1" target="_blank" rel="noopener noreferrer">
                &#8250; Go to Figjam
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── STYLE GUIDE & WIREFRAMES DETAIL PANEL ── */}
      {showStyleWireframesDetail && (
        <div className="org-overlay" onClick={() => setShowStyleWireframesDetail(false)}>
          <div className="org-panel" onClick={e => e.stopPropagation()}>
            <button className="org-panel-close" onClick={() => setShowStyleWireframesDetail(false)} aria-label="Close">&times;</button>
            <div className="org-panel__img">
              <img src={imgStyleWireframes} alt="Developing Style Guide and Wireframes" />
            </div>
            <div className="org-panel__text">
              <h3>Developing Style Guide and Wireframes</h3>
              <p>
                The creation of a simple Style Guide and initial wireframes was essential to
                establish a cohesive and intuitive visual direction for the project. The Style
                Guide helped define the core visual identity&mdash;such as colors, typography,
                and interface components&mdash;ensuring consistency across all screens.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── HIGH-FIDELITY PROTOTYPE DETAIL PANEL ── */}
      {showPrototypeDetail && (
        <div className="org-overlay" onClick={() => setShowPrototypeDetail(false)}>
          <div className="org-panel" onClick={e => e.stopPropagation()}>
            <button className="org-panel-close" onClick={() => setShowPrototypeDetail(false)} aria-label="Close">&times;</button>
            <div className="org-panel__img">
              <img src={imgPrototype} alt="High-fidelity Prototype" />
            </div>
            <div className="org-panel__text">
              <h3>High-fidelity Prototype</h3>
              <p>
                A high-fidelity prototype was developed to translate the project&rsquo;s core
                functionalities into a modern and intuitive interface focused on user experience.
                The prototype incorporates key features such as QR code reading and interpretation
                technologies, and data analysis mechanisms.
              </p>
              <p>
                These elements were visually structured to reflect a coherent and efficient
                workflow, ensuring that teachers can easily navigate the app&rsquo;s main tools.
              </p>
              <p>
                The prototype also showcases how the application supports the digitalization and
                automatic correction of tests through QR code scanning, immediate comparison with
                answer keys, and identification of inconsistencies. By simulating real user
                interactions, the high-fidelity prototype highlights how the app aims to optimize
                the assessment process in the Brazilian educational context, offering a fast,
                reliable, and scalable solution for large numbers of students.
              </p>
              <a className="org-figma-link" href="https://www.figma.com/board/i2TYiFnSJU0PfYuIym8Seb/Teaching-Without-Borders-%26-UXPAND?node-id=0-1&t=d7wklO9EXaMPjZPN-1" target="_blank" rel="noopener noreferrer">
                &#8250; Go to Figma
              </a>
            </div>
          </div>
        </div>
      )}





    </div>
  )
}
