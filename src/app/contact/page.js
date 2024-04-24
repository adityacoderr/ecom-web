"use client"
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        // Construct the message using the user-input values
        const fullMessage = `Name: ${name}\nQuery : ${phone}\nDescription: ${message}`;

        if (!(name == "" || phone == "" || message == "")) {
            // Assuming you want to open WhatsApp with the pre-filled message
            const whatsappLink = `https://wa.me/8292698279?text=${encodeURIComponent(fullMessage)}`;
            // Open WhatsApp with the pre-filled message
            window.location.href = whatsappLink;
        }
        else {
            alert("Enter all details first.");
        }
    };

    return (
        <>
            <Header />
            <div className="contact">
                <div className="cont-left">
                    <img src={"contact.svg"} alt="" />
                </div>
                <div className="cont-right">
                    <div className="form-box">
                        <h2>CONTACT US ON WHATSAPP</h2>
                        <div className="forms">
                            <input
                                type="text"
                                placeholder='Enter Your Name' required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder='Enter Your Query' required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder='Description' required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button onClick={sendMessage}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
