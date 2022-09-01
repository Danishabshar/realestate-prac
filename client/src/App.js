import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Pg1 from './components/pg1';

import Pg2 from './components/pg2';
import Pg3 from './components/pg3';
import Pg4 from './components/pg4';
import Table from './components/Table';
import Pg0 from './components/pg';
const App=()=> {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup"element={<Signup/>}></Route>
      <Route path="/P0" element={<Pg0/>}></Route>
      <Route path="/p1" element={<Pg1/>}></Route>
      <Route path='/p2' element={<Pg2/>}></Route>
      <Route path='/p3' element={<Pg3/>}></Route>
      <Route path='/p4' element={<Pg4/>}></Route>
      <Route path='/t1' element={<Table/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;