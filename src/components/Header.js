import React, {useState} from 'react';
import Title from './Title';
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu'
import DropdownMenu from './DropdownMenu'
import '../stylesheets/Header.css'

export default function Header(props) {
    
    const [mobile] = useState(window.innerWidth < 768)
    const [menu, setmenu] = useState(false)

    
    return (
        <div className={props.mode === 'light' ? 'header' : 'dark_header'}>
            <div className='subheader'>
                <Title />
                {mobile ? <HamburgerMenu setmenu={setmenu} menu={menu} /> : <Navbar />}
            </div>
            {menu ? <DropdownMenu /> : null} 
        </div>

    )
}
