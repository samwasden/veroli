import React from 'react';
import Title from './Title';
import Navbar from './Navbar';
import '../stylesheets/Header.css'

export default function Header() {
    return (
        <div className='header'>
            <Title />
            <Navbar />
        </div>
    )
}
