import React from 'react';
import { Link } from 'react-router-dom';
import cssImage from '../Images/Tech Icons/css-3.png';
import sqlImage from '../Images/Tech Icons/database.png';
import htmlImage from '../Images/Tech Icons/html-5.png';
import fireImage from '../Images/Tech Icons/icons8-firebase-48.png';
import springImage from '../Images/Tech Icons/icons8-spring-boot-48.png';
import scriptImage from '../Images/Tech Icons/java-script.png';
import javaImage from '../Images/Tech Icons/java.png';
import reactImage from '../Images/Tech Icons/science.png';
import { Footer } from './Footer';
import { Layout } from './Layout';
export default function About() {
    const style = {
        fontFamily: 'Roboto Condensed, sans-serif',
    };

        const downloadFile = () => {
          // Construct the relative URL to your PDF file
        const fileUrl = process.env.PUBLIC_URL + '/Resume_Kushagr_Jain.pdf';
    
          // Create a download link
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Resume_Kushagr.pdf';
    
          // Append the link to the document and trigger the click event
        document.body.appendChild(link);
        link.click();
    
          // Remove the link from the document
        document.body.removeChild(link);
        };
    return (
    <>
<Layout/>
<div className='h-20 relative z-0'> </div>
<div className='flex flex-col'>
<div className='md:order-1 bg-gray-200 relative z-0 h-fit'>
<div className='bg-white h-10 relative z-0' ></div>
<div className='flex items-center justify-center'>
<h1 style={style} className='text-7xl absolute top-0 z-10 font-bold'>About Me</h1>
</div>
<div className='h-12'></div>
<div className='relative z-0  flex justify-center'>
<p style={style} className='self-center text-lg font-medium whitespace-nowrap dark:text-white'>I'm a passionate Full Stack Developer with a love for crafting clean and efficient code.<br/> My journey in the world of technology began with a curiosity to explore both front-end <br />and back-end development, and since then, I've been on an exciting quest to build robust<br />  and scalable web applications.</p>
</div>
<div className='h-12'></div>
<div className='flex flex-row  justify-center'>
<div className='flex flex-col md:order-1'>
    <div className='md:order-1 pt-10'>
    <h2 style={style} className='text-xl font-semibold'>Contact</h2>
    <p  style={style} className='self-center text-base font-normal whitespace-nowrap dark:text-white'>For any sort help / enquiry ,<br /> shoot a<Link className='font-semibold underline' to="/contact"> MAIL</Link> and I'll get back</p>
    </div>
<div className='md:order-2 pt-10'>
    <h2 style={style} className='text-xl font-semibold'>Job Opportunities</h2>
    <p  style={style} className='self-center text-base font-normal whitespace-nowrap dark:text-white'>I'm looking for a Internship currently,<br /> If you see me as a good fit, check my <p className='font-semibold underline' onClick={downloadFile}>CV</p>   <br />and I'd love to work for you.</p>
</div>
</div>
<div className='w-36 md:order-2'></div>
<div className='md:order-3 pt-10 flex flex-col'>
    <p style={style} className='self-center text-base font-normal whitespace dark:text-white flex flex-wrap w-128 md:order-1'>As a Full Stack Developer, I navigate the intricate realms of both front-end and back-end technologies with a passion for building comprehensive and seamless web applications. Armed with a diverse skill set, I specialize in crafting engaging user interfaces using modern frameworks like React.js while ensuring the robustness of the back-end with technologies such as Node.js.
</p>
<br />
<p  style={style} className='self-center text-base font-normal whitespace dark:text-white flex flex-wrap w-128 md:order-2'>My journey in web development is marked by a commitment to continuous learning, allowing me to stay at the forefront of industry trends and deliver innovative solutions. Whether it's creating responsive designs, optimizing database performance, or implementing dynamic features, I approach every project with a problem-solving mindset and a dedication to excellence. </p>

<div className='md:order-3 pt-8'>
<h2 style={style} className='text-xl font-semibold pb-10'>Tech Stack</h2>
<div className='w-128 flex flex-row'>
<img src={htmlImage} className="h-10 mr-3 ml-4" alt="me" />
<img src={cssImage} className="h-10 mr-3 ml-4" alt="me" />
<img src={scriptImage} className="h-10 mr-3 ml-4" alt="me" />
<img src={reactImage} className="h-10 mr-3 ml-4" alt="me" />

</div>
<div className='w-128 flex flex-row pt-4'>
<img src={javaImage} className="h-10 mr-3 ml-4" alt="me" />
<img src={springImage} className="h-10 mr-3 ml-4" alt="me" />
<img src={fireImage} className="h-10 mr-3 ml-4" alt="me" />
<img src={sqlImage} className="h-10 mr-3 ml-4" alt="me" />
{/* <img src={flutterImage} className="h-10 mr-3 ml-4" alt="me" /> */}
</div>
</div>
</div>
</div>
</div>

    </div>
    <Footer/>

    </>
)
}
