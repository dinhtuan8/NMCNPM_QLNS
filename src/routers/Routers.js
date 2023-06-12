import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/AdminPage/Dashboard/Dashboard'

import ManageUsers from '../pages/AdminPage/ManageUsers/ManageUsers'
import ManageBooks from '../pages/AdminPage/ManageBooks/ManageBooks'
import ManageOrders from '../pages/AdminPage/ManageOrders/ManageOrders'
import BookList from '../pages/Customers/Products/BookList'
import BookDetail from '../pages/Customers/BookDetail/BookDetail'
import { Cart } from '../pages/Customers/Cart/Cart'
import Login from '../pages/Customers/Login/Login'
import SignUp from '../pages/Customers/Login/SignUp'
import Profile from '../pages/Customers/Profile/Profile'
import HistoryPurchase from '../pages/Customers/Profile/HistoryPurchase'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home />}></Route>

        {/*admin pages */}
        <Route path='/admin/dashboard' element = {<Dashboard />}></Route>
        <Route path='/admin/' element = {<Dashboard />}></Route>
        <Route path='/admin/allproducts' element = {<ManageBooks />}></Route>
        <Route path='/admin/users' element = {<ManageUsers />}></Route>
        <Route path='/admin/orders' element = {<ManageOrders />}></Route>
        <Route path='/products' element={<BookList/>}></Route>
        <Route path='/products/:bookId' element={<BookDetail/>}></Route>
        <Route path='/user/cart/' element={<Cart/>}></Route>        
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/user/profile' element={<Profile/>}></Route>
        <Route path='/user/history' element={<HistoryPurchase/>}></Route>
    </Routes>
  )
}

export default Routers