// App.jsx - This is the root component of the portfolio.
// It imports all the main sections and puts them together in the right order.

// Importing the layout components (header and footer)
import Header from './components/Header'
import Footer from './components/Footer'

// Importing each section of the page
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import EducationSection from './components/sections/EducationSection'
import PortfolioSection from './components/sections/PortfolioSection'

// The App function returns the full page structure.
// <> </> is a React Fragment - it groups elements without adding extra HTML tags.
export default function App() {
  return (
    <>
      {/* The header stays at the top - it contains the navigation menu */}
      <Header />

      {/* The main tag wraps all the page sections */}
      <main>
        <HomeSection />       {/* Hero / introduction section */}
        <AboutSection />      {/* About me section with skill modals */}
        <EducationSection />  {/* Education and experience timeline carousel */}
        <PortfolioSection />  {/* Portfolio grid with project cards */}
      </main>

      {/* The footer stays at the bottom - it has social media links */}
      <Footer />
    </>
  )
}
