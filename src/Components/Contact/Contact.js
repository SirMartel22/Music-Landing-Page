import React from 'react';
import './Contact.css';

const Contact = () =>{

    const form = {
        title: "Contact Us",
        description:"Any question or remarks? Just write us a message!",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        name: "kindly enter your name",
        email: "kindly enter your email address here",
        message: "kindly enter your message here",
        button: "Submit"
    }

    return(

        <div className = "contact-section">
           <div className="contact-text">

               <div className="title">
                <h1>{form.title}</h1>
                <p>{form.description}</p>
               </div>
               
                
            <div className="form">
                <div className="nameInput">
                    <label htmlFor="Name">{form.nameLabel}</label> 
                    <input type="text" placeholder={form.name} />

                </div>

                <div className="emailInput">
                    <label htmlFor="Email">{form.emailLabel}</label>
                    <input type="text" placeholder={form.email} /> <br/>
                </div>
               
            </div>

                <div className="messageInput">
                    <label htmlFor="Email">{form.messageLabel}</label>
                    <textarea name="textArea" id="">Enter text here</textarea>
                </div>

                <button className='btn'>{form.button}</button>
           </div>

        </div>
    )
}

export default Contact;