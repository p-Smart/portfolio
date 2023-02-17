function App() {
    var session = {
      theme: eval( sessionStorage.getItem("theme") ),
      col: sessionStorage.getItem("primCol"),
    }
  
    const [primaryColor, setPrimaryColor] = useState( session.col!=null ? session.col : primaryCol.blueViolet)
    const [theme, setTheme] = useState(session.theme!=null ? session.theme : true)
    sessionStorage.setItem("theme", theme);
    sessionStorage.setItem("primCol", primaryColor);
  
    const GlobalStyle = createGlobalStyle`
    :root{
          -webkit-tap-highlight-color: transparent;
          --primary : ${primaryColor};
          --theme1 : ${theme ? themeColor.light1 : themeColor.dark1};
          --theme2 : ${theme ? themeColor.light2 : themeColor.dark2};
          --text1 : ${theme ? textColor.dark1 : textColor.light1};
          --text2 : ${theme ? textColor.dark2 : textColor.light1};
          --other : ${theme ? other.light : other.dark};
          --white : ${"#fff"};
    }
    body{ background: var(--theme2); }
    `
      var handleColor = (e) => {
          setPrimaryColor(e.target.ariaLabel)
      }
  
      var handleTheme = () => {
          setTheme(!theme)
      }
  
      // For Media Query SideBar
      const [showMenuBar, setShowMenuBar] = useState(false)
  
      var handleBody = (e) => {
        e.target.closest(".theme") == null && e.target.closest(".side-menu") == null && setShowMenuBar(false)
      }
  
      useEffect( () => {
        document.documentElement.addEventListener("click", e => handleBody(e))
        return (
            document.documentElement.removeEventListener("click", e => handleBody(e))
        )
    }, [] )
  
    return (
      <div className="App">
      {/* During Production Change basename to /build/ to avoid storied that touch
          Also set homepage to "http://localhost/build/" to avoid more stories that touch!!!
       */}
        <Router>
        <GlobalStyle/>
        <SideMenu showMenuBar={showMenuBar}/>
        <Theme colors={primaryCol} handleColor={handleColor} theme={theme} handleTheme={handleTheme} setShowMenuBar={setShowMenuBar}/>
  
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
  
      </div>
    );
  }