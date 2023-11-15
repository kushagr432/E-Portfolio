import React from 'react';
import { Footer } from './Footer';
import { Layout } from './Layout';
export default function Experience() {
  const style = {
    fontFamily: 'Roboto Condensed, sans-serif',
};
  return (
    <>
    <Layout/>
    <div className='h-20 relative z-0'> </div>
<div className='flex flex-col'>
<div className='md:order-1 bg-gray-200  relative z-0 h-fit'>
<div className='bg-white h-10 relative z-0' ></div>
<div className='flex items-center justify-center'>
<h1 style={style} className='text-7xl absolute top-0 z-10 font-bold'>Experience</h1>
</div>
<div className='h-24'></div>
<div className='flex justify-center'>

<ol class="relative border-s border-black dark:border-black">
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div className='bg-white shadow-md rounded-lg p-8 shadow-2xl'>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May -July 2023</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer Intern</h3>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pb-2">Mk App Creatives</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Led the implementation of a modular and reusable component
architecture in React.js. <br />Gathered requirements and delivered solutions in Agile environments.<br />
Collaborated with cross-functional teams to integrate React.js features seamlessly</p>
        </div>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div className='bg-white shadow-md rounded-lg p-8 shadow-2xl'>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2021 - May 2025</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">B.E. Computer Science</h3>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pb-2">Chandigarh University</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Welcome to my portfolio, a snapshot of my journey in computer science. Armed with a BE in Computer Science, <br />I've delved into IoT, AIML, Operating Systems, DBMS, DSA, Computer Networks, and Java Programming. <br /> From orchestrating operating systems to mastering Java for versatile applications, my portfolio is a fusion of <br /> foundational knowledge and cutting-edge tech. Join me as I showcase a narrative woven with diverse experiences <br />and a passion for innovation.</p>
        </div>
    </li>
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div className='bg-white shadow-md rounded-lg p-8 shadow-2xl'>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2021</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">High School</h3>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pb-2">Little Angels Senior Secondary School</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        With a stellar academic record, I graduated high school with 92% in 10th grade and 83% in 12th grade. <br /> This underscores my commitment to excellence and sets the tone for my dedication to achieving high standards in all my endeavors.</p>
        </div>
    </li>
</ol>

    </div>
</div>
</div>
<Footer/>
    </>
  )
}

