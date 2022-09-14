import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import MainScreen from './Screens/MainScreen/MainScreen';
import './App.css';
import Login from './Screens/Login/Login';
import Registor from './Screens/Registor/Registor';

const App = () => {
  /**
   * Menu 컴포넌트를 BrowserRouter 밖에 둬서 어떤 루트로 넘어가든 해당 컴포넌트는 가지고 가게 합니다
   * 아니면 그냥 BrowserRouter 안에 넣고 exact 이용해도 되는데
   */

  return(
    <div className='App'>
        <Menu />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainScreen />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/regist' element={<Registor />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
