import Head from "next/head"
import Link from 'next/link'
import Heading from "../components/Heading"
import img1 from '../../public/assets/img/project_1.jpg'
import img2 from '../../public/assets/img/project_3.jpg'
import img3 from '../../public/assets/img/project_5.jpg'
import img4 from '../../public/assets/img/project_2.jpg'
import img5 from '../../public/assets/img/project_6.jpg'
import img6 from '../../public/assets/img/project_4.jpg'
import Image from "next/image"
import { useState } from "react"
import axios from "axios"




function PortfolioPage({data}){
    const portfolios = data
    // const portfolios = [
    //     {
    //         image: img1,
    //         title: 'Smartfigures',
    //         url: 'https://princeajayi.vercel.app',
    //         descp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //         github: 'https://github.com/p-Smart/portfolio',
    //     },
    //     {
    //         image: img2,
    //         title: 'Smartfigures',
    //         url: 'https://princeajayi.vercel.app',
    //         descp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //         github: 'https://github.com/p-Smart/portfolio',
    //     },
    //     {
    //         image: img3,
    //         title: 'Smartfigures',
    //         url: 'https://princeajayi.vercel.app',
    //         descp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //         github: 'https://github.com/p-Smart/portfolio',
    //     },
    //     {
    //         image: img4,
    //         title: 'Smartfigures',
    //         url: 'https://princeajayi.vercel.app',
    //         descp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //         github: 'https://github.com/p-Smart/portfolio',
    //     },
    //     {
    //         image: img5,
    //         title: 'Smartfigures',
    //         url: 'https://princeajayi.vercel.app',
    //         descp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //         github: 'https://github.com/p-Smart/portfolio',
    //     },
    //     {
    //         image: img6,
    //         title: 'Smartfigures',
    //         url: 'https://princeajayi.vercel.app',
    //         descp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //         github: 'https://github.com/p-Smart/portfolio',
    //     },
        
    // ]
    
    

    return(
        <>
        <Head>
            <title>Portfolio</title>
            <meta name="description" content="pSmart Portfolio" />
        </Head>
        <div className="portfolio-page" data-aos="slide-left">
            <Heading title="Portfolio"/>
            <div className="head">My Last Projects:</div>
            <main className="main">
            {
                portfolios.map( ({title, url, image, descp, github}, k) => (
                        <Link 
                        href={url} 
                        target="blank"
                        key={k} 
                        className="portfolios"
                        style={{cursor: 'pointer'}}
                        data-aos="fade-left"
                        >
                            <div style={{height: 250, overflow:'hidden'}}>
                            <div 
                            className="image-wrapper"
                            style={{
                                backgroundImage: `url("${image}")`,
                                backgroundSize: 'cover',
                                height: 250
                            }}
                            >
                            </div>
                            </div>
                            <div className="image-bottom">
                                <h4>Title: {title}</h4>
                                <div style={{display:'flex', gap:5}}>
                                    <h4>URL: </h4>
                                    <h4 
                                    style={{
                                        color: 'var(--primary)',
                                        fontStyle: 'italic'
                                        }}
                                    >
                                    {url}
                                    </h4>
                                </div>
                                <div>
                                    <h4>Description: </h4>
                                    <span>{descp}</span>
                                </div>
                                <div>
                                    <h4>GitHub Repo:</h4>
                                    <h4 
                                    style={{
                                        color: 'var(--primary)',
                                        fontStyle: 'italic'
                                        }}
                                    >
                                    {github}
                                    </h4>
                                </div>
                                <br/>
                                <h5 style={{fontStyle: 'italic'}}>Click to visit</h5>
                            </div>
                        </Link>
                    )
                 )
            }   
            </main>
        </div>
        </>
    )
}
export default PortfolioPage


export const getServerSideProps = async (req, res) => {
    const {SERVER_DOMAIN} = process.env
    const {data} = await axios.get(`${SERVER_DOMAIN}/api/fetch-projects`)
    return({
        props: {
        data : data.data || []
        }
    })
}   