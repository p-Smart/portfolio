import Head from 'next/head'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Image from 'next/image'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Link from 'next/link'
import { FaBriefcase } from 'react-icons/fa'

import img from '../../public/assets/img/homepage.jpg'
import { skills } from '@/datas/skills'
import { experienceNEducation } from '@/datas/exp-edu'



function About(){
    return(
        <>
        <Head>
            <title>About</title>
            <meta name="description" content="pSmart About Page" />
        </Head>
        <div className='about-page' data-aos='fade-left'>
            <Heading title='About' title1='Me'/>
            <div className='personal-infos'>
                <div className='head'>PERSONAL INFOS:</div>
                <div className='body'>
                    <div className='media-img'>
                        <Image className='img' src={img} width={200} height={200} alt='about-image' placeholder='blur' priority/>
                    </div>
                    <div className='left'>
                        <div className='leftsitem'>
                            <p><span>First Name: </span> 
                            <span 
                            style={{color: 'var(--primary)', fontWeight: 'bold'}}
                            >
                            Prince
                            </span>
                            </p>
                            <p><span>Last Name: </span> 
                            <span 
                            style={{color: 'var(--primary)', fontWeight: 'bold'}}
                            >
                            Ajayi
                            </span>
                            </p>
                            <p><span>Age: </span> 21 Years</p>
                            <p><span>Birthday: </span> 31/05/2002</p>
                            <p><span>Age: </span> 21 Years</p>
                            <p><span>Languages: </span> English, Yoruba, Pidgin</p>
                        </div>
                        <div className='leftsitem'>
                        <p><span>Address: </span> Flat 6, Block 12, Amina Way, University of Ibadan, Ibadan.</p>
                        <p><span>Email: </span> 
                        <span 
                        style={{color: 'var(--primary)', fontWeight: 'bold'}}
                        >
                        princeayokunle2002@gmail.com
                        </span>
                        </p>
                        <p><span>Phone: </span> 
                            <span 
                            style={{color: 'var(--primary)', fontWeight: 'bold'}}
                            >
                            +2349063900991
                            </span>
                        </p>
                        <p><span>Whatsapp: </span>
                            <Link 
                            href='https://wa.me/2349063900991'
                            target='_blank'
                            style={{color: 'var(--primary)', fontWeight: 'bold'}}
                            >
                            +2349063900991
                            </Link>
                        </p>
                        <p><span>GitHub: </span> 
                            <Link 
                            href='https://github.com/p-Smart'
                            target='_blank'
                            style={{color: 'var(--primary)', fontWeight: 'bold'}}
                            >
                            https://github.com/p-Smart
                            </Link>
                        </p>
                        </div>
                    </div>
                    <div className='right'>
                        
                            <div className='box'>
                                <span>+2</span> <p>YEARS OF EXPERIENCE</p>
                            </div>
                            <div className='box'>
                                <span>+2</span> <p>AWARDS WON</p>
                            </div>
                        
                            <div className='box'>
                                    <span>+20</span> <p>SATISFIED CUSTOMERS</p>
                            </div>
                            <div className='box'>
                                <span>+40</span> <p> COMPLETED PROJECTS</p>
                            </div>
                    </div>
                </div>
                <Link href='/contact'><Button text='HIRE ME'/></Link>
                <div className='hr'></div>
            </div>
            <div className='skills'>
                <div className='head'>MY SKILLS</div>
                <div className='prog-wrapper'>
                    {
                        skills.map( ({title, percent, text, color, Icon, iconSize}, k) => (
                            <div key={k}>
                                <CircularProgressbar value={percent} text={text}/>
                                <Icon size={iconSize} color={color}/>
                                <span>{title}</span>
                            </div>
                        ) )
                    }
                </div>
            </div>
            <div className='exp'>
            <div className='head'>EXPERIENCE AND EDUCATION</div>
            <div className='bottom'>
                {
                    experienceNEducation.map( ({date,text,title1,title2}, k) => (
                        <div className='exp-wrapper' key={k}>
                            <div className='left'>
                                <div className='icon'><FaBriefcase /></div>
                                <div className='line'></div>
                            </div>
                            <div className='right'>
                                <div className='date'>{date}</div>
                                <div className='heading'><span>{title1} </span>- {title2}</div>
                                <div className='text'>{text}</div>
                            </div>
                        </div>
                    ) )
                }
            </div>
            </div>
        </div>
        </>
    )
}
export default About