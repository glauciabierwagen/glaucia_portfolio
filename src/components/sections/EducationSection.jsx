// EducationSection.jsx - This section shows an interactive image carousel.
// Each card represents a step in the education and experience timeline.
// The user can click the arrows (< >) to navigate between cards.

// useState is used to track which card is currently in the center (active).
import { useState } from 'react'

// 'panels' is the data array for the carousel cards.
// Each object has an id, bg (background image URL), and text (the info to display).
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
  // activeIdx stores the index (position number) of the currently centered card.
  // It starts at 0, meaning the first card is active when the page loads.
  const [activeIdx, setActiveIdx] = useState(0)

  // prev() moves one card to the left.
  // The modulo (%) wraps around: if we're at card 0, going left takes us to the last card.
  const prev = () => setActiveIdx(i => (i - 1 + panels.length) % panels.length)

  // next() moves one card to the right, wrapping from the last card back to the first.
  const next = () => setActiveIdx(i => (i + 1) % panels.length)

  // getPosition() figures out where each card should appear relative to the active one.
  // It returns a string like 'active', 'next1', 'prev1', or 'hidden'.
  // These strings are used as CSS class names to position and scale each card.
  const getPosition = (idx) => {
    // diff is how many steps ahead this card is from the active card
    const diff = (idx - activeIdx + panels.length) % panels.length
    if (diff === 0) return 'active'              // This card is in the center
    if (diff === 1) return 'next1'               // One position to the right
    if (diff === 2) return 'next2'               // Two positions to the right
    if (diff === panels.length - 1) return 'prev1' // One position to the left
    if (diff === panels.length - 2) return 'prev2' // Two positions to the left
    return 'hidden'                              // Too far away - hide it
  }

  return (
    // id="education" links this section to the Education menu item in the Navbar
    <section className="education" id="education">
      <h1 className="heading space-h"><span>Education &amp; Experiences</span></h1>

      {/* Decorative divider with a star icon */}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="edu-carousel">
        {/* Left arrow button - calls prev() to go back one card */}
        <button className="edu-arrow edu-arrow--prev" onClick={prev} aria-label="Previous">&#8249;</button>

        {/* The track holds all the cards. Each card is positioned with CSS based on its class. */}
        <div className="edu-track">
          {panels.map(({ id, bg, text }, idx) => {
            // Calculate this card's position class (active, next1, prev1, hidden, etc.)
            const pos = getPosition(idx)
            return (
              <div
                key={id}
                className={`edu-card edu-card--${pos}`}
                style={{ backgroundImage: `url('${bg}')` }}
                // Clicking a side card makes it the active one.
                // Hidden cards and the active card are not clickable.
                onClick={() => pos !== 'hidden' && pos !== 'active' && setActiveIdx(idx)}
                role="button"
                tabIndex={pos !== 'hidden' ? 0 : -1}  // Hidden cards can't be focused by Tab
                onKeyDown={e => e.key === 'Enter' && pos !== 'hidden' && setActiveIdx(idx)}
              >
                {/* Semi-transparent overlay on top of the background image */}
                <div className="edu-card__overlay" />
                <div className="edu-card__text">
                  {/* Split the text by newlines and render each line with a <br />
                      '\u00A0' is a non-breaking space used for blank lines */}
                  {text.split('\n').map((line, i) => (
                    <span key={i}>{line || '\u00A0'}<br /></span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right arrow button - calls next() to go forward one card */}
        <button className="edu-arrow edu-arrow--next" onClick={next} aria-label="Next">&#8250;</button>
      </div>
    </section>
  )
}
