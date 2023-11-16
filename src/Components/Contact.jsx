import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Footer } from './Footer';
import { Layout } from './Layout';
export default function Contact() {
    const style = {
        fontFamily: 'Roboto Condensed, sans-serif',
    };
        const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        });
    
        const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        };
    
        const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://formspree.io/f/xdorvely', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            });
    
            if (response.ok) {
              // Assuming Formspree returns a success message
            alert('Message sent successfully!');
              // Clear the form after successful submission
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            } else {
            console.error('Failed to send message');
              // Handle errors here
            }
        } catch (error) {
            console.error('Error sending message:', error.message);
            // Handle errors here
        }
        };
        const blackButtonStyle = {
            backgroundColor: 'black',
            color: 'white', // You can change the text color if needed
        };
return (
    <>
    <Layout/>
    <div className='h-20 '> </div>
<div className='flex flex-col'>
<div className='bg-white h-10 relative z-0' ></div>
<div className='flex flex-col'>
        <div className='md:order-1'>
    <div className='flex flex-row'>

        <div className='w-24 sm:w-80 md:order-1'></div>
    <div className='md:order-2' >
<h1 style={style} className='text-7xl  font-bold '>Contact</h1>
    </div>
    </div>
        </div>
    <div className='md:order-2'>
    <div className='flex flex-row'>

<div className='w-0 sm:w-80 md:order-1'></div>
<div className='md:order-2' >
    <div className='w-full p-8 sm:w-auto sm:p-0'>

<div className='bg-gray-200 shadow-md rounded-lg p-8 shadow-2xl border-1 border-black '>
<form className="w-72 sm:w-128 mt-5" onSubmit={handleSubmit}>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name:
        </label>
        <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id="name"
        type="text"
        placeholder="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email:
        </label>
        <input
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id="email"
        type="email"
        placeholder="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
        Message:
        </label>
        <textarea className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id="message" placeholder="Your Message" name="message"
        value={formData.message} onChange={handleChange} required />
    </div>
    <div className="flex items-center justify-end pt-4">
    <Button type="submit" variant="outlined" style={blackButtonStyle}>
        Send Message
        </Button>
    </div>
    </form>
</div>
        </div>
</div>
</div>
    </div>
</div>
<div className='h-24'></div>
</div>

<Footer/>
    </>
)
}
