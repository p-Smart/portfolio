import Link from 'next/link'
import {FaChevronLeft} from 'react-icons/fa'


function Logo({animate}){
    return(
        <>{!animate ?
            <Link href="/" className="logo-wrapper">
                <div className="icon"><FaChevronLeft style={{transform:"rotate(135deg)"}}/></div>
                <div className="logo">
                    a<span>S</span>mart
                </div>
                <div className="icon"><FaChevronLeft style={{transform:"rotate(-45deg)"}}/></div>
            </Link>
            :
            <div className="logo-wrapper animate">
                <div className="icon"><FaChevronLeft style={{transform:"rotate(135deg)"}}/></div>
                <div className="logo">
                    p<span>S</span>mart
                </div>
                <div className="icon"><FaChevronLeft style={{transform:"rotate(-45deg)"}}/></div>
            </div>
        }
        </>
    )
}

export default Logo