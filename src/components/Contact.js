import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../stylesheets/Contact.css'

function Contact() {
    return (
        <div>
            <Header />
            <div className='contact_content'>
                <div className='contact_info'>
                    <p>
                        Oliver has written a number of locally successful songs over a period of five years. He offers songwriting and production services. 
                    </p>
                    <br />
                    <p>
                        Since producing 2 locally successful albums, Oliver has written and produced for a number of other artists worldwide, with genres ranging from hip-hop to folk.
                    </p>
                    <br />
                    <p>
                        Oliver is enrolled in a college music program and will graduate in 2021.
                    </p>
                    <br />
                    <br />
                    <p>
                        For business inquiries, Oliver can be reached via email at owasden@gmail.com
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact