import React from 'react';
import "./footer.css";
import Momo from "../../images/momo.png";
import Zalopay from "../../images/zalopay.png";
import Vnpay from "../../images/vnpay.png";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        
        {/**column1 */}
        <div className="col">
          <h4>About Us</h4>
            <p>Phone: 123-456-789</p>
            <p>Email: bookstore@gmail.com</p>
            <p>Address: Linh Trung, Thu Duc</p>
        </div>
        {/**column2 */}
        <div className="col">
          <h4>Services</h4>
          <a href="/">
            <p>Questions</p>
          </a>
          <a href="/">
            <p>Policy</p>        
          </a>
          <a href="/">
            <p>Help</p>
          </a>
        </div>
        {/**column3 */}
        <div className="col">
          <h4>Payment</h4>
          <div className="payment">
            <p><img src={Momo} alt="" /></p>
            <p><img src={Zalopay} alt="" /></p>
            <p><img src={Vnpay} alt="" /></p>
          </div>
        </div>  
        {/*column4 */}
        <div className="col">
          <h4>Follow Us</h4>
          <div className="socialmedia">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-github"></i>
            <i class="bi bi-envelope-at-fill"></i>
          </div>
        </div> 
        <hr></hr>  

      </div>
      {/**row */}
    </footer>
  )
}

export default Footer
