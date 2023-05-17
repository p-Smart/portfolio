import Head from "next/head"
import Heading from "../components/Heading"
import Button from "@/components/Button"
import {IoCallSharp, IoLocationSharp} from "react-icons/io5"
import {IoMdMail} from "react-icons/io"
import {BiWorld} from "react-icons/bi"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { validate } from "email-validator"


function toastSuccess(string, timeout=2000){
    toast.success(`🦄 ${string}!`, {
        position: "bottom-center",
        autoClose: 2000,
        pauseOnHover: true,
        });
}
function toastError(string, emoji=true, timeout=2000){
    var e = "😖";
    toast.error(`${emoji ? e : ""} ${string}!`, {
        position: "bottom-center",
        autoClose: 2000,
        pauseOnHover: true,
        });
}




function Contact(){
    const API_ROUTE = 'https://api.telegram.org/bot6284939193:AAFBIC-WQr9i3_r4kWCCbgh35MBNHN9Hlcw/sendMessage'

    const [astkName, setAstkName] = useState(false)
    const [astkEmail, setAstkEmail] = useState(false)
    const [astkMessage, setAstkMessage] = useState(false)

    const [buttonLoad, setButtonLoad] = useState(false)

    const [form, setFormData] = useState({
        name: "",
        email:"",
        subject:"",
        message:"",
    });
    const handleForm = (e) => {
        setFormData({
            ...form,
            [e.target.name] : e.target.value,
        })
        e.target.name == "name" && setAstkName(false)
        e.target.name == "email" && setAstkEmail(false)
        e.target.name == "message" && setAstkMessage(false)
    }

    const sendMessage = () => {
        if (form.email=="" || form.name=="" || form.message==""){
            form.email=="" && setAstkEmail(true)
            form.name=="" && setAstkName(true)
            form.message=="" && setAstkMessage(true)
            return toastError("These fields cannot be empty", false);
        }
        
        if (!validate(form.email)){
            return toastError("Email is not valid", false);
        }
        setButtonLoad(true)
        
        var formData = new FormData();
        var message = `
        Name: ${form.name}\n\nEmail: ${form.email}\n\nSubject: ${form.subject}\n\nMessage: ${form.message}
        `

        formData.append("chat_id", 5669189826);
        formData.append("text", message);
        formData.append("parse_mode", "HTML")

        fetch(API_ROUTE, {
            method: 'POST',
            headers: { 
                'Access-Control-Allow-Origin' : '*',
             },
            body: formData,
        })
        .then( (res) => res.json() )
        .then( (res) => {
            if (res){
                fetch(`/api/sendEmail?name=${form.name}&email=${form.email}`)
                .then( (res) => res.json() )
                .then( (res) => {
                    toastSuccess("Message Sent")
                    setButtonLoad(false)
                } )
                .catch( (err) => {
                    toastSuccess("Message Sent")
                    setButtonLoad(false)
                } )
            }
        } )
        .catch( (e) => {
            toastError("An Error Occured")
            setButtonLoad(false)
        } )
    }


    return(
        <>
        <Head>
            <title>Contact</title>
            <meta name="description" content="Contact pSmart" />
        </Head>
        <div className="contact-page" data-aos='flip-up'>
            <Heading title="Get In" title1="Touch"/>
            <div className="head">
                <span>Have You Any Questions?</span>
                I&apos;M AT YOUR SERVICE
            </div>
            <div className="contacts">
                <div className="contact">
                    <div className="icon"><IoCallSharp size={"28px"} /></div>
                    <div className="heading">Call Us On</div>
                    <a href="tel:+2349063900991" className="text">+2349063900991</a>
                </div>
                <div className="contact">
                    <div className="icon"><IoLocationSharp size={"28px"} /></div>
                    <div className="heading">Office</div>
                    <div className="text">Flat 6, Block 12, Amina Way, University of Ibadan.</div>
                </div>
                <div className="contact">
                    <div className="icon"><IoMdMail size={"28px"}/></div>
                    <div className="heading">Email</div>
                    <a href="mailto:peesmarrt@gmail.com" className="text">peesmarrt@gmail.com</a>
                </div>
                <div className="contact">
                    <div className="icon"><BiWorld size={"28px"}/></div>
                    <div className="heading">Website</div>
                    <a href="https://smartfigures.vercel.app" target='_blank' rel="noreferrer" className="text">smartfigures.vercel.app</a>
                </div>
            </div>
            <div className="head">
                <span>SEND ME AN EMAIL</span>
                I&apos;M VERY RESPONSIVE TO MESSAGES
            </div>
            <form>
                <div className="form">
                    <div className={`input-group ${astkName ? "astk" : ""}`}>
                        <input type="text" name="name" placeholder="Name"  onChange={ (e) => handleForm(e) } autoComplete="off" />
                    </div>
                    <div className={`input-group ${astkEmail ? "astk" : ""}`}>
                        <input type="email" name="email" placeholder="Email"  onChange={ (e) => handleForm(e) } autoComplete="off" />
                    </div>
                    <div className={`input-group`}>
                        <input type="text" name="subject" placeholder="Subject"  onChange={ (e) => handleForm(e) } autoComplete="off" />
                    </div>
                    <div className={`input-group ${astkMessage ? "astk" : ""}`}>
                        <textarea rows="7" name="message" placeholder="Message"  onChange={ (e) => handleForm(e) } autoComplete="off" />
                    </div>
                </div>
                <div className="submit" onClick={buttonLoad ? ()=>{} : sendMessage}>
                    <Button text={"Send Message"} 
                    loading={buttonLoad ? true : false} 
                    />
                </div>
            </form>
        </div>
        <ToastContainer />
        </>
    )
}
export default Contact