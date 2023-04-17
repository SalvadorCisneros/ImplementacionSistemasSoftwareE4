import React from 'react';
import LoginPage from './pages/LoginPage/login';
import Main from './pages/Main/main';
import ProfilePage from './pages/ProfilePage/profile';
import { BrowserRouter,Routes,Route } from "react-router-dom";



export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>
  
  ) 

}


