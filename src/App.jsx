// App.jsx - This is the root component of the portfolio.
// It imports all the main sections and puts them together in the right order.
// Routes let us navigate to project detail pages without reloading the page.

// Routes and Route come from React Router - they decide which component to show
// based on the current URL path.
import { Routes, Route } from 'react-router-dom'

// Importing the layout components (header and footer)
import Header from './components/Header'
import Footer from './components/Footer'

// Importing each section of the page
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import EducationSection from './components/sections/EducationSection'
import PortfolioSection from './components/sections/PortfolioSection'

// Importing project detail pages
import QuizzApp from './components/projects/quizzapp/QuizzApp.jsx'
import Organization from './components/projects/organization/organization.jsx'
import MinhaProva from './components/projects/minhaprova/minhaprova.jsx'

// The App function returns the full page structure.
export default function App() {
  return (
    <Routes>
      {/* Route '/' shows the full portfolio page */}
      <Route path="/" element={
        <>
          <Header />
          <main>
            <HomeSection />
            <AboutSection />
            <EducationSection />
            <PortfolioSection />
          </main>
          <Footer />
        </>
      } />

      {/* Route '/quizzapp' shows the Quiz App project detail page */}
      <Route path="/quizzapp" element={<QuizzApp />} />
      {/* Route '/organization' shows the Organization project detail page */}
      <Route path="/organization" element={<Organization />} />
      {/* Route '/minhaprova' shows the Minha Prova project detail page */}
      <Route path="/minhaprova" element={<MinhaProva />} />
    </Routes>
  )
}
