import Link from 'next/link'
import {FaChevronLeft} from 'react-icons/fa'


function Logo({animate}){
    return(
        <>{!animate ?
            <Link href="https://ng-invite.onelink.me/xCWg/?af_js_web=true&af_ss_ver=2_4_0&pid=my_media_default_source&af_channel=invite&deep_link_value=978915395" className="logo-wrapper">
                <div className="icon"><FaChevronLeft style={{transform:"rotate(135deg)"}}/></div>
                <div className="logo">
                    p<span>S</span>mart
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