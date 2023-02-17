import './App.css'
import './media.css'
import 'react-tooltip/dist/react-tooltip.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { primaryCol} from './colors'
import SideMenu from "./components/SideMenu"
import Theme from './components/Theme'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import PortfolioPage from './Pages/PortfolioPage'
import ServicesPage from './Pages/ServicesPage'
import ErrorPage from './Pages/ErrorPage'
import Backdrop from './components/Backdrop'


AOS.init();

function App() {
  var session = {
    theme: eval( sessionStorage.getItem("theme") ),
    col: sessionStorage.getItem("primCol"),
  }

  const [primaryColor, setPrimaryColor] = useState( session.col!=null ? session.col : "blueViolet")
  const [theme, setTheme] = useState(session.theme!=null ? session.theme : true)
  sessionStorage.setItem("theme", theme)
  sessionStorage.setItem("primCol", primaryColor)

    useEffect( () => {
      document.documentElement.className = `${theme ? `light ${primaryColor}` : `dark ${primaryColor}` }`
    } )
    var handleColor = (e) => {
        setPrimaryColor(e.target.ariaLabel)
    }

    var handleTheme = () => {
        setTheme(!theme)
    }

    // For Media Query SideBar
    const [showMenuBar, setShowMenuBar] = useState(false)

    var handleBody = (e) => {
      e.target.closest(".theme > *") == null && e.target.closest(".side-menu") == null && setShowMenuBar(false)
    }

    useEffect( () => {
      document.documentElement.addEventListener("click", e => handleBody(e))
      return (
          document.documentElement.removeEventListener("click", e => handleBody(e))
      )
  }, [] )

  return (
    <div className={`App`}>
    {/* During Production Change basename to /build/ to avoid storied that touch
        Also set homepage to "http://localhost/build/" to avoid more stories that touch!!!
     */}
      <Router>
      <SideMenu showMenuBar={showMenuBar}/>
      <Theme colors={primaryCol} handleColor={handleColor} theme={theme} handleTheme={handleTheme} setShowMenuBar={setShowMenuBar}/>
      <Backdrop showMenuBar={showMenuBar}/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
     <ToastContainer/>
    </div>
  );
}

export default App;
