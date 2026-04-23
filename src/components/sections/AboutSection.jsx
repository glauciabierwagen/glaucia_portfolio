import { useState } from 'react'

const items = [
  {
    id: 1,
    label: 'My history',
    img: `${import.meta.env.BASE_URL}images/about/history.png`,
    title: 'My history',
    content: (
      <h2 className="mb-5">
        I am from Brazil. There I grown up and had my first experiences.
        It is a country with a beautiful and rich culture.<br /><br />
        I majored in Pedagogy and worked as a teacher in elementary schools where I learned about
        the diversity of this big country, but also some difficulties. In the schools, I learned
        with students and co-workers about solidarity, cooperation, collaborative learning,
        culture and social critical analysis.<br /><br />
        When I was already a teacher I majored in Information Technology, but I never worked as
        developer. I used the course to understand technologies applied in learning.<br /><br />
        I also did academic advanced studies. The scholar space was the spot where I learned to
        research and constantly develop my autonomy. And, now I&apos;ve been in Sweden, learning
        to change my career, intending to be a developer.
      </h2>
    ),
  },
  {
    id: 2,
    label: 'Programming Knowledge',
    img: `${import.meta.env.BASE_URL}images/about/programming.png`,
    title: 'Programming Skills',
    content: (
      <h2 className="mb-4">
        Some of my programming skills and computer programs knowledge:<br /><br />
        • Microsoft Office Word, Excel and Powerpoint.<br />
        • HTML, CSS, Sass, Bootstrap, JavaScript, React and Git / GitHub.<br />
        • Learning Manage Systems: Canva, Moodle.
      </h2>
    ),
  },
  {
    id: 3,
    label: 'Teaching',
    img: `${import.meta.env.BASE_URL}images/about/teaching.png`,
    title: 'Teaching Skills',
    content: (
      <h2 className="mb-4">
        Some of my teaching skills:<br /><br />
        • In brazilian public education system, acting as a teacher of portuguese literacy,
        mathematics, history, social studies, digital literacy, media literacy and sciences
        with students between six and fourteen years.<br /><br />
        • Teaching and learning based on active methodologies: socioconstructivism, learning
        based in problems and projects and gamification.<br /><br />
        • Production of content of materials for online education: texts, infographics, videos,
        audios, storyboards and mental maps.
      </h2>
    ),
  },
  {
    id: 4,
    label: 'Researching',
    img: `${import.meta.env.BASE_URL}images/about/researcher.png`,
    title: 'Researcher',
    content: (
      <h2 className="mb-4">
        Some of my researcher skills:<br /><br />
        • Production of academic articles in education and communication fields, in subjects
        like: training teachers, learning technologies and e-learning.<br /><br />
        • Work in a research group which does researches about ICT in the Brazilian public
        education system.<br /><br />
        • Master in Education, researching the use of blog by teachers.<br /><br />
        • PHD in Communication, researching about digital and media literacy of Brazilian
        teachers.
      </h2>
    ),
  },
  {
    id: 5,
    label: 'Language Skills',
    img: `${import.meta.env.BASE_URL}images/about/language.png`,
    title: 'Language Skills',
    content: (
      <h2 className="mb-4">
        Some of my language skills:<br /><br />
        • Portuguese: native.<br />
        • English: advanced.<br />
        • Spanish: advanced.<br />
        • Swedish: beginner (studying).
      </h2>
    ),
  },
  {
    id: 6,
    label: 'Hobbies',
    img: `${import.meta.env.BASE_URL}images/about/hobbies.png`,
    title: 'Hobbies',
    content: (
      <h2 className="mb-4">
        Some of my hobbies:<br /><br />
        • Learning new things.<br />
        • Reading classic histories and contemporary literature.<br />
        • Watching films, series, shows and theatre performances.<br />
        • Swimming and travel as much as possible.<br />
        • Interest in subjects like art, literature, technology, culture, nature, language and so on.
      </h2>
    ),
  },
]

function AboutModal({ item, onClose }) {
  return (
    <div
      className="portfolio-modal modal"
      style={{ display: 'block', background: 'rgba(0,0,0,0.6)', position: 'fixed', inset: 0, zIndex: 2000, overflowY: 'auto' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-xl" style={{ margin: '2rem auto' }}>
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              className="btn-close"
              type="button"
              onClick={onClose}
              aria-label="Close"
              style={{ marginLeft: 'auto', fontSize: '2rem', cursor: 'pointer', background: 'none', border: 'none' }}
            >✕</button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{item.title}</h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <img className="img-fluid rounded mb-5" src={item.img} alt={item.title} width="250" />
                  {item.content}
                  <button className="btn btn-primary" onClick={onClose}>Close Window</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutSection() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <section className="page-section portfolio" id="about">
      <div className="container">
        <h1 className="heading"><span>About me</span></h1>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">
          {items.map(item => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                role="button"
                tabIndex={0}
                onClick={() => setActiveModal(item)}
                onKeyDown={e => e.key === 'Enter' && setActiveModal(item)}
                style={{ cursor: 'pointer' }}
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    {item.label}<br /><i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={item.img} alt={item.label} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal && (
        <AboutModal item={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  )
}
