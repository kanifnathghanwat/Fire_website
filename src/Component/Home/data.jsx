import React, { useState } from 'react';

function ContactForm1() {
    console.log('in contact form')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Email sent successfully');
                // Reset the form after successful submission
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
        <h1>Hello</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ContactForm1;
