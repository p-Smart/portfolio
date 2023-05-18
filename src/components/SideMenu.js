import Logo from './Logo';
import Link from "next/link"
import { useRouter } from "next/router"
import { nav } from '@/datas/nav';

function SideMenu ({showMenuBar}){
    let location = useRouter().pathname;

    return(
        <div className={`side-menu ${showMenuBar ? "" : "media-hide-sidemenu"}`}>
            <Logo />
            <div className="menus">
            {
                nav.map( ({route, Icon, title}, k) => (
                    <div className="menu" key={k}>
                        <Link href={route} className={`wrapper ${location===route && "active"}`}>
                            <div className="icon"><Icon /></div>
                            <div className="text">{title}</div>
                        </Link>
                    </div>
                 ) )
            }
            </div>
        </div>
    )
}
export default SideMenu;