import React from 'react'
import './edit.css'
function EditOrder(props) {
    return (
        <div id="overlay" className="form__container">
            <div className="form__ui-form">
             <div className="close-btn"><button className='close-form-btn' onClick={() => props.setTrigger(false)}>X</button></div>
             <div>
                <h1 className="form__title">Chỉnh sửa</h1>
                <hr />
             </div>                   
            
                <section className='input_section'>
                    
                <div className="input_left_column">
    
                    <div className="form__field">
                        <label>Mã đơn</label>
                        <input className="form_input"type="text" name='orderID' placeholder='Nhập ID' />
                    </div>
                    <div className="form__field">
                        <label>Mã KH</label>
                        <input className="form_input"type="text" name='userID' placeholder='Nhập mã KH' />
                    </div>
                    <div className="form__field">
                        <label>Mã địa chỉ</label>
                        <input className="form_input"type="text" name='addressID' placeholder='Nhập mã địa chỉ' />
                    </div>
                    <div className="form__field">
                        <label>PT thanh toán</label>
                        <input className="form_input"type="text" name='paymentMethod' placeholder='Nhập phương thức thanh toán' />
                    </div>
                </div>

                <div className="input_right_column">
                    
                    <div className="form__field">
                        <label>Số lượng</label>
                        <input className="form_input"type="text" name='total_quantity' placeholder='Nhập số lượng' />
                    </div>
                    <div className="form__field">
                        <label>Tổng tiền</label>
                        <input className="form_input"type="text" name='totalMoney' placeholder='Nhập tổng tiền' />
                    </div>
                    <div className="form__field">
                        <label>Code vận chuyển</label>
                        <input className="form_input"type="text" name='deliveryCode' placeholder='Nhập code vận chuyển' />
                    </div>
                    <div className="form__field">
                        <label>Trạng thái</label>
                        <input className="form_input"type="text" name='status' placeholder='Nhập trạng thái' />
                    </div>
                </div>

                </section>

                <div className="button-div">
                <button className='confirm-btn'>Xác nhận</button>
                </div>     
            </div>            
        </div>
    )
}

export default EditOrder
