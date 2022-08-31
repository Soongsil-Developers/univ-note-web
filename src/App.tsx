import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import MainScreen from './Screens/MainScreen/MainScreen';
import './App.css';

const App = () => {
  return(
    <div className='App'>
      {/* <div className='App-content'> */}
        <Menu />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainScreen />}></Route>
          </Routes>
        </BrowserRouter>
      {/* </div> */}
    </div>
  )
}

export default App;
