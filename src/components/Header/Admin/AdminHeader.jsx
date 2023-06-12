import React from "react";
import { Link } from "react-router-dom";

import "./adminheader.css";

const AdminHeader = ({toggle, setToggle}) => {
    return (
      <header className="header">
            <div className="header-top">

                <div onClick={()=>setToggle(prev=>!prev)} className="header-top-menu">
                    <i className="bi bi-list"></i>
                </div>

                <Link to = "/" className="header-top-logo">
                    <i class="bi bi-book-fill"></i>
                        Bookstore
                </Link>

                <Link to = "/login" className="header-top-login-menu">
                        <i className="bi bi-person-fill">Logout</i>
                </Link>
            </div>
            
            <nav style={{left: toggle && "0"}} className="navbar">            
              <ul className="navbar-links">
                  <Link to='/admin' className="navbar-link">Dashboard</Link>
                  <Link to='/admin/allproducts' className="navbar-link">Kho sách</Link>
                  <Link to='/admin/users' className="navbar-link">Người dùng</Link>
                  <Link to='/admin/orders' className="navbar-link">Đơn hàng</Link>
                  
              </ul>
            </nav>
        </header> 
      
    );
}

export default AdminHeader;