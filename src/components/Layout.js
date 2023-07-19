import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import { primaryCol } from "@/colors"
import Aos from "aos"
import 'aos/dist/aos.css'
import Cookies from "js-cookie"


// Components Import
import SideMenu from "./SideMenu"
import Theme from "./Theme"
import Loading from "./Loading"
import { useThemeContext } from "@/contexts/themeContext"


function Layout({children}){
    

    const [showLoader, setShowLoader] = useState(false)

    const router = useRouter()
    useEffect( () => {
        if( typeof window != undefined ){
            router.events.on('routeChangeStart', () => setShowLoader(true))
            router.events.on('routeChangeComplete', () => setShowLoader(false))
        }
    } )
    
    

    const [primaryColor, setPrimaryColor] = useState(null)
    const {theme, setTheme} = useThemeContext()
    // Initialize AOS
    useEffect( () => {
        typeof window!=undefined && Aos.init()
    }, [] )
    
    // Handle Storage of Color in Browser Session
    useEffect( () => {
        if (typeof window != undefined){
            if (Cookies.get('theme')===undefined || Cookies.get('primaryColor')===undefined){
                Cookies.set('theme', true)
                Cookies.set('primaryColor', 'blueViolet')
                setTheme( true )
                setPrimaryColor( 'blueViolet' )
            }
            else{
                setTheme( eval( Cookies.get('theme') ) )
                setPrimaryColor( Cookies.get('primaryColor') )
            }
        }
    }, [theme, primaryColor] )
    

    useEffect( () => {
        if (typeof window != undefined){ document.documentElement.className = `${theme ? `light ${primaryColor}` : `dark ${primaryColor}` }`}
      }, [theme, primaryColor] )

    const handleColor = (e) => {
        Cookies.set("primaryColor", e.target.ariaLabel)
        Cookies.set('primaryColor', e.target.ariaLabel)
        setPrimaryColor(e.target.ariaLabel)
    }

    const handleTheme = () => {
        Cookies.set('theme', !theme)
        Cookies.set("theme", !theme)
        setTheme(!theme)
    }

    // For Media Query SideBar
    const [showMenuBar, setShowMenuBar] = useState(false)

    var handleBody = (e) => {
      e.target.closest(".theme > *") == null && e.target.closest(".side-menu") == null && setShowMenuBar(false)
    }

    useEffect( () => {
        if (typeof window != undefined){
            document.documentElement.addEventListener("click", e => handleBody(e))
            return (
                document.documentElement.removeEventListener("click", e => handleBody(e))
            )
        }
    }, [] )





    return (
        <div className={`App ${router.pathname == '/404' ? 'not-found' : ''}`}>
            { router.pathname != '/404' && primaryColor!==null && theme!==null &&
            <>
            <SideMenu showMenuBar={showMenuBar}/>
            <Theme colors={primaryCol} handleColor={handleColor} theme={theme} handleTheme={handleTheme} setShowMenuBar={setShowMenuBar}/>
            </>
            }
            <Loading show={showLoader}/>
            {children}
        </div>
    )
}

export default Layout
