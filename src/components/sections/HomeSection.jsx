// HomeSection.jsx - This is the hero/introduction section of the portfolio.
// It displays a 3D cube viewer on the left and a short bio text on the right.

import { useState, useRef } from 'react'

// CubeViewer encapsulates all cube rotation logic using React state and refs
function CubeViewer() {
  const [x, setX] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [previewOffset, setPreviewOffset] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef(null)
  const base = import.meta.env.BASE_URL

  // Build background style for each face slice
  // Uses BASE_URL so paths work correctly in dev and production (Vite)
  const faceStyle = (img, yOffset) => ({
    backgroundImage: `url(${base}images/${img})`,
    backgroundPosition: `50% ${yOffset}`,
    backgroundSize: 'cover',
  })

  const cubeData = [
    {
      name: 'cube-1',
      front: faceStyle('FotoCV5.jpeg', '0px'),
      back:  faceStyle('FotoCV2.jpg',  '0px'),
      left:  faceStyle('FotoCV4.png',  '0px'),
      right: faceStyle('FotoCV3.jpeg', '0px'),
    },
    {
      name: 'cube-2',
      front: faceStyle('FotoCV5.jpeg', '-153px'),
      back:  faceStyle('FotoCV2.jpg',  '-153px'),
      left:  faceStyle('FotoCV4.png',  '-153px'),
      right: faceStyle('FotoCV3.jpeg', '-153px'),
    },
    {
      name: 'cube-3',
      front: faceStyle('FotoCV5.jpeg', '-307px'),
      back:  faceStyle('FotoCV2.jpg',  '-307px'),
      left:  faceStyle('FotoCV4.png',  '-307px'),
      right: faceStyle('FotoCV3.jpeg', '-307px'),
    },
  ]

  const stopPlaying = () => {
    clearInterval(intervalRef.current)
    setIsPlaying(false)
  }

  const playPause = () => {
    if (!isPlaying) {
      intervalRef.current = setInterval(() => {
        setX(prev => prev - 90)
        setIsAnimating(true)
      }, 3000)
      setIsPlaying(true)
    } else {
      stopPlaying()
    }
  }

  const handleLeftClick = () => {
    setX(prev => prev + 90)
    setIsAnimating(true)
    if (isPlaying) stopPlaying()
  }

  const handleRightClick = () => {
    setX(prev => prev - 90)
    setIsAnimating(true)
    if (isPlaying) stopPlaying()
  }

  const rotateStyle = { transform: `rotateY(${x + previewOffset}deg)` }

  return (
    <div className="cube-scene">
      <div className="viewport">
        <div
          className="control left-arrow"
          onClick={handleLeftClick}
          onMouseOver={() => setPreviewOffset(25)}
          onMouseOut={() => setPreviewOffset(0)}
        >
          <i className="fas fa-arrow-left"></i>
        </div>

        {cubeData.map(({ name, front, back, left, right }) => (
          <div
            key={name}
            className={`cube ${name}${isAnimating ? ' cube-animating' : ''}`}
            style={rotateStyle}
            onTransitionEnd={name === 'cube-3' ? () => setIsAnimating(false) : undefined}
          >
            <div className="face front" style={front}></div>
            <div className="face back"  style={back}></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="face left"  style={left}></div>
            <div className="face right" style={right}></div>
          </div>
        ))}

        <div
          className="control right-arrow"
          onClick={handleRightClick}
          onMouseOver={() => setPreviewOffset(-25)}
          onMouseOut={() => setPreviewOffset(0)}
        >
          <i className="fas fa-arrow-right"></i>
        </div>

        <div className="control play-pause" onClick={playPause}>
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </div>
      </div>
    </div>
  )
}

export default function HomeSection() {
  return (
    // The id="home" links this section to the "Home" menu item in the Navbar
    <section className="home" id="home">
      <div className="container-card">

        {/* Left side: 3D cube viewer */}
        <div className="box-container">
          <div className="box">
            <div className="card-imagem">
              <CubeViewer />
            </div>
          </div>
        </div>

        {/* Right side: name, bio paragraph and video button */}
        <div className="box-container" style={{ flex: 1, minWidth: 0 }}>
          <div className="box">
            {/* &apos; is the HTML entity for an apostrophe - used inside JSX */}
            <h1>I&apos;m <span>Gláucia Silva Bierwagen</span></h1>

            {/* animate__animated and animate__slideInUp are Animate.css classes
                that add a slide-up animation when the page loads */}
            <p className="animate__animated animate__slideInUp">
              and I consider myself an educator at heart. Inspired by Paulo Freire&apos;s belief
              that education is an act of liberation — where curiosity, dialogue, and critical
              thinking transform both the learner and the world — I have spent over 15 years
              working in classrooms, online learning, and teacher training.
              <br /><br />
              But I have always been passionate about technology. I see it not just as a tool,
              but as a way to open doors, connect people, and create meaningful learning
              experiences. That passion led me to explore UX/UI design and development, where
              I can bring together my background in education, research, and human-centered
              thinking to build digital solutions that truly serve people.
            </p>

            {/* Button that opens the video in a new tab */}
            <a
              href="https://www.powtoon.com/c/eOMzO1m6YgJ/1/m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">
                Short video about me &gt; <img src={`${import.meta.env.BASE_URL}images/favicon.ico`} alt="" />
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

