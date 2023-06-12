import React, { useState, useEffect } from 'react'
import './manageBooks.css'
import AddNew from '../../../components/AddNew/AddNew';
import Table from '../../../components/Table/Table';
import {data_books} from '../../../testData/managebooks'
import EditBook from '../../../components/Edit/EditBook'

const ButtonEdit = () => {
  const [showEdit, setShowEdit] = useState(false);
  
  return (
    <div >
      {showEdit && <EditBook setTrigger={() => setShowEdit(false)}/>}
      <button className="btn-table" style={{fontSize: '15px'}} onClick={()=>setShowEdit(!showEdit)}>Edit</button>
    </div>
  ) 
}

const columns_books = [
  {
    name: 'Chỉnh sửa',
    button: true,
    cell: row => <ButtonEdit></ButtonEdit>
  },
  {
    name: 'ID',
    selector: row => row.bookId,
    width: '100px'
  },
  {
      name: 'Tựa sách',
      selector: row => row.title,
      width: '300px'

  },
  {
      name: 'Giá',
      selector: row => row.price,
      width: '100px'
  },
  {
    name: 'Tác giả',
    selector: row => row.author,
    width: '100px'
  },
  {
      name: 'NXB',
      selector: row => row.publisher,
      width: '200px'
  },
  {
      name: 'Năm XB',
      selector: row => row.pubYear,
      width: '100px'
  },
  {
      name: 'Mô tả',
      selector: row => row.description, 
      width: '400px',
  },
  {
      name: 'urlBook',
      selector: row => row.urlBook,
      width: '100px'
  },
  {
      name: 'Đã Bán',
      selector: row => row.sold_number,
      width: '100px'
  },
  {
      name: 'Tồn kho',
      selector: row => row.amountInStorage,
      width: '100px'
  },  
];
const ManageBooks = () => {
  
  const [showAdd, setShowAdd] = useState(false);

  return (
    <section className='_container'>  
      <div className='title'>
      <h1 className='h1_title'>Kho sách</h1>
        {showAdd && <AddNew setTrigger={() => setShowAdd(false)}/>}
        <button className="add-btn" onClick={()=>setShowAdd(!showAdd)}>Add</button>
        
      </div>

      <div className='data_table'>
        <Table rows = {data_books} cols = {columns_books} search = {true}/>
      </div>

     
    </section>
    
  )
}

export default ManageBooks