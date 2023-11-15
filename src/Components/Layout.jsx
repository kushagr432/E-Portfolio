import React from 'react';
import Navbar from './Navbar';
export function Layout({ children }) {
return (
    <div>
    <Navbar />
    <div className="container mx-auto mt-4">
        {children}
    </div>
    </div>
)
}