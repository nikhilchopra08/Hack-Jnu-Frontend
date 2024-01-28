import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Componets/Login';
import Booking from './Componets/Booking';
import ImageGallery from './Componets/DashBoard';
import Register from './Componets/Register';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<ImageGallery />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;