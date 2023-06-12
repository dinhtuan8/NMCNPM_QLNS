import React, {useState} from 'react'
import Table from '../../../components/Table/Table'
import OrderDetail from '../../../components/OrderDetail/OrderDetail'
import { data_orders } from '../../../testData/orders'
import EditOrder from '../../../components/Edit/EditOrder'

const ButtonDetail = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div >
      {showDetail && <OrderDetail setTrigger={() => setShowDetail(false)}/>}
      <button className="btn-table"  style={{fontSize: '15px'}} onClick={()=>setShowDetail(!showDetail)}>Chi tiết</button>
    </div>
  ) 
}
const ButtonEdit = () => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div >
      {showEdit && <EditOrder setTrigger={() => setShowEdit(false)}/>}
      <button className="btn-table"  style={{fontSize: '15px'}} onClick={()=>setShowEdit(!showEdit)}>Edit</button>
    </div>
  ) 
}


const columns_orders = [
  {
    name: 'Chỉnh sửa',
    button: true,
    cell: row => <ButtonEdit/>
  },
  {
      name: "Chi tiết",
      button: true,
      cell: row => <ButtonDetail/>
  },
  {
      name: 'Mã đơn',
      selector: row => row.orderID,
      width: '90px'
  },
  {
      name: 'Mã KH',
      selector: row => row.userID,
      width: '90px'
  },
  {
      name: 'Mã địa chỉ',
      selector: row => row.addressID,
      width: '120px',
  },
  {
      name: 'PT thanh toán',
      selector: row => row.paymentMethod,
  },    
  {
      name: 'SL',
      selector: row => row.total_quantity,
      width: '60px'
  },
  {
      name: 'Tổng tiền',
      selector: row => row.totalMoney,
  },
  {
      name: 'Ngày đặt',
      selector: row => row.createAt,
      width: '200px',
  },
  {
      name: 'Code vận chuyển',
      selector: row => row.deliveryCode,
  },
  {
      name: 'Trạng thái',
      selector: row => row.status,
  },
]


const ManageOrders = () => {

  const search = true;

  return (
    <section className='_container'>
      <div className="title">
        <h1 className='h1_title'>Danh sách đơn hàng</h1>  
      </div>      

      <div className='data_table'>        
        <Table rows = {data_orders} cols ={columns_orders} search = {true}/>     
      </div>      

    </section>
  )
}

export default ManageOrders