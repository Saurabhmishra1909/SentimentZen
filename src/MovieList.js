import React from 'react';
import './SongList.css';

export default function BookList(props) {
    const {movie_title, year_of_release, imdb_rating} = props;
    const image = "https://png.pngtree.com/element_our/png/20181227/movie-icon-which-is-designed-for-all-application-purpose-new-png_287896.jpg";
    return (
        <div className='main'>
            <img className='image' src={image} alt='movie'/>
            <div>
                <h3>{movie_title}</h3>
                <p>{year_of_release}</p>
                <p>IMDB: {imdb_rating}</p>
                <button>Watch Now</button>
            </div>
        </div>
    )
}
