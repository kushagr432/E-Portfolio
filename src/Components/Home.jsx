import React from 'react'
import Content from './Content'
import { Footer } from './Footer'
import Navbar from './Navbar'
export default function Home() {
return (
    <>
    <Navbar/>
    <div className='h-28'>
    </div>
    <div>
    <Content/>
    </div>
    <div className='h-screen lg:h-44'>
    </div>
    <Footer/>
    </>
)
}
