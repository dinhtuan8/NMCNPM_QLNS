import React from 'react'

const SignUp = () => {
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
                
                <div className="button-signup-div">
                    <button className="button-signup-page">Đăng ký</button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default SignUp