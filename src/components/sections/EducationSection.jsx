import { useState } from 'react'

const panels = [
  {
    id: 1,
    bg: 'https://images.unsplash.com/photo-1572894234976-d961418c709d?w=600&h=600&fit=crop&crop=faces&auto=format&q=80',
    text: '... from São Paulo',
  },
  {
    id: 2,
    bg: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=600&fit=crop&crop=faces&auto=format&q=80',
    text: 'Pedagogy\nUniversity of São Paulo\n2000 - 2004\n\nTeacher of Elementary School\nCity Hall of São Paulo\n2005 - 2019',
  },
  {
    id: 3,
    bg: 'https://images.unsplash.com/photo-1763568258208-a5af30d5a31b?w=600&h=600&fit=crop&crop=faces&auto=format&q=80',
    text: 'Bachelor of Information Technology\nUniversity of State of São Paulo\n2005 - 2007',
  },
  {
    id: 4,
    bg: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600&h=600&fit=crop&crop=faces&auto=format&q=80',
    text: 'Master in Education\nUniversity of State of São Paulo\n2009 - 2011\n\nPHD in Communication\nUniversity of State of São Paulo\n2017 - 2021',
  },
  {
    id: 5,
    bg: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=600&h=600&fit=crop&crop=faces&auto=format&q=80',
    text: 'Educational Digital Content Producer\nKroton Educacional\n2017 - 2021\n\nFront End Development\nSundsgården Folk High School\njan/2022 - jun/2022',
  },
  {
    id: 6,
    bg: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=600&h=600&fit=crop&crop=faces&auto=format&q=80',
    text: 'Master in Technology and Learning\nUniversity of Gothenburg\n2022 - jun/2024',
  },
  {
    id: 7,
    bg: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=600&fit=crop&crop=faces&auto=format&q=50',
    text: 'UX/UI Designer\nProjects\n2024 - 2025',
  },
  {
    id: 8,
    bg: 'https://images.unsplash.com/photo-1704592175100-3d5cc0d30e80?w=600&h=600&fit=crop&crop=faces&auto=format&q=80',
    text: '...to Gothenburg.',
  },
]

export default function EducationSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  const prev = () => setActiveIdx(i => (i - 1 + panels.length) % panels.length)
  const next = () => setActiveIdx(i => (i + 1) % panels.length)

  const getPosition = (idx) => {
    const diff = (idx - activeIdx + panels.length) % panels.length
    if (diff === 0) return 'active'
    if (diff === 1) return 'next1'
    if (diff === 2) return 'next2'
    if (diff === panels.length - 1) return 'prev1'
    if (diff === panels.length - 2) return 'prev2'
    return 'hidden'
  }

  return (
    <section className="education" id="education">
      <h1 className="heading space-h"><span>Education &amp; Experiences</span></h1>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="edu-carousel">
        <button className="edu-arrow edu-arrow--prev" onClick={prev} aria-label="Previous">&#8249;</button>

        <div className="edu-track">
          {panels.map(({ id, bg, text }, idx) => {
            const pos = getPosition(idx)
            return (
              <div
                key={id}
                className={`edu-card edu-card--${pos}`}
                style={{ backgroundImage: `url('${bg}')` }}
                onClick={() => pos !== 'hidden' && pos !== 'active' && setActiveIdx(idx)}
                role="button"
                tabIndex={pos !== 'hidden' ? 0 : -1}
                onKeyDown={e => e.key === 'Enter' && pos !== 'hidden' && setActiveIdx(idx)}
              >
                <div className="edu-card__overlay" />
                <div className="edu-card__text">
                  {text.split('\n').map((line, i) => (
                    <span key={i}>{line || '\u00A0'}<br /></span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <button className="edu-arrow edu-arrow--next" onClick={next} aria-label="Next">&#8250;</button>
      </div>
    </section>
  )
}
