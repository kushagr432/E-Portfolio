import { Drawer, IconButton, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FaceImage from '../Images/facebook.png';
import InstaImage from '../Images/instagram.png';
import linkImage from '../Images/linkedin.png';
import menuImage from '../Images/menu.png';
import TweetImage from '../Images/twitter.png';
export default function Navbar() {
    const style = {
        fontFamily: 'Roboto Condensed, sans-serif',
    };
    const [openRight, setOpenRight] = useState(false);

    const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
    // const lineStyle = {
    //     borderBottom: '2px solid #ffffff', // Change the color and size as needed
    // };
    
return (
    <>
    <nav className="bg-grey-800 bg-opacity-100 border-gray-200 ">
    <div className="flex items-center p-4">
    <div className="md:order-1">
    <div className='w-4 sm:w-10'>
    {/* This is a blank div to give spacing between two elements */}
    </div>
    </div>
    <div className="md:order-2">
        <Link to="/" className="flex items-center">
          {/* <img src={quizImage} className="h-12 mr-3 ml-4" alt="Flowbite Logo" /> */}
        <div className='flex flex-col'>
            <span style={style} className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">Kushagr Jain</span>
            <span style={style} className="self-center text-sm font-normal whitespace-nowrap dark:text-gray-400 ">Full Stack Developer</span>
        </div>
        </Link>
    </div>
    <div className="md:order-3">
    <div className='w-12 sm:w-96'>
    {/* This is a blank div to give spacing between two elements */}
    </div>
    </div>
    <div className="md:order-4 hidden sm:block">
        <ul className='flex flex-row p-4'>
            <li>
            <Link to="/about" className="" aria-current="page">
            <span style={style} className="self-center text-lg font-medium whitespace-nowrap dark:text-white pr-6 hover:underline">About</span>
        </Link>
            </li>
            <li>
            <Link to="/projects" className="" aria-current="page">
            <span style={style} className="self-center text-lg font-medium whitespace-nowrap dark:text-white pr-6 hover:underline">Projects</span>
        </Link>
            </li>
            <li>
            <Link to="/exp" className="" aria-current="page">
            <span style={style} className="self-center text-lg font-medium whitespace-nowrap dark:text-white pr-6 hover:underline">Experience</span>
        </Link>
            </li>
            <li>
            <Link to="/contact" className="" aria-current="page">
            <span style={style} className="self-center text-lg font-medium whitespace-nowrap dark:text-white pr-6 hover:underline ">Contact</span>
        </Link>
            </li>
        </ul>
        </div>
        <div className="md:order-5">
    <div className='w-14 sm:w-80'>
    {/* This is a blank div to give spacing between two elements */}
    </div>
    </div>
    <div className='order-7 block sm:hidden'>
    
    <img onClick={openDrawerRight} src={menuImage} className="h-7 " alt="menu" />
    <Drawer placement="right" open={openRight} onClose={closeDrawerRight} className="p-4">
    <div className="mb-6 flex items-center justify-between">
    <Link to="/">
        <Typography variant="h5" color="blue-gray">
            Kushagr Jain
        </Typography>
    </Link>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </IconButton>
        </div>
        <List>
        <Link to="/about" className="" aria-current="page">
        <ListItem>
            <ListItemPrefix>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd"
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                clipRule="evenodd"/>
            </svg>
            </ListItemPrefix>
            About
        </ListItem>
        </Link>
        <Link to="/projects" className="" aria-current="page">

        <ListItem>
            <ListItemPrefix>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"/>
            </svg>
            </ListItemPrefix>
            Projects
            
        </ListItem>
                </Link>
                <Link to="/exp" className="" aria-current="page">

        <ListItem>
            <ListItemPrefix>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                >
                <path
                fillRule="evenodd"
                d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                clipRule="evenodd"
                />
            </svg>
            </ListItemPrefix>
            Experience
        </ListItem>
                </Link>
                <Link to="/contact" className="" aria-current="page">
        <ListItem>
            <ListItemPrefix>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
                />
            </svg>
            </ListItemPrefix>
            Contact Me
        </ListItem>
                </Link>
        </List>
    </Drawer>

    </div>
    <div className="md:order-6  hidden sm:block">
        <ul className='flex flex-col p-4 sm:flex-row'>
            <li>
            <Link to="/" className="" aria-current="page">
            <img src={InstaImage} className="h-7 mr-3 ml-4" alt="Insta" />
        </Link>
            </li>
            <li>
            <Link to="/" className="" aria-current="page">
            <img src={linkImage} className="h-7 mr-3 ml-4" alt="Link" />
        </Link>
            </li>
            <li>
            <Link to="/" className="" aria-current="page">
            <img src={TweetImage} className="h-7 mr-3 ml-4" alt="T" />
        </Link>
            </li>
            <li>
            <Link to="/" className="" aria-current="page">
            <img src={FaceImage} className="h-7 mr-3 ml-4" alt="F" />
        </Link>
            </li>
        </ul>
        </div>

    </div>
    
</nav>
{/* <div className='flex items-center justify-center'>

    <div className='h-0.5 bg-black w-10/12 opacity-70'>

    </div>
    </div> */}
    </>
)
}
