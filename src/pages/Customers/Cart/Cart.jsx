import React from 'react'
import { useState } from 'react';
import Table from '../../../components/Table/Table';
import SidebarMenu from '../Profile/SidebarMenu';

import Book_cover_1 from '../../../images/book_cover_1.jpg';
import './cart.css'

const column = [
  
  {
      name: 'Tựa sách',
      selector: row => <div style={{display:'flex', alignItems:'center'}}>
              <img src={Book_cover_1} alt="" className='ordered-book' />  {row.title}</div>,
      width: '500px'

  },
  {
    name: 'Số lượng',
    selector: row => row.quantity,
    width: '220px',
  },
  {
    name: 'Tổng tiền',
    selector: row => row.totalMoney,
    width: '200px'
  },                      
]

const testdata = [
  {
    quantity: "1",
    totalMoney: "160000.00",
    title: "Ng\u01b0\u1eddi b\u00e1n h\u00e0ng v\u0129 \u0111\u1ea1i",
  }, 
  {
    quantity: "2",
    totalMoney: "260000.00",
    title: "Giao ti\u1ebfp th\u00f4ng minh",
  }, 
  {
    quantity: "2",
    totalMoney: "160000.00",
    title: "Harry Potter",
  },   
]

export const Cart = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    
    <div className="profile-container">
      <div className="sidebar-menu">
          <SidebarMenu/>
      </div>
      <div className="cart-table-item">

        <Table rows = {testdata} cols = {column} search = {true} isAdmin = {false}/>

        <div className="cart-checkout">
          <button 
            className="cart-button-checkout">
            <i class="bi bi-bag-check-fill"></i> Thanh toán
          </button> </div>
      
      </div>
    </div>
  )
}
