import React from 'react'
import './login.css'
import SignUp from './SignUp'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
        <div className="login-container">
            
        <div><h1 className="login-title">Đăng nhập</h1><hr /></div>

            <section className="login_input_section">
                
                <div className="form__field">
                    <input className="login_input"type="text" name='orderID' placeholder='Địa chỉ email của bạn' />
                </div>
                <div className="form__field">
                    <input className="login_input"type="text" name='orderID' placeholder='Mật khẩu' />
                </div>
                

                <div className="button-login-div">
                    <button className="button-login">Đăng nhập</button>
                </div>
                <div className="button-signup">
                    <Link to="/signup" >Đăng ký</Link>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Login