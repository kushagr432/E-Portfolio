import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../Images/IMG_20220116_123051.png';

export default function Content() {
    const style = {
        fontFamily: 'Roboto Condensed, sans-serif',
    };
    const blackButtonStyle = {
        backgroundColor: 'black',
        color: 'white', // You can change the text color if needed
    };
    
return (
    <>
    <div className='flex flex-row justify-center lg:flex-col pl-128'>

    <div className= "flex flex-col justify-center  lg:flex-row" >
    <div className='md:order-1'>
<div className='w-0 lg:w-28'>
</div>
    </div>
    <div className='md:order-2 flex items-center'>
        <div className='flex flex-row'>
    <div>
        <ul className='flex flex-col p-4'>
            <li>
            {/* hover:bg-black */}
            <span style={style} className="self-center text-3xl font-medium whitespace-nowrap dark:text-white sm:text-5xl">Student</span>
            </li>
            <li>
            <span style={style} className="self-center text-3xl font-medium whitespace-nowrap dark:text-white sm:text-5xl">Developer</span>
            </li>
            <li>
            <span style={style} className="self-center text-3xl font-medium whitespace-nowrap dark:text-white  sm:text-5xl">Designer</span>
            </li>
            <li>
            <span style={style} className="self-center text-3xl font-medium whitespace-nowrap dark:text-white sm:text-5xl">Programmer</span>
            </li>
        </ul>
        </div>
    </div>
    <div className='md:order-3'>
<div className='w-8 sm:w-14'>
</div>
    </div>
    <div className='md:order-4'>
    <img src={myImage} className="h-72 sm:h-96 w-38 mr-3 ml-4" alt="me" />
    
    </div>
        </div>
    <div className='md:order-5'>
<div className='w-14'>
</div>
    </div>
<div className='md:order-6'>
    <div className='h-0.5 w-96 lg:h-96 bg-black lg:w-0.5 pb-0 lg:pb-10 opacity-70'>

    </div>
</div>
<div className='md:order-7'>
<div className='w-14 h-14 sm:h-0'>
</div>
    </div>
    <div className='md:order-8 '>
<h1 style={style} className='self-center text-5xl font-medium whitespace-nowrap dark:text-white pb-2'>
    Kushagr Jain
</h1>
<span style={style} className='self-center text-xl font-medium whitespace-nowrap dark:text-white pt-2'>
    Full Stack Developer
</span>
<br />
<div className='h-10'>
</div>
<span style={style} className='self-center text-xl font-medium whitespace-normal dark:text-white pt-2'>
    A Full Stack multi-skilled professional
</span>
<br />
<span style={style} className='self-center text-xl font-medium whitespace-normal dark:text-white pt-2'>
who can handle both front-end and back-end development,
</span>
<br />
<span style={style} className='self-center text-xl font-medium whitespace-normal dark:text-white pt-2'>
making them capable of creating complete web applications.
</span>
<br />
<div  className='pt-8'>
<Link  to="/contact" className="" aria-current="page">
<Button variant="outlined" style={blackButtonStyle}> Hire Me</Button>
</Link>


</div>


</div>


    </div>
    </div>
    </>
)
}
