// Header.jsx - This component renders the top header of the page.
// It is a simple wrapper that places the Navbar inside a <header> HTML tag.
// Keeping it as a separate component makes the code easier to read and maintain.

// Importing the Navbar component from the same folder
import Navbar from './Navbar'

export default function Header() {
  return (
    // The <header> tag is a semantic HTML5 element - it tells the browser
    // this is the top section of the page, which is good for SEO and accessibility.
    <header className="header">
      <Navbar /> {/* The navigation menu is rendered here */}
    </header>
  )
}
