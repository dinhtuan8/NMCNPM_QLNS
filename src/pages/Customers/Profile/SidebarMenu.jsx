import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './profile.css'


const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/user/profile",
            name: "Tài khoản",
            icon: <i class="bi bi-person-fill"></i>
        },
        {
            path: "/user/cart",
            name: "Giỏ hàng",
            icon: <i class="bi bi-cart-fill"></i>
        },
        {
            path: "/user/history",
            name: "Lịch sử",
            icon: <i class="bi bi-cart-check-fill"></i>
        },
    ]
  return (
    <div className="container-fluid">
        <div className="sidebar" style={{width: isOpen? "300px": "85px"}}>
            <div className="top_section">
                <h1 className="sidebar-logo"><i class="bi bi-list" onClick={toggle}></i></h1>
            </div>
            {
                menuItem.map((item, index)=>(
                    <Link to ={item.path} key={index} className='sidebar-link'>
                        <div className="sidebar-icon">{item.icon}</div>
                        <div className="sidebar-link_text" style={{display: isOpen? "block": "none"}}>{item.name}</div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default SidebarMenu