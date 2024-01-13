import React, { useRef, useState } from 'react';
import './contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import facebookicon from '../../assets/facebook-icon.png';
import twittericon from '../../assets/twitter.png';
import youtubeicon from '../../assets/youtube.png';
import instagramicon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

let a = "hi this is ritul";


const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const [name, setname] = useState('ritul')
    const handleName=()=>{
        // if(name==="ritul"){
        //     setname("atin")
        // }else{
        //     setname("ritul")
        // }
        return name==="ritul"?setname("atin"):setname("ritul")
    }


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_xhix2fm', 'template_h4gi449', form.current, 'yI0IPX9tf9YB5jGMh')
            .then((result) => {
                setLoading(false)

                e.target.reset();
                alert('EmailSent!');

            }, (error) => {
                setLoading(false)

                alert('Error!');

            });



    };
    return (

        <section id="contactPage">
            <p>
                hi this is {name}
            </p>
            <button onClick={handleName}>change name</button>
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDisc">
                    I have had the opportunity to work with a diverse group of companies.
                </p>
            </div>
            <div className="clientImgs">
                <img src={walmart} alt="" className="clientImg" />
                <img src={adobe} alt="" className="clientImg" />
                <img src={microsoft} alt="" className="clientImg" />
                <img src={facebook} alt="" className="clientImg" />

            </div>
            <div id="contact">
                <h1 className="ContactPageTitle">Contact Me</h1>
                <span className="contactDesc">"Please fill out the form below to discuss any work opportunity"</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='from_name' />
                    <input type="email" className="email" placeholder="Your Email" name='your_email' />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    {loading ?
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> : <button disabled={loading} type="submit" value="Send" className="submitBtn">{loading ? "loading..." : "Submit"}</button>
                    }
                    <div className="links">
                        <img src={facebookicon} alt="" className="link" />
                        <img src={twittericon} alt="" className="link" />
                        <img src={youtubeicon} alt="" className="link" />
                        <img src={instagramicon} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact