import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import './table.css'

const Table= (props) => {
  const [data, setData] = useState(props.rows)
  const [columns, setColumn] = useState(props.cols)
  const [query, setQuery] = useState("")
  const [searchBox, setSearchBox] = useState(props.search)
  const [isAdmin, setIsAdmin] = useState(props.isAdmin)
  const tableCustomStyles = {
    headRow: {
		style:{
			fontSize: '15px',
			fontWeight: 'bold',
			backgroundColor: '#FFA500',
      }
    },
    progress: {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifContent: 'center'
      }
    }
  }
  
  const keys = Object.keys(data[0])

  const search = (data) => {    
  if(searchBox === false){ return data}
  return data.filter((item) => 
    keys.some((key) => item[key].toLowerCase().includes(query))
  );
  }
  const searchHeaderComponent = () =>{
    if(searchBox===true)
    return (      
      <input
      className='search-input'
      type='text'
      placeholder='Search here...'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
    />
    )
  }
  return(
    <div className="table">
      <DataTable
        columns={columns}
        data={search(data)}
        pagination
        customStyles={tableCustomStyles}
        selectableRows
        subHeader
        subHeaderComponent = {searchHeaderComponent()}
        // contextActions={contextActions}
          //onSelectedRowsChange={handleRowSelected}
			    //clearSelectedRows={toggleCleared}   
      />
     
      <div className="button-div">
      {
        isAdmin?
        
        <div className="export-button-div">
          <button className="export-btn">
            Export
          </button>
        </div>
        
        :
        <br/>
        }
        <div className='delete-button-div'>
          <button className="delete-btn">
            Delete
          </button>
        </div>
      </div>
      
    </div>
  )
};

export default Table