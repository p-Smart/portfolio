import Head from "next/head"
import Heading from "@/components/Heading"
import {CgCodeSlash} from "react-icons/cg"
import {MdPhoneAndroid} from "react-icons/md"
import {FaLaptopCode} from "react-icons/fa"
import {GoSearch} from "react-icons/go"
import {RiReactjsLine} from "react-icons/ri"
import {HiCursorArrowRipple} from "react-icons/hi2"

function Services(){
    return(
        <>
            <Head>
                <title>Services</title>
                <meta name="description" content="pSmart Services" />
            </Head>
            
            <div className="services-page" data-aos="fade-left">
            <Heading title="Services"/>
            <div className="main">
                <div className="wrapper">
                    <div className="icon"><MdPhoneAndroid size="48" /></div>
                    <div className="heading">Responsive Design</div>
                    <div className="text">
                    Delivering stunning, intuitive interfaces across all devices.
                    </div>
                </div>
                <div className="wrapper">
                    <div className="icon"><FaLaptopCode size="48" /></div>
                    <div className="heading">Frontend</div>
                    <div className="text">
                    Building dynamic, intuitive front-ends that bring websites to life and captivate audiences
                    </div>
                </div>
                <div className="wrapper">
                    <div className="icon"><HiCursorArrowRipple size="48" /></div>
                    <div className="heading">Interactive Websites</div>
                    <div className="text">
                    Engineering interactive experiences that drive user engagement and retention
                    </div>
                </div>
                <div className="wrapper">
                    <div className="icon"><CgCodeSlash size="48" /></div>
                    <div className="heading">Backend (PHP)</div>
                    <div className="text">
                    Crafting robust, scalable, and secure backends with the power of PHP to drive website success.
                    </div>
                </div>
                <div className="wrapper">
                    <div className="icon"><GoSearch size="48" /></div>
                    <div className="heading">SEO</div>
                    <div className="text">
                    Building search engine optimized websites that are designed to attract and retain a high volume of organic traffic.
                    </div>
                </div>
                <div className="wrapper">
                    <div className="icon"><RiReactjsLine size="48" /></div>
                    <div className="heading">SPAs</div>
                    <div className="text">
                    Building high-performance Single-Page Applications that leverage the power of React, providing a seamless, dynamic user experience
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Services