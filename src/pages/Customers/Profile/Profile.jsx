import React, { useState } from 'react'
import SidebarMenu from './SidebarMenu'
import Avatar from '../../../images/avatar.png'
const data_users = [
    {
       "userId": "1000000",
        "fullName": "Nguy\u1ec5n V\u0103n Anh",
        "email": "nguyenvananh@gmail.com",
        "phoneNum": "0923236277",
        "gender": "Nam",
        "birthDate": "2002-02-17",
        "registerDate": "2022-12-05",
        "address": "Ph\u01b0\u1eddng Linh Trung, Th\u1ee7 \u0110\u1ee9c, TPHCM"
    },
]
const Profile = () => {
    const [editProfile, setEditProfile] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    console.log(editProfile)
  return (
    <div className="profile-container">
        <div className="sidebar-menu">
            <SidebarMenu/>
        </div>
        <div className="profile-content">

            <div className="profile-info">
                <div className="img-div">
                    <img src={Avatar} alt="" className="profile-img" />
                    <input type="file" />
                    <hr />
                </div>
            <div className="profile-label">
                <label className='profile-label'>Họ và tên: </label>
                <label className='profile-label'>Email: </label>
                <label className='profile-label'>Số điện thoại:</label>
                <label className='profile-label'>Giới tính: </label>
                <label className='profile-label'>Ngày sinh: </label>
                <label className='profile-label'>Ngày đăng ký: </label>
                <label className='profile-label'>Địa chỉ: </label>
            </div>
            {
                editProfile === true ?
                <div className="profile-user">
                    <input type="text" placeholder='Họ và tên' className='input-profile'/>
                    <input type="text" placeholder='Email'className='input-profile'/>
                    <input type="text" placeholder='Số điện thoại'className='input-profile'/>
                    <input type="text" placeholder='Giới tính'className='input-profile'/>
                    <input type="text" placeholder='Ngày sinh'className='input-profile'/>
                    <input type="text" placeholder='Ngày đăng ký'className='input-profile'/>
                    <input type="text" placeholder='Địa chỉ'className='input-profile'/>
                </div>
                :
                <div className="profile-user">
                <span>{data_users[0].fullName}</span>
                <span>{data_users[0].email}</span>
                <span>{data_users[0].phoneNum}</span>
                <span>{data_users[0].gender}</span>
                <span>{data_users[0].birthDate}</span>
                <span>{data_users[0].registerDate}</span>
                <span>{data_users[0].address}</span>
                </div>
            }
           
            </div>

            <div className='edit-profile-link'>                
                <a 
                className='edit-profile' 
                onClick={()=>setEditProfile(!editProfile)}
                style={{display: editProfile? "none": "block"}}>
                    <i class="bi bi-pencil-square"></i>Chỉnh sửa thông tin</a>
                    <button 
                    className="save-change-profile" 
                    style={{display: editProfile? "block": "none"}}
                    onClick={()=>setEditProfile(!editProfile)}>
                Lưu thay đổi
            </button>
            </div>
            
        </div>
       
    </div>
  )
}

export default Profile