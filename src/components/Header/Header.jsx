import {useState} from "react";
import Navbar from "../Navbar/Navbar";
import "./header.css"
import { Link } from "react-router-dom";

const Header = () =>{    
    const [toggle, setToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/user/profile",
            name: "Tài khoản",
        },
        {
            path: "/user/cart",
            name: "Giỏ hàng",
        },
        {
            path: "/user/history",
            name: "Lịch sử",
        },
        {
            path: "/",
            name: "Đăng xuất",
        },
        
    ]
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
                <div className="header-top-search-box">
                        <input className="header-top-search-input" type="search" placeholder="Search in book store ..."></input>
                        <i className="bi bi-search"></i>
                </div>
                
                    <Link to ="/" className="header-top-home">
                        Home
                    </Link>
                    <Link to ="/products" className="header-top-about">
                        Sách
                    </Link> 
                    
                    <a href ="#footer" className="header-top-about">
                        Liên Hệ
                    </a> 

                    <Link to="/user/cart" className="header-top-cart-wrapper">
                            <i class="bi bi-cart"></i>
                    </Link>

                    <Link className="header-top-profile-icon" onClick={toggleMenu}>
                            <div className="person-icon">
                                <i className="bi bi-person-fill"></i>
                            </div>
                            <div className="profile-link-menu"
                                style={
                                    {
                                        width: isOpen? "140px": "0", 
                                        display: isOpen? "block": "none",
                                        boxShadow: isOpen? "0px 0px 10px 0px black": "none",
                                    }}>
                                    {
                                        menuItem.map((item, index) =>(
                                            <Link to={item.path} key={index} className="category-option" style={{display: isOpen? "block": "none"}}>
                                                {item.name}
                                            </Link>
                                        ))
                                    }
                            
                                </div>
                            
                    </Link>
                    <Link to = "/login" className="header-top-log">
                            Đăng nhập
                    </Link>
                </div>
            
            <Navbar toggle={toggle} setToggle = {setToggle} />
        </header> 
    
    );
}

export default Header;