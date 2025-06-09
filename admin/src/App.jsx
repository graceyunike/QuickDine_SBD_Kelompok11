import React, { useState, useEffect } from 'react'
import Login from './Components/Login'
import Sidebar from './Components/Sidebar' 
import AddMenu from './pages/AddMenu'
import ListMenu from './pages/ListMenu'
import AdminTable from './pages/AdminTable'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 

export const backendUrl = 'http://localhost:7000'
export const currency = "$"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || ""); 

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      {
        token === "" ? (
          <Login setToken={setToken} />
        ) : (
          <div className="flex w-full">
            <Sidebar setToken={setToken} />
            <div className="w-[70%] ml-[max(5vw, 25px)] my-8 text-black text base">
            <Routes>
                <Route path='/add' element={<AddMenu token={token} />} />
                <Route path='/list' element={<ListMenu token={token} />} />
                <Route path='/table' element={<AdminTable token={token} />} />
                <Route path="*" element={<AddMenu token={token} />} /> 
              </Routes>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default App;