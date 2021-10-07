import React from 'react'
import { Link } from "react-router-dom";
import '../stylesheets/Navbar.css'


export default function Navbar() {
    return (
    <div>
        <ul className='navigation'>
        <li className='navigator'>
            <Link className='navlink' to="/">HOME</Link>
        </li>
        <li className='navigator'>
            <Link className='navlink' to="/bio">BIO</Link>
        </li>
        <li className='navigator'>
            <Link className='navlink' to="/lyrics">LYRICS</Link>
        </li>
        <li className='navigator'>
            <Link className='navlink' to="/more">MORE</Link>
        </li>
        <li className='navigator'>
            <Link className='navlink' to="/contact">CONTACT</Link>
        </li>
        </ul>
    </div>
    )
}
