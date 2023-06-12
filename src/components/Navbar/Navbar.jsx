import { Link } from "react-router-dom";
import { useState } from "react";
import './navbar.css'
import { hover } from "@testing-library/user-event/dist/hover";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
  
    const menuCategory = [
        {
            name:"Tiểu thuyết",
            path:"/products",
        },
        {
            name:"Thiếu Nhi",
            path:"/products",
        },
        {
            name:"Ngôn tình",
            path:"/products",
        },
        {
            name:"Chính trị",
            path:"/products",
        },
        {
            name:"Truyện tranh",
            path:"/products",
        },
        {
            name:"Viễn tưởng",
            path:"/products",
        }
    ]
    return (
        <nav style={{left: toggle && "0"}} className="navbar">            
            <ul className="navbar-links">              
               
                
                <Link className={isOpen? "navbar-link clicked":"navbar-link" } onClick={toggle}>
                    Danh mục
                    <div className="navbar-link-menu"
                    style={
                        {
                            width: isOpen? "140px": "0", 
                            display: isOpen? "block": "none",
                            boxShadow: isOpen? "0px 0px 10px 0px black": "none",
                        }}>
                        {
                            menuCategory.map((item, index) =>(
                                <Link to={item.path} key={index} className="category-option" style={{display: isOpen? "block": "none"}}>
                                    {item.name}
                                </Link>
                            ))
                        }
                
                    </div>
                </Link>
                <Link className="navbar-link">Hot Deal</Link>
                <Link className="navbar-link">Sách mới</Link>
                <Link className="navbar-link">Bán chạy</Link>
            </ul>
           
        </nav>
    );
}

export default Navbar;

