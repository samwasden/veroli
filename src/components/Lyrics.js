import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Lyric from './Lyric'
import '../stylesheets/Lyrics.css'

function Lyrics() {
    const [index, setindex] = useState(0)
    return (
        <div>
            <Header />
            <div className='lyric_content'>
                <div className='lyric_panel'>

                </div>
                <Lyric index={index}/>
                <div className='lyric_panel'>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Lyrics