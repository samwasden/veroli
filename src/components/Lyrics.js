import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Lyric from './Lyric'
import '../stylesheets/Lyrics.css'

function Lyrics() {
    const [index, setindex] = useState(0)
    return (
        <div className='lyrics'>
            <Header mode='dark'/>
            <div className='lyric_content'>
                <div className='lyric_panel'>

                </div>
                <Lyric index={index}/>
                <div className='lyric_panel'>

                </div>
            </div>
            <Footer mode='dark'/>
        </div>
    )
}

export default Lyrics