import React from 'react'


import AdminNavbar from '../../../components/Admin/AdminNavbar/AdminNavbar'
import AdminSidebar from '../AdminSidebar/AdminSidebar'



const AdminHome = () => {
  return (
    <div className='admin-dashboard'>
        <AdminNavbar/>
        <AdminSidebar/>
    </div>
  )
}

export default AdminHome