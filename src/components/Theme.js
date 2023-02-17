import React, { useEffect, useState } from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGear, faSun, faMoon, faBars} from "@fortawesome/free-solid-svg-icons"
import { Tooltip } from 'react-tooltip'

function Theme({colors, handleColor, theme, handleTheme, setShowMenuBar}){
    const [showSetting, setShowSetting] = useState(false)
    var handleShowSetting = () => {
        setShowSetting(!showSetting)
    }
    function handleBody(e){
        e.target.closest(".theme") == null && setShowSetting(false)
    }

    // On Page Load
    const [showToolTip, setShowToolTip] = useState(true);

    useEffect( () => {
        document.documentElement.addEventListener("click", e => handleBody(e))
        return (
            document.documentElement.removeEventListener("click", e => handleBody(e))
        )
    }, [] )

    useEffect( () => {
        setTimeout(() => {
            setShowToolTip(false)
        }, 3000);
    }, [])

    return(
        <div className={`theme ${showSetting ? "show" : ""}`}>
            <div className="left">
                <div className="sidemenu-bar" onClick={ () => { setShowMenuBar( (prevVal) => !prevVal )} }>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div data-tooltip-id="settings" data-tooltip-content="Change Primary Color" className="control" onClick={handleShowSetting}><FontAwesomeIcon className="fa-spin" icon={faGear}/></div>
                <Tooltip className="tool-tip" id="settings" place="left" isOpen={showToolTip}/>

                <div data-tooltip-id="theme" data-tooltip-content={`Switch to ${theme ? 'Dark' : 'Light'} mode`} className="control" onClick={handleTheme}><FontAwesomeIcon icon={theme ? faMoon : faSun}/></div>
                <Tooltip className="tool-tip" id="theme" place="left" isOpen={showToolTip}/>
            </div>
            <div className="right">
                <div className="text">Theme Colors</div>
                <div className="colors">
                    {
                        Object.entries(colors).map( (color) => {
                            return <div key={color[1]} className="color" style={{background: color[1], }} onClick={handleColor} aria-label={color[0]}/>
                        } )
                    }
                </div>
            </div>
        </div>
    )
}
export default Theme;