import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse, faChevronLeft, faUser, faList, faBriefcase, faComment} from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react";

function SideMenu ({showMenuBar}){
    let location = useLocation().pathname;

    return(
        <div className={`side-menu ${showMenuBar ? "" : "media-hide-sidemenu"}`}>
            <a href="#" className="logo-wrapper">
                <div className="icon"><FontAwesomeIcon icon={faChevronLeft} style={{transform:"rotate(135deg)"}}/></div>
                <div className="logo">
                    p<span>S</span>mart
                </div>
                <div className="icon"><FontAwesomeIcon icon={faChevronLeft} style={{transform:"rotate(-45deg)"}}/></div>
            </a>
            <div className="menus">
                <div className="menu">
                    <Link to="/" className={`wrapper ${(location=="/" || location=="/home") && "active"}`}>
                        <div className="icon"><FontAwesomeIcon icon={faHouse}/></div>
                        <div className="text">Home</div>
                    </Link>
                </div>
                <div className="menu">
                    <Link to="/about" className={`wrapper ${location=="/about" && "active"}`}>
                        <div className="icon"><FontAwesomeIcon icon={faUser}/></div>
                        <div className="text">About</div>
                    </Link>
                </div>
                <div className="menu">
                    <Link to="/services" className={`wrapper ${location=="/services" && "active"}`}>
                        <div className="icon"><FontAwesomeIcon icon={faList}/></div>
                        <div className="text">Services</div>
                    </Link>
                </div>
                <div className="menu">
                    <Link to="/portfolio" className={`wrapper ${location=="/portfolio" && "active"}`}>
                        <div className="icon"><FontAwesomeIcon icon={faBriefcase}/></div>
                        <div className="text">Portfolio</div>
                    </Link>
                </div>
                <div className="menu">
                    <Link to="/contact" className={`wrapper ${location=="/contact" && "active"}`}>
                        <div className="icon"><FontAwesomeIcon icon={faComment}/></div>
                        <div className="text">Contact</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SideMenu;