import React from 'react'
import './addnew.css'

function AddNew(props) {
    return (
        <div id='overlay' className="form__container">
            <div className="form__ui-form">
             <div className="close-btn"><button className='close-form-btn' onClick={() => props.setTrigger(false)}>X</button></div>
             <div>
                <h1 className="form__title">Thêm sách mới</h1>
                <hr />
             </div>                   
            
                <section className='input_section'>
                    
                <div className="input_left_column">
    
                    <div className="form__field">
                        <label>ID</label>
                        <input className="form_input"type="text" name='bookId' placeholder='Nhập ID' />
                    </div>
                    <div className="form__field">
                        <label>Tựa sách</label>
                        <input className="form_input"type="text" name='title' placeholder='Nhập tựa sách' />
                    </div>
                    <div className="form__field">
                        <label>Giá tiền</label>
                        <input className="form_input"type="text" name='price' placeholder='Nhập giá tiền' />
                    </div>
                    <div className="form__field">
                        <label>Tác giả</label>
                        <input className="form_input"type="text" name='author' placeholder='Nhập tên tác giả' />
                    </div>
                    <div className="form__field">
                        <label>Nhà xuất bản</label>
                        <input className="form_input"type="text" name='publisher' placeholder='Nhập nhà xuất bản' />
                    </div>
                </div>

                <div className="input_right_column">
                    
                    <div className="form__field">
                        <label>Năm xuất bản</label>
                        <input className="form_input"type="text" name='pubYear' placeholder='Nhập năm xuất bản' />
                    </div>
                    <div className="form__field">
                        <label>Mô tả</label>
                        <input className="form_input"type="text" name='description' placeholder='Nhập mô tả sách' />
                    </div>
                    <div className="form__field">
                        <label>URL</label>
                        <input className="form_input"type="text" name='urlBook' placeholder='Nhập URL' />
                    </div>
                    <div className="form__field">
                        <label>Số lượng</label>
                        <input className="form_input"type="text" name='amountInStorage' placeholder='Nhập số lượng tồn kho' />
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

export default AddNew
