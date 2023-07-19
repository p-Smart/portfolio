import Link from 'next/link'
import Heading from "../components/Heading"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { toastError } from "@/toast/toast"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { useThemeContext } from '@/contexts/themeContext'





function PortfolioPage(){
    const {theme} = useThemeContext()
    const [portfolios, setPortfolios] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)
        const fetchPortfolios = async() => {
        try{
            const {data: responseData} = await axios.get(`${process.env.NEXT_PUBLIC_API}/fetch-projects`)
            if(responseData.data){
                setPortfolios(responseData.data)
            }
            else{
                throw new Error('Error loading portfolios')
            }
        }
        catch(err){
            toastError(err.message)
        }
        finally{
            setLoading(false)
        }
        }
        fetchPortfolios()
    }, [] )
    

    return(
        <>
        <div className="portfolio-page" data-aos="slide-left">
            <Heading title="Portfolio"/>
            <div className="head">My Last Projects:</div>
            <main className="main">
            {
                !loading ? (
                    portfolios.map( ({title, url, image, descp, github}, k) => (
                        <Link 
                        href={url} 
                        target="blank"
                        key={k} 
                        className="portfolios"
                        style={{cursor: 'pointer', alignSelf: 'flex-start'}}
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
                                        fontStyle: 'italic',
                                        whiteSpace: 'nowrap'
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
                                        fontStyle: 'italic',
                                        whiteSpace: 'nowrap'
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
                ) : (
                    Array.from({length: 3}).map( (_, k) => (
                        <SkeletonTheme
                        key={k}
                        baseColor={theme ? "#E0E0E0" : "#555555"}
                        highlightColor={theme ? "#F5F5F5" : "#777777"}
                        >
                        <div 
                        className="portfolios"
                        style={{cursor: 'pointer', alignSelf: 'flex-start'}}
                        data-aos="fade-left"
                        >
                            <div style={{height: 250, marginTop: '-10px', overflow:'hidden'}}>
                            <Skeleton height='100%' />
                            </div>
                            <div className="image-bottom">
                                <h4>Title: <Skeleton /></h4>
                                <div style={{display:'flex', gap:5}}>
                                    <h4>URL: <Skeleton /></h4>
                                    <h4 
                                    style={{
                                        color: 'var(--primary)',
                                        fontStyle: 'italic',
                                        whiteSpace: 'nowrap'
                                        }}
                                    >
                                    <Skeleton />
                                    </h4>
                                </div>
                                <div>
                                    <h4>Description: </h4>
                                    <span><Skeleton /></span>
                                </div>
                                <div>
                                    <h4>GitHub Repo:</h4>
                                    <h4 
                                    style={{
                                        color: 'var(--primary)',
                                        fontStyle: 'italic',
                                        whiteSpace: 'nowrap'
                                        }}
                                    >
                                    <Skeleton />
                                    </h4>
                                </div>
                                <br/>
                                <h5 style={{fontStyle: 'italic'}}><Skeleton /></h5>
                            </div>
                        </div>
                        </SkeletonTheme>
                    ) )
                )
            }   
            </main>
        </div>
        </>
    )
}
export default PortfolioPage