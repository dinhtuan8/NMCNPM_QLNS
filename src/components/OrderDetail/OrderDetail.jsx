import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Button, Modal, Table } from 'react-bootstrap';
import {data_order_detail} from '../../testData/orderdetail'
import './orderdetail.css'

const columns_orders = [
    {
        name: 'Mã đơn',
        selector: row => row.orderID,
        width: '100px',
    },
    {
        name: 'Mã sách',
        selector: row => row.bookID,
        width: '100px'
    },
    {
        name: 'SL',
        selector: row => row.quantity,
        width: '100px'
    },
    {
        name: 'Phí vận chuyển',
        selector: row => row.shipping,
    },
    {
        name: 'Tổng tiền',
        selector: row => row.totalMoney,   
    },
]

const renderData = (id) =>{
    const data = data_order_detail.map(item => {
        if(item.orderID === id)
        return(
            item
        )
    })
}
const data = [
    {
        orderID: "10001",
        bookID: "100001",
        quantity: "1",
        totalMoney: "180000.00",
        shipping: "20000"
    },
]


const OrderDetail = (props) => {
    //const [value, setValue] = useState(renderData('10001'))
    //console.log(value)

    const tableCustomStyles = {
        headCells: {
          style: {
            fontSize: '15px',
          },
        },
      }


  return (    
    <div id='overlay' className="form__container">
        
        <div className="form__order-detail-form">
        <div className="close-btn"><button className='close-form-btn' onClick={() => props.setTrigger(false)}>X</button></div>
            <div>
                <h1 className="form__title">Order #1001</h1>
                <hr />
            </div>           
            

            <section className='billing_detail'>
                <div className="client_info">
                    <h3 className="h_order_detail">Thông tin khách hàng</h3>
                    <ul>
                        <li>Nguyễn Văn A</li>
                        <li>18 Nguyễn Du, Phường Nguyễn Du, Quận Hai Bà Trưng, Thành phố Hà Nội</li>
                    </ul>
                    <h4 className="h_order_detail">Email</h4> <span>example@gmail.com</span>
                    <h4 className="h_order_detail">SĐT</h4> <span>123-456-789</span>                
                </div>
                
                <div className="order_info">
                    <h3 className="h_order_detail">Thông tin đơn hàng</h3>
                    <h4 className="h_order_detail">Mã đơn</h4> <span>#10001</span>
                    <h4 className="h_order_detail">Mã vận chuyển</h4> <span>#10001</span>
                    <h4 className="h_order_detail">Ngày đặt hàng</h4> <span>01/01/2023</span>
                    <h4 className="h_order_detail">Phương thức thanh toán</h4> <span>Credit Card</span>
                </div>
            </section>
            <section className='table_total_price'>
                <DataTable
                    columns={columns_orders}
                    data={data}
                    customStyles={tableCustomStyles}
                />
            </section>

            <section>
                <div className='button-div'>
                    <button className="cancel-btn">Từ chối</button>

                    <button className="confirm-btn">Xác nhận</button>
                </div>
            
            
            
                     
             
            </section>
        </div>
    </div>
  )
}

export default OrderDetail