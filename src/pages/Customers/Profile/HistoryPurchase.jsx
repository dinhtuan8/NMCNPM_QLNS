import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import SidebarMenu from './SidebarMenu'
import Table from '../../../components/Table/Table'
import './profile.css'

import { data_order_history } from '../../../testData/orderhistory'
import Book_cover_2 from '../../../images/book_cover_2.jpg'

const MenuOption = () =>{
  const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    return (

      <div className="menu-option" 
      style={
        { boxShadow: isOpen? "0px 1px 10px 1px lightgray": "none",
          backgroundColor: isOpen? "white": "none",
          width: isOpen? "180px": "10px",
        }}>
        <div className="option-top-icon">
          <i class="bi bi-three-dots-vertical" onClick={toggle}></i>
        </div>
        <div className="options">
          <Link className="option" style={{display: isOpen? "block": "none", color: "black"}}>Chi tiết</Link>
          <Link className="option" style={{display: isOpen? "block": "none", color: "black"}}>Đánh giá</Link>
          <Link className="option" style={{display: isOpen? "block": "none", color: "black"}}>Liên hệ</Link>
          <Link className="option"style={{display: isOpen? "block": "none", color: "black"}}>Mua lại</Link>
        </div>
      </div>
    )
}
const column_history = [
  {
    name: 'Chỉnh sửa',
    button: true,
    cell: row => <MenuOption/>,
    width: '100px',
    allowOverflow: true,
  },
  {
      name: 'Tựa sách',
      selector: row => <div style={{display:'flex', alignItems:'center'}}>
              <img src={Book_cover_2} alt="" className='ordered-book' />{row.title}</div>,
      width: '300px'

  },
  {
      name: 'Ngày đặt',
      selector: row => row.createAt,
      width: '200px',
  },
  {
    name: 'Số lượng',
    selector: row => row.quantity,
    width: '120px',
  },
  {
    name: 'Tổng tiền',
    selector: row => row.totalMoney,
  },
  {
      name: 'Trạng thái',
      selector: row => row.status,
  },                          
]
const HistoryPurchase = () => {
  return (
    
    <div className='profile-container'>
        <div className="sidebar-menu">
            <SidebarMenu/>
        </div>
        <div className="history-container">
          <div className="order-container">
            <Table rows = {data_order_history} cols = {column_history} search = {true} isAdmin = {false}/>
          </div>
        </div>
    </div>
  )
}

export default HistoryPurchase