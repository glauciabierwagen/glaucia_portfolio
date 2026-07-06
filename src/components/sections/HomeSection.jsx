// HomeSection.jsx - This is the hero/introduction section of the portfolio.
// It displays a profile photo on the left and a short bio text on the right.
// It also has a button that links to a short video presentation.

export default function HomeSection() {
  return (
    // The id="home" links this section to the "Home" menu item in the Navbar
    <section className="home" id="home">
      <div className="container-card">

        {/* Left side: profile photo inside a box card */}
        <div className="box-container">
          <div className="box">
            <div className="card-imagem">
              <img
                className="projects__item-img"
                // import.meta.env.BASE_URL is the base path set in vite.config.js
                // It ensures images load correctly on GitHub Pages
                src={`${import.meta.env.BASE_URL}images/FotoCV2.jpg`}
                alt="Gláucia Silva Bierwagen"
              />
            </div>
          </div>
        </div>

        {/* Right side: name, bio paragraph and video button */}
        <div className="box-container">
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
