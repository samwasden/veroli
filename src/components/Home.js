import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../stylesheets/Home.css'

function Home() {
    return (
        <div className='home'>
            <Header mode='dark'/>
            <div className='home_content'>
                <div className='music_box'>
                    <div className='music_player'>
                        <iframe title='default' src="https://open.spotify.com/embed/track/6GjGLUixjj05MBMhaYgmJE?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <iframe title='stations' src="https://open.spotify.com/embed/album/2yflarAPZV4OailIm4fUNs?theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                    <div className='music_player'>
                        <iframe title='guided' width="100%" height="230" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/892838998&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        <iframe title='ac' width="100%" height="230" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/706654621&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                </div>
            </div>
            <Footer mode='dark'/>
        </div>
    )
}

export default Home