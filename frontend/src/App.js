import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import React from 'react';
import Paginations from './components/pagination/Paginations';
import Spinner from './components/Spiner/Spiner';
import Tables from './components/Tables/Tables';
import Header from './components/Headers/Header';
import Edit from './pages/Edit/Edit';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';


function App() {
  return (
    <div className='apps'>
     <Header/>

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={ <Register/>} />
      <Route path="/edit/:id" element={ <Edit/>} />
      <Route path="/userprofile/:id" element={ <Profile/>} />
     </Routes>
    </div>
  );
}

export default App;
