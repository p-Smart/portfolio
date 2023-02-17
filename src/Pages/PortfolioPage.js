import Heading from "../components/Heading"
import styled from "styled-components"
import { useEffect, useMemo, useState } from "react"
import { LazyLoadImage} from "react-lazy-load-image-component"
import _fetch from "isomorphic-fetch"
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Blurhash } from "react-blurhash"
import { v4 as uniqueId } from "uuid"
import OptimizedImage from "../components/OptimizedImage"



function PortfolioPage(){
    // Paths are like this because it's PHP that will run them, not JS
    var imagesNHash = {
        "assets/img/project_1.jpg" : "LMK_B?-;00D*D$Rjozog~qM_D%xu" ,
        "assets/img/project_3.jpg" : "LyL;UA~pxuodIVaet6xuIUofxtjZ" ,
        "assets/img/project_5.jpg" : "LIQSYQOb^$=o=pr;MwRP_NH=jYt-" ,
        "assets/img/project_2.jpg" : "LFN,[AxZ00IV~pWZM|t000M|%3x[" ,
        "assets/img/project_6.jpg" : "LGNTjy~q9E9YROD$Rixu4-tSoJMx" ,
        "assets/img/project_4.jpg" : "LTPY-Mofw?Rk00aeRiWCY8R+Ngs:" ,
    }
    
    

    return(
        <div className="portfolio-page">
            <Heading title="Portfolio"/>
            <div className="head">My Last Projects:</div>
            <div className="main">
            {
                Object.keys( imagesNHash ).map( (path, k) => {
                    return(
                        <div key={k} className="wrapper"  data-aos="fade-left">
                            <OptimizedImage imgpath={path} blurhash={imagesNHash[path]}/>
                        </div>
                    )
                } )
            }   
            </div>
        </div>
    )
}
export default PortfolioPage