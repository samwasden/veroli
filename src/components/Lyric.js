import React from 'react'
import lyrics from '../content/lyrics'

export default function Lyric(props) {
    return (
        <div className='lyrics_box'>
            <h1 className='lyrics_title'>{lyrics[props.index].name}</h1>
            <div className='lyrics_words'>
                {lyrics[props.index].lyrics.map((elem, index) => (
                    <p>{elem}</p>
                ))}
            </div>
        </div>
    )
}
