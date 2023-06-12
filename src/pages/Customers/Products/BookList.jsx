import React from 'react'
import Book_cover_1 from '../../../images/book_cover_1.jpg';
import Book from './Book'
import { data_books } from '../../../testData/managebooks';

const BookList = (props) => {
  return (
    <div class="grid-container">
      {data_books.map((item, index)=>{
        return ( 
          <Book book = {item}/>)
      })}
    </div>
  )
}

export default BookList