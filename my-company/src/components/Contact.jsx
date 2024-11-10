import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the form from submitting to a server
        console.log('Form submitted:', formData);
        // You can add additional form handling here, like clearing the form fields
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ display: "block", margin: "10px 0" }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ display: "block", margin: "10px 0" }}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ display: "block", margin: "10px 0" }}
                />
                <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
