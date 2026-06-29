// Academic.jsx - Project detail page for the Academic Production section.
// Layout follows the portfolio design system: Nunito font, #1abc9c accent, card sections.
// Structure: hero (title + description | Lattes link), research carousel, panels per slide.

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
        <h2 className="project-section-title">Academic &amp; Research </h2>

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
          <strong>1. Digital inequality in education</strong> Exploring how differences in access to technology, internet infrastructure, robotics kits, AI tools, and digital devices affect teaching and learning, especially in public education contexts.
        </p>
        <p className="project-challenges__text">
          <strong>2. Teacher competencies for digital, AI, and computational education</strong> Investigating how teacher education programs can better support educators in developing digital literacy, AI awareness, programming basics, and the confidence to integrate technologies such as robotics and coding into classroom practice.
        </p>
        <p className="project-challenges__text">
          <strong>3. Transition to emergency remote teaching (ERE) and digital adaptation</strong> Studying the challenges teachers faced when rapidly shifting from in-person to online teaching, including adapting methodologies, learning new platforms, and maintaining engagement in technology-mediated environments.
        </p>
        <p className="project-challenges__text">
          <strong>4. Meaningful integration of technology in learning experiences</strong> Focusing on how digital tools, including programming activities, robotics, and AI-based resources, can move beyond functional use to support active learning, creativity, problem-solving, and student-centered experiences.
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

      {/* ── BOOKS PANEL ── */}
      {showAuthenticationDetail && (
        <div className="rd-overlay" onClick={() => setShowAuthenticationDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowAuthenticationDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgBooks} alt="Books" />
            </div>

            {/* Col 2: List of chapters published */}
            <div className="rd-text">
              <h3> Books and thesis</h3>
               <p>
                Chapters of books in training teachers in media and technology. 
              </p>
              <ul className="rd-text">
                <li>
                  Teles, E. C., &amp; Bierwagen, G. S. (2021). Formação midiática e tecnológica de docentes. In A. Citelli (Ed.), <em>Comunicação e educação: dinâmicas midiáticas e cenários escolares</em> (pp. 79–100). EDITUS. <a href="https://doi.org/10.7476/9786586213379.0008" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
                <li>
                  Bierwagen, G. S., &amp; Teles, E. C. (2020). Formação docente em tempos de pandemia da COVID-19: Os media e as tecnologias de informação e comunicação. In A. Citelli (Ed.), <em>Comunicação e educação: desafios do ensino remoto emergencial</em> (pp. 79–100). EDITUS. <a href="https://doi.org/10.7476/9786586213379.0008" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
                <li>
                  Bierwagen, G. S., &amp; Soledade, R. T. (2024). Infraestrutura tecnológica escolar no ensino remoto emergencial: alcance e limitações para os(as) docentes. In A. Citelli (Org.), <em>Educomunicação no contexto pandêmico: desafios do ensino remoto</em> (pp. não informadas). Editus. (Comunicação e educação; v. 8).
                </li>
                <li>
                  Bierwagen, G. S. (2021). Vozes da (trans)formação docente na perspectiva da comunicação/educação (Tese de doutorado, Universidade de São Paulo). Repositório da Universidade de São Paulo. <a href="https://teses.usp.br/teses/disponiveis/27/27164/tde-31082021-195415/publico/GlauciaSilvaBierwagenVC.pdf" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
                <li>
                  Bierwagen, G. S. (2011). Uma proposta de uso do blog como ferramenta de auxílio ao ensino de ciências nas séries finais do ensino fundamental [Dissertação de mestrado não publicada]. Faculdade de Educação, Universidade de São Paulo. <a href="https://teses.usp.br/teses/disponiveis/48/48134/tde-20012012-085003/pt-br.html" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ── EDUCATIONAL PRODUCTS PANEL ── */}
      {showEmployerDetail && (
        <div className="rd-overlay" onClick={() => setShowEmployerDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowEmployerDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgEducationalProducts} alt="Educational Products" />
            </div>

            {/* Col 2: title + description + Figma link */}
            <div className="rd-text">
              <h3>Educational Products</h3>
               <p>
                Products created for educational online courses and workshops.
              </p>
              <ul className="rd-text">
                <li>
                  Moletta, A. K., Bierwagen, G. S., & Toledo, M. E. R. de O. (2018). A educação infantil e a garantia dos direitos fundamentais da infância [E-book] [Early childhood education and the guarantee of fundamental childhood rights]. SAGAH. <a href="https://integrada.minhabiblioteca.com.br/reader/books/9788595027732" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
                <li>
                  Universidade Anhanguera. (n.d.). Teoria dos jogos e gamificação [Course, 40 hours] [Game theory and gamification]. <a href="https://www.posuniderp.com.br/teoria-dos-jogos-e-gamificacao-anhanguera-extensao/p" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      )}

      {/* ── PAPERS PANEL ── */}
      {showEmployer2Detail && (
        <div className="rd-overlay" onClick={() => setShowEmployer2Detail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowEmployer2Detail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgPaper} alt="Paper" />
            </div>

            {/* Col 2: title + paper list */}
            <div className="rd-text">
              <h3>Conference Papers</h3>
              <p>
                Papers presented at national and international academic conferences (APA 7),
                with English translations of Portuguese titles.
              </p>
              <p>
              <ul className="rd-text">
                <li>Bierwagen, G. S., &amp; Soledade, R. T. (2023). <em>O que esperar da educação pós-pandemia? Uma visão educomunicativa amparada na análise da experiência do ERE</em> [What to expect from post-pandemic education? An educommunicative perspective based on the analysis of emergency remote education experiences]. In <em>Anais do 46º Congresso Brasileiro de Ciências da Comunicação</em>. Intercom. <a href="https://sistemas.intercom.org.br/pdf/link_aceite/nacional/11/0816202323252164dd851104e43.pdf" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S., &amp; Soledade, R. T. (2022). <em>A formação docente e seus reflexos no uso de plataformas de videoconferência durante o ensino remoto emergencial</em> [Teacher education and its impacts on the use of videoconferencing platforms during emergency remote teaching]. In <em>Anais do 45º Congresso Brasileiro de Ciências da Comunicação</em>. Intercom. <a href="https://portalintercom.org.br/anais/nacional2022/resumo/0805202218100262ed872a33af2.pdf" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S., &amp; Soledade, R. T. (2021). <em>Adaptação docente ao ERE: Desafios e adoção de metodologias ativas</em> [Teachers&#39; adaptation to emergency remote education: Challenges and adoption of active learning methodologies]. In <em>Anais do 44º Congresso Brasileiro de Ciências da Comunicação</em>. Intercom. <a href="https://portalintercom.org.br/anais/nacional2021/resumos/dt6-cd/galucia-silva-bierwagen.pdf" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S. (2022). <em>As múltiplas alfabetizações docentes para o século XXI</em> [Multiple teacher literacies for the twenty-first century]. In <em>III Conferência Euroamericana para o Desenvolvimento dos Direitos Humanos</em>.</li>
                <li>Bierwagen, G. S. (2020). <em>Formação continuada docente em tempos de pandemia da COVID-19: Os media e as tecnologias de informação e comunicação</em> [Continuing teacher education during the COVID-19 pandemic: Media and information and communication technologies]. In <em>Anais do 43º Congresso Brasileiro de Ciências da Comunicação</em>. Intercom. <a href="https://www.portalintercom.org.br/anais/nacional2020/resumos/R15-1315-1.pdf" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S., &amp; Teles, E. C. (2019). <em>Educação midiática e tecnológica na formação docente</em> [Media and technology education in teacher education]. In <em>Anais do 42º Congresso Brasileiro de Ciências da Comunicação</em>. Intercom. <a href="https://portalintercom.org.br/anais/nacional2019/resumos/R14-1407-1.pdf" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S. (2018). <em>Plataforma Khan Academy na educação básica</em> [The Khan Academy platform in basic education]. In <em>Congresso Internacional de Educação e Tecnologias: Docência e mediação pedagógica</em>. <a href="https://ciet.ufscar.br/submissao/index.php/ciet/article/view/2507" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S. (2018). <em>Revisão sistemática: Gamificação na educação</em> [Systematic review: Gamification in education]. In <em>Anais Eletrônicos do XI Simpósio Nacional da ABCiber</em>. <a href="https://abciber.org.br/simposios/index.php/abciber/abciber11/paper/view/358" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S. (2018). <em>Revisão de literatura: Formação continuada docente para educação midiática</em> [Literature review: Continuing teacher education for media education]. In <em>Anais do Congresso Educação Campus do Pantanal da Universidade Federal de Mato Grosso do Sul</em>. <a href="https://cecpan.ufms.br/files/2019/08/C_25.pdf" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S. (2017). <em>Educação midiática e os professores no locus da sala de aula</em> [Media education and teachers in the classroom context]. In <em>40º Congresso Brasileiro de Ciências da Comunicação</em>. Intercom. <a href="https://portalintercom.org.br/anais/nacional2019/resumos/R14-1407-1.pdf" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S. (2017). <em>Práticas apoiadas em tecnologias digitais de comunicação e informação (TDIC) na educação básica: Perspectiva educomunicativa</em> [Practices supported by digital information and communication technologies in basic education: An educommunicative perspective] (pp. 1315–1334). In <em>IBERCOM 2017: Livro de Anais</em>. <a href="https://www.cecs.uminho.pt/assibercom/wp-content/uploads/2021/05/ebook-ibercom-2017.pdf" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Bierwagen, G. S. (2017). <em>Plataforma educativa Guten News: Reflexões acerca das literacias de mídia e informação</em> [Guten News educational platform: Reflections on media and information literacies]. In <em>Anais do X Simpósio Nacional da ABCiber</em>. <a href="https://www.abciber.org.br/anais-abciber-2017.pdf?_gl=1*1fr1z5i*_ga*MTY1MDY5MTgwOC4xNzgyMjMyNDk2*_ga_G0HZJCDKBW*czE3ODIyMzI0OTUkbzEkZzEkdDE3ODIyMzMxMzQkajQ4JGwwJGgw" target="_blank" rel="noopener noreferrer">Link</a></li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      )}

        

      {/* ── RESEARCH GROUP ── */}
      {showEmployeesDetail && (
        <div className="rd-overlay" onClick={() => setShowEmployeesDetail(false)}>
          <div className="rd-panel" onClick={e => e.stopPropagation()}>
            <button className="rd-close" onClick={() => setShowEmployeesDetail(false)} aria-label="Close">&times;</button>

            {/* Col 1: main large image */}
            <div className="rd-main">
              <img src={imgResearchGroup} alt="Research Group" />
            </div>

            {/* Col 2: title + description + Figma link */}
            <div className="rd-text">
              <h3>Research Group </h3>
              <p>
                Participation in national research of application of technologies in education in Brazil.
              </p>
               <ul className="rd-text">
                <li>
                Citelli, A. (Coord.). (2023). Ensino remoto emergencial e transições associadas [recurso eletrônico] [Emergency remote teaching and associated transitions] . São Paulo: ECA-USP. <a href="https://mecom.eca.usp.br/2023.htm" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
              <li>
                Citelli, A. (Org.). (2020). Inter-relações comunicação e educação no contexto do ensino básico [recurso eletrônico] [Interrelations between communication and education in the context of basic education]. São Paulo: ECA-USP. <a href="https://mecom.eca.usp.br/2021.html" target="_blank" rel="noopener noreferrer">Link</a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
