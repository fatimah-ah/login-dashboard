import React from 'react';

const Contact = () => {
    return (
        <div className="page-content">
            <h1>Contact Us</h1>
            <p>Have questions or feedback? We'd love to hear from you.</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
