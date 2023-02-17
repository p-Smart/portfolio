import Heading from "../components/Heading"
import _fetch from "isomorphic-fetch"
import Button from "../components/Button"
import {IoCallSharp, IoLocationSharp} from "react-icons/io5"
import {IoMdMail} from "react-icons/io"
import {BiWorld} from "react-icons/bi"
import { useState } from "react"
import { toast } from 'react-toastify';

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


function ContactPage(){
    const [astkName, setAstkName] = useState(false);
    const [astkEmail, setAstkEmail] = useState(false);
    const [astkMessage, setAstkMessage] = useState(false);

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
            toastError("These fields cannot be empty", false);
            return
        }
        
        var formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("subject", form.subject);
        formData.append("message", form.message);
        formData.append("send", true);

        fetch(`http://localhost/smart_figures/public/backend/contact.php`, {
            method: 'POST',
            headers: { 
                'Access-Control-Allow-Origin' : '*',
             },
            body: formData,
        })
        .then( (res) => res.json() )
        .then( (res) => {
            res && toastSuccess("Message Sent");
        } )
        .catch( (e) => {
            toastError("An Error Occured");
        } )
        
    }

    return(
        <div className="contact-page" data-aos='flip-up'>
            <Heading title="Get In" title1="Touch"/>
            <div className="head">
                <span>Have You Any Questions?</span>
                I'M AT YOUR SERVICE
            </div>
            <div className="contacts">
                <div className="contact">
                    <div className="icon"><IoCallSharp size={"28px"} /></div>
                    <div className="heading">Call Us On</div>
                    <div className="text">+2349063900991</div>
                </div>
                <div className="contact">
                    <div className="icon"><IoLocationSharp size={"28px"} /></div>
                    <div className="heading">Office</div>
                    <div className="text">Flat 6, Block 12, Amina Way, University of Ibadan.</div>
                </div>
                <div className="contact">
                    <div className="icon"><IoMdMail size={"28px"}/></div>
                    <div className="heading">Email</div>
                    <div className="text">peesmarrt@gmail.com</div>
                </div>
                <div className="contact">
                    <div className="icon"><BiWorld size={"28px"}/></div>
                    <div className="heading">Website</div>
                    <div className="text">smartfigures.com</div>
                </div>
            </div>
            <div className="head">
                <span>SEND ME AN EMAIL</span>
                I'M VERY RESPONSIVE TO MESSAGES
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
                <div className="submit" onClick={sendMessage}><Button text={"Send Message"}/></div>
            </form>
        </div>
    )
}
export default ContactPage