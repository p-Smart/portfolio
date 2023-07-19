import Head from "next/head"
import Heading from "@/components/Heading"
import { services } from "@/datas/services"

function Services(){
    return(
        <>  
            <div className="services-page" data-aos="fade-left">
            <Heading title="Services"/>
            <div className="main">
                {
                    services.map( ({Icon,heading,text}, k) => (
                        <div className="wrapper" key={k}>
                            <div className="icon"><Icon size="48" /></div>
                            <div className="heading">{heading}</div>
                            <div className="text">{text}</div>
                        </div>
                    ) )
                }
            </div>
        </div>
        </>
    )
}
export default Services