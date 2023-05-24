import React  from 'react';
import LoginPage from './pages/LoginPage/login';
import Main from './pages/Main/main';
import ProfilePage from './pages/ProfilePage/profile';
import Error from './pages/Error/error';
import { BrowserRouter,Routes,Route } from "react-router-dom";




export default function App() {
  
  const token = localStorage.getItem('token') === 'true';


  return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<LoginPage/>} />

        {token && (
          <>
          <Route path="/main" element={<Main/>} />
          <Route path={`/profile/:id_usuario`} element={<ProfilePage/>} />
          <Route path="*" element={<Error/>} />
          </>)}
      </Routes>
    </BrowserRouter>
  )   

  }

