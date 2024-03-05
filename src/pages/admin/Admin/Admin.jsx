import React from 'react'
import Navbar from '../../../components/admin/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import UserManagement from '../UserMangement/UserManagement';
// import Configuration from '../Configuration/Configuration';
// import TicketHub from '../Service/Service';
// import HistoryofService from '../OtherExpense/OtherExpense';
import ContactfromUser from '../Vendor/Vendor';
import './admin.css'
import Vendor from '../Vendor/Vendor';
import Service from '../Service/Service';
import OtherExpense from '../OtherExpense/OtherExpense';
import AdminHome from '../Home/AdminHome';

const Admin = () => {
    return (
        <div>
            <Navbar />
            <div className='admin-root-container'>
                <Routes>
                    <Route path="/admin/" element={<AdminHome />} />
                    <Route path="/admin/users" element={<UserManagement />} />
                    <Route path="/admin/Vendor" element={<Vendor />} />
                    <Route path="/admin/Service" element={<Service />} />
                    <Route path="/admin/OtherExpense" element={<OtherExpense />} />
                    <Route path="/admin/support" element={<ContactfromUser />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin;