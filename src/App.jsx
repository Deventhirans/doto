import { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Admin from './pages/admin/Admin/Admin';

function App() {
  // const { authUser, isAdminUser } = useAuthContext();
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={authUser ? (isAdminUser ? <Admin /> : <UserHome />) : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes> */}
      <Admin /> 
      {/* <Toaster /> */}
    </div>
  )
}

export default App;
