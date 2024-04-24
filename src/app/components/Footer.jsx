import React, { useState } from 'react'

const Footer = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        // Assuming you want to open WhatsApp with a pre-filled message
        if (!message == "") {
            const whatsappLink = `https://wa.me/+917762085110?text=${encodeURIComponent(message)}`;
            window.location.href = whatsappLink;
        }
        else {
            alert("Enter some message.");
        }
    };
    return (
        <>
            <footer>
                <div>
                    <h2>Contact Us</h2>
                    <input type="text" placeholder='Enter Message' value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                    <button onClick={sendMessage}>Send Message</button>
                </div>
                <ul>
                    <p>&copy; Copyright  to Stranger Things. Developed By Aditya Pandey</p>
                </ul>
            </footer>
        </>
    )
}

export default Footer
