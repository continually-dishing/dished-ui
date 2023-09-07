import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import EntryPoint from './screens/Entry/Entry';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPoint />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
