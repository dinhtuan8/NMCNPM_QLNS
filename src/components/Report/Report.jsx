import React from 'react'
import Table from '../Table/Table'
import { useState } from 'react';
import './report.css'
import {data_inventory, columns_inventory} from '../../testData/inventory'
import {data_sales, columns_sales} from '../../testData/sales'
const Report = () => {
    const [active, setActive] = useState("inventory");
  
       
  return (
    <div className="report"> 
        <h2 className='report_title'>Report</h2>
        <div className="filter">

            <div className="month-filter">
                <label htmlFor="month-filter-title">Tháng</label>
                <select id="month-filter-title" name="month-filter-title">
                {
                [...Array(12)].map((_, i) => i + 1)
                                .map(i => <option key={i} value={i}>{i}</option>)
                }
                </select>
            </div>

            <div className="year-filter">
                <label htmlFor="year-filter-title">Năm</label>
                <select id="year-filter-title" name="year-filter-title">
                {
                [...Array(3)].map((_, i) => i + 2021)
                                .map(i => <option key={i} value={i}>{i}</option>)
                }
                </select>
            </div>    

            <div className="btn-div">
                <button className='select_button' onClick={() => setActive("inventory")}>Kho hàng</button>
                <button className='select_button' onClick={() => setActive("sales")}>Doanh thu</button>
            </div>
        </div>
        
        <div className='report_table'>  
            {active ==="inventory" && <Table rows = {data_inventory} cols = {columns_inventory} search = {false}/>}
            {active ==="sales" && <Table rows = {data_sales} cols = {columns_sales} search = {false}/>}            
        </div>
      </div>
  )
}

export default Report