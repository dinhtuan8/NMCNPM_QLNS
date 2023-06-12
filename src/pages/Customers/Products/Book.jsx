import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Book_cover_1 from '../../../images/book_cover_1.jpg';
import './book.css'
const Book = (props) => {
    const [book, setBook] = useState(props.book)
  return (
    <div className="book-container">
        <Link to ={`/products/${book.bookId}`} className="img"><img className="img-book" src={Book_cover_1} alt="" /></Link>
        <div className="cart-icon bi bi-cart-fill"></div>
        <div className="title-price">
            <div className="title-book"><Link to ={`/products/${book.bookId}`} className="title-book">{book.title}</Link></div>
            <div className="price-book"><h4 className="price-book" >{book.price}</h4></div>
        </div>
    </div>
  )
}

export default Book