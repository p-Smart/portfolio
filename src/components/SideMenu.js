import {FaChevronLeft, FaHome, FaUser, FaList, FaBriefcase, FaComment} from 'react-icons/fa'
import Logo from './Logo';
import Link from "next/link"
import { useRouter } from "next/router"

function SideMenu ({showMenuBar}){
    let location = useRouter().pathname;

    return(
        <div className={`side-menu ${showMenuBar ? "" : "media-hide-sidemenu"}`}>
            <Logo />
            <div className="menus">
                <div className="menu">
                    <Link href="/" className={`wrapper ${(location=="/" || location=="/home") && "active"}`}>
                        <div className="icon"><FaHome /></div>
                        <div className="text">Home</div>
                    </Link>
                </div>
                <div className="menu">
                    <Link href="/about" className={`wrapper ${location=="/about" && "active"}`}>
                        <div className="icon"><FaUser /></div>
                        <div className="text">About</div>
                    </Link>
                </div>
                <div className="menu">
                    <Link href="/services" className={`wrapper ${location=="/services" && "active"}`}>
                        <div className="icon"><FaList /></div>
                        <div className="text">Services</div>
                    </Link>
                </div>
                <div className="menu">
                    <Link href="/portfolio" className={`wrapper ${location=="/portfolio" && "active"}`}>
                        <div className="icon"><FaBriefcase /></div>
                        <div className="text">Portfolio</div>
                    </Link>
                </div>
                <div className="menu">
                    <Link href="/contact" className={`wrapper ${location=="/contact" && "active"}`}>
                        <div className="icon"><FaComment /></div>
                        <div className="text">Contact</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SideMenu;