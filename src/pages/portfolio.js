import Head from "next/head"
import Heading from "../components/Heading"
import img1 from '../../public/assets/img/project_1.jpg'
import img2 from '../../public/assets/img/project_3.jpg'
import img3 from '../../public/assets/img/project_5.jpg'
import img4 from '../../public/assets/img/project_2.jpg'
import img5 from '../../public/assets/img/project_6.jpg'
import img6 from '../../public/assets/img/project_4.jpg'
import Image from "next/image"




function PortfolioPage(){
    var images = [img1, img2, img3, img4, img5, img6,]
    
    

    return(
        <>
        <Head>
            <title>Portfolio</title>
            <meta name="description" content="pSmart Portfolio" />
        </Head>
        <div className="portfolio-page" data-aos="slide-left">
            <Heading title="Portfolio"/>
            <div className="head">My Last Projects:</div>
            <div className="main">
            {
                images.map( (path, k) => {
                    return(
                        <div key={k} className="wrapper"  data-aos="fade-left">
                            <Image src={path} placeholder='blur' alt={`image${k}`} />
                        </div>
                    )
                } )
            }   
            </div>
        </div>
        </>
    )
}
export default PortfolioPage