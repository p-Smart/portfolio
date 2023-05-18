import Head from "next/head"
import Heading from "../components/Heading"
import Button from "@/components/Button"
import {IoCallSharp, IoLocationSharp} from "react-icons/io5"
import {IoMdMail} from "react-icons/io"
import {BiWorld} from "react-icons/bi"
import { useRef, useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { validate } from "email-validator"
import axios from 'axios'


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




function Admin(){

    const [astkName, setAstkName] = useState(false)
    const [astkEmail, setAstkEmail] = useState(false)
    const [astkMessage, setAstkMessage] = useState(false)
    const form = useRef(null)

    const [buttonLoad, setButtonLoad] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const formData = new FormData(form.current)
            const {data} = await axios.post('/api/upload-project', formData)
            console.log(data)
            
        }
        catch(err){
            console.error(err.message)
        }
    }


    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    };

    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (event) => {
      event.preventDefault();
      setIsDragging(true);
    };
  
    const handleDragLeave = (event) => {
      event.preventDefault();
      setIsDragging(false);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      setIsDragging(false);
  
      const file = event.dataTransfer.files[0];
      setSelectedImage(URL.createObjectURL(file));
    };

    return(
        <>
        <Head>
            <title>ADMIN | pSmart</title>
            <meta name="description" content="Admin pSmart" />
        </Head>
        <div className="contact-page" data-aos='flip-up'>
            <Heading title="ADMIN" title1="SPACE"/>
            <div className="head">
                <span>Upload New Project</span>
                {/* I&apos;M AT YOUR SERVICE */}
            </div>
            <form
            ref={form}
            encType="multipart/form-data"
            noValidate
            >
                <div className="form">
                    <div className={`input-group`}>
                        <input type="text" name="title" placeholder="Title" autoComplete="off" />
                    </div>
                    <div className={`input-group`}>
                        <input type="email" name="url" placeholder="URL" autoComplete="off" />
                    </div>
                    <div className={`input-group`}>
                        <input type="text" name="github" placeholder="GitHub Repo" autoComplete="off" />
                    </div>
                    <div 
                        className={`input-group`} 
                        style={{ display: 'flex', alignItems: 'center' }}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        {selectedImage && (
                        <div
                            style={{
                            width: '300px',
                            height: '150px',
                            borderRadius: '10px',
                            overflow: 'hidden'
                            }}
                        >
                            <img
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                            src={selectedImage} 
                            alt="Selected" 
                            />
                        </div>
                        )}
                        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <div className={`input-group`}>
                        <textarea rows="7" name="descp" placeholder="Description" autoComplete="off" />
                    </div>
                </div>
                <div className="submit" onClick={buttonLoad ? ()=>{} : handleSubmit}>
                    <Button text='Update Portfolio'
                    loading={buttonLoad ? true : false} 
                    />
                </div>
            </form>
        </div>
        <ToastContainer />
        </>
    )
}
export default Admin