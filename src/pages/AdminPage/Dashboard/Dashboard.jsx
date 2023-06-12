import './dashboard.css'

import Report from '../../../components/Report/Report';


function Dashboard() {
  
  return (
    <div className="dashboard">
      <div class="grid-container-dashboard">
        <div class="grid-item">
          <div className='item-col'>          
            <h3 className="title">Đã bán</h3>
            <p className="value">VD: 200</p>
          </div>
          <div className="icon">
          <i className="bi bi-cart-plus"></i>
          </div>
          
        </div>

        <div class="grid-item">
          <div className='item-col'>          
            <h3 className="title">Số đơn hàng</h3>
            <p className="value">VD: 100</p>
          </div>
          <div className="icon">
            <i className="bi bi-truck"></i>
          </div>
        </div>

        <div class="grid-item">
          <div className='item-col'>          
            <h3 className="title">Tỉ lệ</h3>
            <p className="value">VD: 100</p>
          </div>
          <div className="icon">
          <i className="bi bi-graph-up-arrow"></i>
          </div>
          
          {/**<i className="bi bi-graph-down-arrow p-3 fs-1"></i> */}
        </div>
      </div>       

      <div>
        
    <hr style={{marginTop: '30px'}}/> 
        <Report/>
      </div>

    </div>
  );
}

export default Dashboard;