import './App.css';
import React from 'react';
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Date1 from './Component/Date';
import Carosel from './Component/carosel';
import Footer from './Component/Footer';
import Politics from './Component/politics';
import News from './Component/News';
import LoginForm from './Component/loginform';
import RegiForm from './Component/registrationForm';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Date1/>
    <Routes>
    <Route  path="/loginform" element={<LoginForm/>} />
    <Route  path="/registrationForm" element={<RegiForm/>} />
    <Route  path="/" element={<Carosel/>} />
    <Route  path="/" element={<Carosel/>} />
    <Route  path="/News" element={<News/>} />
    <Route  path="/politics" element={<Politics/>} />
    </Routes>
    <Footer/>
    </Router>
  </>
  );
}

export default App;
