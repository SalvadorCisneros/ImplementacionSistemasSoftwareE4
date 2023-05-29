import React  from 'react';
import LoginPage from './pages/LoginPage/login';
import Main from './pages/Main/main';
import ProfilePage from './pages/ProfilePage/profile';
import Error from './pages/Error/error';
import PrivateRoutes from './pages/Error/error';
import { BrowserRouter,Routes,Route, useParams} from "react-router-dom";




export default function App() {
  
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const isEmployee = localStorage.getItem('isEmployee') === 'true';

  
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        {isAdmin ? <Route path="/main" element={<Main/>} /> : null}         
        {isEmployee &&
          <Route
            path="/profile/:id_usuario"
            element={
              <ProfileGuard>
                <ProfilePage />
              </ProfileGuard>
            }
          />}
          {isAdmin &&
          <Route
            path= "/profile/:id_usuario" element={<ProfilePage />}
            />}
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )   
  }


function ProfileGuard({ children }) {
  const { id_usuario } = useParams();
  const idStored = localStorage.getItem('idUsuario');

  if (id_usuario === idStored) {
    return children;
  } else {
    return <Error/>;
  }
}