import React from 'react'
import hamburger from '../content/icons/hamburger_menu_icon.png'
import exit from '../content/icons/exit_icon.png'
import '../stylesheets/HamburgerMenu.css'

export default function HamburgerMenu(props) {
    const {setmenu, menu} = props
    return (
        <div>
            <button id='hamburger_button' onClick={() => {
                menu ? setmenu(false) : setmenu(true);
            }}>
                {menu ? <img id='exit_icon' src={exit} alt='EXIT'></img> : <img id='hamburger_icon' src={hamburger} alt='MENU'></img>}
            </button>
        </div>
    )
}
