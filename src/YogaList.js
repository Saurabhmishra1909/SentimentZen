import React from 'react'
import "./SongList.css"

export default function YogaList(props) {
    const { yoga, description, video } = props;
    const handleButtonClick = () => {
        window.open(video, '_blank');
    };
    const image = "https://t3.ftcdn.net/jpg/05/87/31/20/360_F_587312095_7VfefweKioShTBh8tlitiCwsHqMZF2qU.jpg"
    return (
        <div className='main'>
            <img className='image' src={image} />
            <div>
                <h3>{yoga}</h3>
                <p>{description}</p>
                <button onClick={handleButtonClick}>
                    Watch Tutorial
                </button>
            </div>
        </div>
    )
}
