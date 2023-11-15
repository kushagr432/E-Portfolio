// import shopVideo from '..\Images\Videos\React App - Google Chrome 2023-11-12 23-50-18.mp4';
import Button from '@mui/material/Button';
import React from 'react';
import shopImage from '../Images/Screenshot 2023-11-14 104340.png';
import portImage from '../Images/Screenshot 2023-11-14 193544.png';
import cssImage from '../Images/Tech Icons/css-3.png';
import sqlImage from '../Images/Tech Icons/database.png';
import htmlImage from '../Images/Tech Icons/html-5.png';
import fireImage from '../Images/Tech Icons/icons8-firebase-48.png';
import springImage from '../Images/Tech Icons/icons8-spring-boot-48.png';
import scriptImage from '../Images/Tech Icons/java-script.png';
import javaImage from '../Images/Tech Icons/java.png';
import reactImage from '../Images/Tech Icons/science.png';
import linkImage from '../Images/link.png';
import { Footer } from './Footer';
import { Layout } from './Layout';
export default function Projects() {
    const style = {
        fontFamily: 'Roboto Condensed, sans-serif',
    };
    const blackButtonStyle = {
        backgroundColor: 'black',
        color: 'white', // You can change the text color if needed
    };
return (
    <>
    <Layout/>
<div className='h-20 relative z-0'> </div>
<div className='flex flex-col'>
<div className='md:order-1 bg-gray-200  relative z-0 h-fit w-screen'>
<div className='bg-white h-10 relative z-0' ></div>
<div className='flex items-center justify-center'>
<h1 style={style} className='text-7xl absolute top-0 z-10 font-bold '>Projects</h1>
</div>
<div className='h-24'></div>
<div className='relative z-0  flex flex-col justify-center '>
<div className='flex justify-center items-center'>
<div className='bg-white shadow-md rounded-lg p-8 shadow-2xl w-max hover:scale-105 transition-transform'>
<div className='flex flex-row '>
    {/* <div className='w-80'></div> */}
<div>
    <h2 style={style} className='text-xl font-semibold pb-4'>ShopX - Full Stack E-Commerce Website</h2>
    <p style={style} className='bg-white shadow-md rounded-lg p-4 shadow-2xl'>"ShopX" is an e-commerce platform developed using React.js for
the front-end, <br /> Spring Boot for the back-end, MySQL for data
management, and REST APIs for  <br />seamless communication. This
project demonstrates my full stack development skills <br />and the
ability to create a user-friendly online shopping experience. <br />
Payment Gateway is Integrated using stripe <br />
User Authentication is managed using FireBase Authentication</p>

<div className='md:order-3 pt-8'>
<h2 style={style} className='text-xl font-semibold pb-10'>Tech Stack Used</h2>
<div className='w-128 flex flex-row'>
<img src={htmlImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={cssImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={scriptImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={reactImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />

</div>
<div className='w-128 flex flex-row pt-4'>
<img src={javaImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={springImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={fireImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={sqlImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
{/* <img src={flutterImage} className="h-10 mr-3 ml-4" alt="me" /> */}
</div>
</div>
    </div>
    <div className='w-20'></div>
    <div className='flex flex-col'>
    <h2 style={style} className='text-xl font-semibold pb-4'>UI of The Website</h2>
    <div>
    <img src={shopImage} className="h-52 w-96  rounded-md shadow-md  shadow-2xl hover:scale-105 transition-transform " alt="me" />
    </div>
    <h2 style={style} className='text-xl font-semibold pb-4 pt-8'>Link to Github</h2>
    <div className='flex flex-row'>
    <Button variant="outlined" style={blackButtonStyle}>
    <a style={style} href="https://github.com/kushagr432/shopX.git" target="_blank" rel="noreferrer">ShopX </a>
    
    </Button>
    <img className='h-4 pl-2 ' src={linkImage} alt="img" />
    </div>
    </div>
</div>
</div>
{/* 1 box */}
</div>
{/* 2nd Box */}
<div className='h-12'></div>
<div className='flex justify-center items-center'>
<div className='bg-white shadow-md rounded-lg p-8 shadow-2xl w-max hover:scale-105 transition-transform'>
<div className='flex flex-row '>
    {/* <div className='w-80'></div> */}
<div>
    <h2 style={style} className='text-xl font-semibold pb-4'>ShopX - Full Stack E-Commerce Website</h2>
    <p style={style} className='bg-white shadow-md rounded-lg p-4 shadow-2xl'>Discover my professional journey through my personalized e-portfolio,<br /> meticulously crafted using React.js and Tailwind CSS. This dynamic web <br /> application  not only showcases my skills and experiences but also offers <br />a seamless and responsive user experience. The implementation of React <br /> components ensures a modular and maintainable codebase, while Tailwind <br /> CSS brings a touch of elegance to the design. With a mobile-first approach, <br /> the portfolio adapts seamlessly to various screen sizes, presenting a <br /> polished and consistent look.</p>

<div className='md:order-3 pt-8'>
<h2 style={style} className='text-xl font-semibold pb-10'>Tech Stack Used</h2>
<div className='w-128 flex flex-row'>
<img src={htmlImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={cssImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={scriptImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={reactImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />

</div>
<div className='w-128 flex flex-row pt-4'>
{/* <img src={javaImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={springImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={fireImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" />
<img src={sqlImage} className="h-10 mr-3 ml-4  hover:scale-125 transition-transform" alt="me" /> */}
{/* <img src={flutterImage} className="h-10 mr-3 ml-4" alt="me" /> */}
</div>
</div>
    </div>
    <div className='w-20'></div>
    <div className='flex flex-col'>
    <h2 style={style} className='text-xl font-semibold pb-4'>UI of The Website</h2>
    <div>
    <img src={portImage} className="h-52 w-96  rounded-md shadow-md  shadow-2xl hover:scale-105 transition-transform " alt="me" />
    </div>
    <h2 style={style} className='text-xl font-semibold pb-4 pt-8'>Link to Github</h2>
    <div className='flex flex-row'>
    <Button variant="outlined" style={blackButtonStyle}>
    <a style={style} href="https://github.com/kushagr432/shopX.git" target="_blank" rel="noreferrer">Portfolio </a>
    
    </Button>
    <img className='h-4 pl-2 ' src={linkImage} alt="img" />
    </div>
    </div>
</div>
</div>
{/* 1 box */}
</div>
</div>
</div>
</div>
<Footer/>
    </>
)
}
