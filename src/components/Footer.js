import React from 'react'
import '../stylesheets/Footer.css'
import appleMusic from '../content/icons/applemusic_icon.png';
import spotify from '../content/icons/spotify_icon.png';
import soundcloud from '../content/icons/soundcloud_icon.png';
import instagram from '../content/icons/instagram_icon.png';
import twitter from '../content/icons/twitter_icon.png';
import tiktok from '../content/icons/tiktok_icon.png';
import youtube from '../content/icons/youtube_icon.png';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_section' id='social_section'>
                <a className='social_link' href='https://open.spotify.com/artist/07IUi8zBiFZOAikCBioS30' target='_blank' rel='noreferrer'><img className='social_logo' src={spotify} alt='spotify'></img></a>
                <a className='social_link' href='https://music.apple.com/us/artist/veroli/39378020' target='_blank' rel='noreferrer'><img className='social_logo' src={appleMusic} alt='apple_music'></img></a>
                <a className='social_link' href='https://soundcloud.com/ve-ro-li' target='_blank' rel='noreferrer'><img className='social_logo' src={soundcloud} alt='soundcloud'></img></a>
                <a className='social_link' href='https://www.instagram.com/oliverwasden/' target='_blank' rel='noreferrer'><img className='social_logo' src={instagram} alt='instagram'></img></a>
                <a className='social_link' href='https://twitter.com/veroliveroli' target='_blank' rel='noreferrer'><img className='social_logo' src={twitter} alt='twitter'></img></a>
                <a className='social_link' href='https://www.tiktok.com/@ver0li?' target='_blank' rel='noreferrer'><img className='social_logo' src={tiktok} alt='tiktok'></img></a>
                <a className='social_link' href='https://www.youtube.com/channel/UChJQUbO4QaVlfqUEtUB4SHg' target='_blank' rel='noreferrer'><img className='social_logo' src={youtube} alt='youtube'></img></a>
            </div>
        </div>
    )
}
