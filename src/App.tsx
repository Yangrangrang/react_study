import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import SignIn from './components/Login';
import Join from './components/Join';
import { DefaultLayout } from './layout/DefaultLayout';
import { Mypage } from './user/Mypage';
import { UserContextProvider } from './user/UserContext';


function App() {

  React.useEffect(()=>{
  }, [])
   

  return (
    <div className="App">
      {/* <Container> */}
        <UserContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route index element={<MainLayout />}></Route>
                <Route path="/login" element={< SignIn />}></Route>
                <Route path="/join" element={<Join />}></Route>
                <Route path="/mypage" element={<Mypage />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContextProvider>

      {/* </Container> */}
    </div>
  );
}

export default App;
