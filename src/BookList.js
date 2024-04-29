import React from 'react'
import "./SongList.css"

export default function BookList(props) {
    const {title, author, image} = props;
    return (
        <div className='main'>
            <img className='image' src={image} />
            <div>
                <h3>{title}</h3>
                <p>{author}</p>
                <button>Read Now</button>
            </div>
        </div>
    )
}
