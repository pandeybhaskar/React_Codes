import logo from './logo.svg';
//import './App.css';
import AdminPage from './components/AdminPage';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {  
    
  return (
    <div className="App h-full">
      {/* <AdminPage onLoginClick={OnLoginClick}/>   */}
      <Router>
    {/* <Link to={'/'}>LINK</Link> */}
    {/* <Link to={'/homepage'}></Link> */}

      <Routes>
      <Route path="/" element={<AdminPage />} />    
      <Route path="/homepage" element={<HomePage/>} />    
      </Routes>

      </Router>  
    </div>
  );
}

export default App;
