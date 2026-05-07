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
              and inspired by a Brazilian educator, I view learning as discovery, imagination,
              and transformation. With over 10 years in education, I have worked in classrooms,
              online learning, and technology integration, gaining deep insights into how people
              learn.
              <br /><br />
              Transitioning into UX/UI design and research, I have contributed to educational and
              digital health projects, always prioritizing user needs and engagement. Passionate
              about creating meaningful experiences, I thrive in collaborative and dynamic
              environments, using research-driven design to shape innovative solutions.
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
