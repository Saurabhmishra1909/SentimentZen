import React from 'react'
import "./SongList.css"

export default function SongList(props) {
    const {title, singer, genre} = props;
    const image = "https://t3.ftcdn.net/jpg/03/01/43/92/360_F_301439209_vpF837oCGM1lp0cnC7stzCBn3th0dQ6O.jpg";
    return (
        <div className='main'>
            <img className='image' src={image} />
            <div>
                <h3>{title}</h3>
                <p>Singer: {singer}</p>
                <button>Listen Now</button>
            </div>
        </div>
    )
}
