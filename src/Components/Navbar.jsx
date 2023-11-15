import React from 'react';
import { Link } from 'react-router-dom';
import FaceImage from '../Images/facebook.png';
import InstaImage from '../Images/instagram.png';
import linkImage from '../Images/linkedin.png';
import TweetImage from '../Images/twitter.png';
export default function Navbar() {
    const style = {
        fontFamily: 'Roboto Condensed, sans-serif',
    };
    // const lineStyle = {
    //     borderBottom: '2px solid #ffffff', // Change the color and size as needed
    // };
return (
    <>
    <nav className="bg-grey-800 bg-opacity-100 border-gray-200 ">
    <div className="flex items-center p-4">
    <div className="md:order-1">
    <div className='w-10'>
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
    <div className='w-24 sm:w-96'>
    {/* This is a blank div to give spacing between two elements */}
    </div>
    </div>
    <div className="md:order-4">
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
    <div className='w-20 sm:w-80'>
    {/* This is a blank div to give spacing between two elements */}
    </div>
    </div>
    <div className="md:order-6">
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
