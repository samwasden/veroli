import React from 'react'
import '../stylesheets/DropdownMenu.css'
import { Link } from 'react-router-dom'

export default function DropdownMenu() {
    return (
        <div className='dropdown_menu'>
            <ul className='dropdown_list'>
                <li className='dropdown_item'>
                    <Link className='droplink' to="/">HOME</Link>
                </li>
                <li className='dropdown_item'>
                    <Link className='droplink' to="/bio">BIO</Link>
                </li>
                <li className='dropdown_item'>
                    <Link className='droplink' to="/lyrics">LYRICS</Link>
                </li>
                <li className='dropdown_item'>
                    <Link className='droplink' to="/more">MORE</Link>
                </li>
                <li className='dropdown_item'>
                    <Link className='droplink' to="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}
