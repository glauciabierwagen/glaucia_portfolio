import profileImg from '../../images/FotoCV2.jpg'
import faviconImg from '../../images/favicon.ico'

export default function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="container-card">

        <div className="box-container">
          <div className="box">
            <div className="card-imagem">
              <img
                className="projects__item-img"
                src={profileImg}
                alt="Gláucia Silva Bierwagen"
              />
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <h1>I&apos;m <span>Gláucia Silva Bierwagen</span></h1>
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
            <a
              href="https://www.powtoon.com/c/eOMzO1m6YgJ/1/m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">
                Short video about me &gt; <img src={faviconImg} alt="" />
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
