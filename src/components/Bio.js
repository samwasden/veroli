import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../stylesheets/Bio.css'

function Bio() {
    return (
        <div className='bio'>
            <Header mode='dark'/>
            <div className='bio_content'>
                <div className='bio_text'>
                    <p>
                        Oliver Wasden is a Boise, Idaho based music producer and artist. He has been playing piano for 14 years and has been producing music for 6. Specializing in Contemporary RnB music since the beginning of his production experience, Oliver has become increasingly knowledgeable in this type of music along with related genres like Hip-Hop. He is also currently taking a commercial music program at Utah Valley University and plans to graduate in 2022.
                    </p>
                    <br />
                    <p>
                        Oliver specializes in Logic Pro X but is also proficient in Pro Tools. He has spent countless hours making music in a private and collaborative setting. 
                    </p>
                    <br />
                    <p>    
                        Since the time he began producing music, Oliver has released two projects titled ‘Sunday in the Valley’ (2017) and ‘Stations’ (2018). Amidst these projects, notable songs Idle (32,000+ streams across platforms) and 5 Years (36,000+ streams across platforms) have seen relative success. Since the release of those projects, he has collaborated with a number of other artists such as Chicago-based rapper Nateforever, Israel-based artist Fi5hi, and Boise-based artist Y3llow. Oliver has also released a number of newer singles and is currently working on a new project.
                    </p>
                </div>
            </div>
            <Footer mode='dark'/>
        </div>
    )
}

export default Bio