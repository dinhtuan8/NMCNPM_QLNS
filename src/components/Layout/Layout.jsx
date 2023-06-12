import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import { useLocation } from 'react-router-dom'
import AdminHeader from '../Header/Admin/AdminHeader'
import SidebarMenu from '../../pages/Customers/Profile/SidebarMenu'


const Layout = () => {

  const location = useLocation()

  return (
    <>

    {
      location.pathname.startsWith('/admin') ? <AdminHeader/> : <Header/>
    }
        <div>
            <Routers />
        </div>
        <Footer />
    </>
  )
}

export default Layout