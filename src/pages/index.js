import { withIronSessionSsr } from 'iron-session/next'
import {sessionOptions} from '@/customHook/useSessionOptions'
import Head from 'next/head'
import {FaChevronLeft} from 'react-icons/fa'
import TypewriterComponent from 'typewriter-effect'
import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import homepageimg from '../../public/assets/img/homepage.jpg'


export default function Home() {
  return (
    <>
      <div className="home" data-aos="slide-left">
            <div className="left">
                <div className="heading">Hello, my name is <span>Prince Ajayi</span></div>
                <div className="heading">I&apos;m a
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
                <Link href='/about'><Button text="MORE ABOUT ME"/></Link>
            </div>
            <div className="right">
                <div className="icon"><FaChevronLeft style={{transform:"rotate(45deg)"}}/></div>
                <div className="image">
                    <Image src={homepageimg} alt='homepage-image' placeholder='blur' priority/>
                </div>
                <div className="icon"><FaChevronLeft style={{transform:"rotate(225deg)"}}/></div>
            </div>
        </div>
      
    </>
  )
}


// To get Session for just a page

// export const getServerSideProps = withIronSessionSsr(
//   async function getServerSideProps({ req }) {
//     const user = req.session;

//     return {
//       props: {
//         session: req.session===undefined ? {} : req.session,
//       },
//     };
//   },
//   sessionOptions
// );

