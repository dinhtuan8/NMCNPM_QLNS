import React, {useState} from 'react'

import Book_cover_1 from '../../../images/book_cover_1.jpg';
import { useParams } from 'react-router-dom';
import { data_books } from '../../../testData/managebooks';
import './bookdetail.css'
const BookDetail = (props) => {
    const {bookId} = useParams()
    
    const getBook = () => {return data_books.filter(
        function(data){ return data.bookId == bookId }
    );}
        
    const book=getBook()[0]

    
    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () =>{
        if(quantity<20){
        setQuantity(quantity + 1)
        }
    }

    const handleDecrease = () =>{
        if(quantity >1){
        setQuantity(quantity - 1)
        }
    }
  return (
    <div className="bookdetail-container">
        <div className="img"><img src={Book_cover_1} alt="" className="bookdetail-img" /></div>
        <div className="bookdetail-info-1">
            <h1 className="bookdetail-title">{book.title}</h1>
            <div className="bookdetail-description">{book.description}</div>
            <div className="bookdetail-info-2">
                
                <div className="bookdetail-author"><label>Tác giả: </label>{book.author}</div>
                <div className="bookdetail-publisher"><label>Nhà xuất bản: </label>{book.publisher}</div>
                <div className="bookdetail-pubYear"><label>Năm xuất bản: </label>{book.pubYear}</div>
            </div>
            <div className="bookdetail-price-cart">
                <div><h2 className="bookdetaile-price">{book.price} VNĐ</h2></div>
                
                <div className="bookdetail-quantity-box">
                    <button type='button' onClick={handleDecrease} className='input-group-text'>-</button>
                    <div className="text-center">{quantity}</div>
                    <button type='button' onClick={handleIncrease} className='input-group-text'>+</button>
                </div>

                <div className="bookdetail-cart-icon bi-cart-fill"> Thêm vào giỏ hàng</div>
            </div>
        </div>
    </div>
  )
}

export default BookDetail