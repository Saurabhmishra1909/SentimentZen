import React from 'react'

export default function Podcast(props) {
    const { emotionLabel } = props;
    return (
        <>
            <div>Podcast</div>
            <div>{emotionLabel}</div>
        </>


    )
}
