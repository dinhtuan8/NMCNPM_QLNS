import React, { useState, useMemo } from 'react'
import './manageUsers.css'
import Table from '../../../components/Table/Table';
import {data_users} from '../../../testData/manageusers'


const columns_users = [
  {
    name: 'STT',
    selector: row => row.userId,
  },
  {
      name: 'Họ và Tên',
      selector: row => row.fullName,
  },
  {
      name: 'Email',
      selector: row => row.email,
  },    
  {
      name: 'SĐT',
      selector: row => row.phoneNum,
  },
  {
    name: 'Giới tính',
    selector: row => row.gender,
  },
  {
      name: 'Ngày sinh',
      selector: row => row.birthDate,
  },
  {
      name: 'Ngày đăng ký',
      selector: row => row.registerDate,
  },
  {
      name: 'Địa chỉ',
      selector: row => row.address,
      width: '300px'
  },
];

const ManageUsers = () => {

  const [search, setSearch] = useState("")  
  const [filter, setFilter] = useState([])
    
  const subHeaderComponent =   useMemo(()=>{
    const result = data_users.filter((user) =>{
      return user.userId.toLowerCase().match(search.toLowerCase());
    })
    setFilter(result)
  }, [search])

  	return (
    <section className='_container'>
      <div className="title">
        <h1 className='h1_title'>Danh sách khách hàng</h1>  
      </div>      

      <div className='data_table'>        
        <Table rows = {data_users} cols ={columns_users} search = {true}/>     
      </div>      
      
    </section>
    
	);
}

export default ManageUsers