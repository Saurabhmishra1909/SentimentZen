import React from 'react'
import BookList from './BookList'
import bookData from './bookData'

export default function Books(props) {
  const { emotionLabel } = props;
  // Filter songs based on the emotionLabel
  const filteredSongs = bookData.filter(book => book.emotion === emotionLabel);
  return (
    <>
      <h2>Feeling {emotionLabel} - Here are some books</h2>
      {filteredSongs.map(book => (
        <BookList title={book.title} author={book.author} image={book.image} />
      ))}

    </>
  )
}
