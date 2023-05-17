import Head from 'next/head'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Image from 'next/image'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { FaBriefcase } from 'react-icons/fa'
import Link from 'next/link'
import {ImHtmlFive} from 'react-icons/im'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript, SiPython, SiNextdotjs, SiPhp} from 'react-icons/si'
import {BsBootstrapFill} from 'react-icons/bs'
import {DiPhp} from 'react-icons/di'
import {RiReactjsLine} from 'react-icons/ri'

import img from '../../public/assets/img/homepage.jpg'



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
                        {/* <Image className='img' src={img} /> */}
                        <Image className='img' src={img} width='200' height='200' alt='about-image' placeholder='blur' priority/>
                    </div>
                    <div className='left'>
                        <div className='leftsitem'>
                            <p><span>First Name: </span> Prince</p>
                            <p><span>Last Name: </span> Ajayi</p>
                            <p><span>Age: </span> 21 Years</p>
                            <p><span>Birthday: </span> 31/05/2002</p>
                            <p><span>Age: </span> 21 Years</p>
                            <p><span>Languages: </span> English, Yoruba, Pidgin</p>
                        </div>
                        <div className='leftsitem'>
                        <p><span>Address: </span> Flat 6, Block 12, Amina Way, University of Ibadan, Ibadan.</p>
                        <p><span>Email: </span> psmarrt@gmail.com</p>
                        <p><span>Phone: </span> +2349063900991</p>
                        <p><span>Whatsapp: </span> +2349063900991</p>
                        <p><span>Instagram: </span> pSmarrt</p>
                        <p><span>Twitter: </span> pSmarrt</p>
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
                    <div>
                        <CircularProgressbar value={75} text={`75%`}/>
                        <ImHtmlFive size='30' color='#f06529'/>
                        <span>HTML</span>
                    </div>
                    <div>
                        <CircularProgressbar value={80} text={`80%`}/>
                        <IoLogoCss3 size='30' color='#2965f1'/>
                        <span>CSS</span>
                    </div>
                    <div>
                        <CircularProgressbar value={85} text={`85%`}/>
                        <SiJavascript size='30' color='#f0db4f'/>
                        <span>JAVASCRIPT</span>
                    </div>
                    <div>
                        <CircularProgressbar value={50} text={`50%`}/>
                        <BsBootstrapFill size='30' color='#0d6efd'/>
                        <span>BOOTSTRAP</span>
                    </div>
                    <div>
                        <CircularProgressbar value={50} text={`70%`}/>
                        <SiPhp size='40' color='#8993be'/>
                        <span>PHP</span>
                    </div>
                    <div>
                        <CircularProgressbar value={50} text={`40%`}/>
                        <SiPython size='30' color='#4B8BBE'/>
                        <span>PYTHON</span>
                    </div>
                    <div>
                        <CircularProgressbar value={50} text={`80%`}/>
                        <RiReactjsLine size='40' color='#7cc5d9'/>
                        <span>REACT</span>
                    </div>
                    <div>
                        <CircularProgressbar value={50} text={`50%`}/>
                        <SiNextdotjs size='30' color='#05427c'/>
                        <span>NEXT JS</span>
                    </div>
                </div>
            </div>
            <div className='exp'>
            <div className='head'>EXPERIENCE AND EDUCATION</div>
            <div className='bottom'>
                <div className='exp-wrapper'>
                    <div className='left'>
                        <div className='icon'><FaBriefcase /></div>
                        <div className='line'></div>
                    </div>
                    <div className='right'>
                        <div className='date'>2021 - 2022</div>
                        <div className='heading'><span>WEB DEVELOPER </span>- COMFORT DEVELOPERS</div>
                        <div className='text'>
                        During my time at Comfort Developers, I learned the basics of web development and gained hands-on experience building websites for clients. I worked with a variety of technologies, including HTML, CSS, JavaScript, and PHP, and gained a solid foundation in web development.
                        </div>
                    </div>
                </div>
                <div className='exp-wrapper'>
                    <div className='left'>
                        <div className='icon'><FaBriefcase /></div>
                        <div className='line'></div>
                    </div>
                    <div className='right'>
                        <div className='date'>2022 - 2023</div>
                        <div className='heading'><span>REACT DEVELOPER </span>- SELF TAUGHT</div>
                        <div className='text'>
                        In my spare time, I taught myself React and gained experience building React-based applications. I learned how to work with React components, manage state and props, and use popular libraries and frameworks like Redux and Next.js.
                        </div>
                    </div>
                </div>
                <div className='exp-wrapper'>
                    <div className='left'>
                        <div className='icon'><FaBriefcase /></div>
                        <div className='line'></div>
                    </div>
                    <div className='right'>
                        <div className='date'>2022 - 2023</div>
                        <div className='heading'><span>WEB SCRAPER </span>- SELF-TAUGHT</div>
                        <div className='text'>
                        As part of my ongoing learning journey, I also taught myself how to scrape data from websites using Python and popular libraries like BeautifulSoup and Scrapy. This has allowed me to collect and analyze data from various sources, and has helped me gain a deeper understanding of web development and data analysis.
                        </div>
                    </div>
                </div>
                <div className='exp-wrapper'>
                    <div className='left'>
                        <div className='icon'><FaBriefcase /></div>
                        <div className='line'></div>
                    </div>
                    <div className='right'>
                        <div className='date'>2007 - 2012</div>
                        <div className='heading'><span>PRIMARY SCHOOL STUDENT </span>- STAFF SCHOOL</div>
                        <div className='text'>
                        During my primary school years at Staff School, I gained a solid foundation in basic education and developed a passion for learning that has stayed with me to this day.
                        </div>
                    </div>
                </div>
                <div className='exp-wrapper'>
                    <div className='left'>
                        <div className='icon'><FaBriefcase /></div>
                        <div className='line'></div>
                    </div>
                    <div className='right'>
                        <div className='date'>2012 - 2018</div>
                        <div className='heading'><span>SECONDARY SCHOOL STUDENT </span>- IMPERIAL COLLEGE</div>
                        <div className='text'>
                        During my secondary school years at Imperial College, I continued to develop my academic skills and explored various areas of interest. I gained experience working on group projects, participating in extracurricular activities, and developing my leadership and communication skills.
                        </div>
                    </div>
                </div>
                <div className='exp-wrapper'>
                    <div className='left'>
                        <div className='icon'><FaBriefcase /></div>
                        <div className='line'></div>
                    </div>
                    <div className='right'>
                        <div className='date'>2019 - PRESENT</div>
                        <div className='heading'><span>COMPUTER SCIENCE STUDENT </span>- UNIVERSITY OF IBADAN</div>
                        <div className='text'>
                        I am currently a student at the University of Ibadan, where I am pursuing a degree in Computer Science. During my time here, I have gained a deep understanding of computer systems, programming languages, data structures, and algorithms, among other key areas of study. I have also worked on a variety of projects and assignments that have helped me develop my critical thinking and problem-solving skills, and have participated in extracurricular activities that have allowed me to apply my skills and knowledge in practical settings.
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default About