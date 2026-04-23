import Header from './components/Header'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import EducationSection from './components/sections/EducationSection'
import PortfolioSection from './components/sections/PortfolioSection'
import Footer from './components/Footer'

export default function App() {
  return (
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
  )
}
