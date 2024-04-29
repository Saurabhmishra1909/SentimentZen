import React from 'react'
import SongList from './SongList'
import songData from "./songData.json"

export default function Songs(props) {
    const { emotionLabel } = props;
    // Filter songs based on the emotionLabel
    const filteredSongs = songData.filter(song => song.emotion === emotionLabel);
    return (
        <>
            <h2>Feeling {emotionLabel} - Here are some songs</h2>
            {filteredSongs.map(song => (
                <SongList title={song.title} singer={song.singer} genre={song.genre} />
            ))}

        </>
    )
}
