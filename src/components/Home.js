import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import TypewriterComponent from "typewriter-effect"
import Button from "./Button"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'
import OptimizedImage from "./OptimizedImage"



function Home(){
    return(
        <div className="home" data-aos="slide-left">
            <div className="left">
                <div className="heading">Hello, my name is <span>Prince Ajayi</span></div>
                <div className="heading">I'm a
                    <span>
                        <TypewriterComponent className="typewriter"
                            options={{
                                strings: [' frontEnd Designer', ' backEnd Developer', ' SPA Developer'],
                                autoStart: true,
                                loop: true,
                            }}/>
                    </span>
                </div>
                <div className="text">
                Highly skilled and experienced Full Stack Developer with a focus on front-end development, back-end development, and Single-Page Application development. Proven track record of delivering high-performance, user-friendly websites and applications.
                </div>
                <Link to='/about'><Button text="MORE ABOUT ME"/></Link>
            </div>
            <div className="right">
                <div className="icon"><FontAwesomeIcon icon={faChevronLeft} style={{transform:"rotate(45deg)"}}/></div>
                <div className="image">
                    {/* <LazyLoadImage src="assets\img\homepage.jpg" width="100%" height="100%" effect="blur"/> */}
                    <OptimizedImage imgpath="assets\img\homepage.jpg" blurhash="LAHxQi000401yD%fV[IW?[TIIBiv"/>

                </div>
                <div className="icon"><FontAwesomeIcon icon={faChevronLeft} style={{transform:"rotate(225deg)"}}/></div>
            </div>
        </div>
    )
}

export default Home;