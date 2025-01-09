import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';

function App() {
    const isAuthenticated = localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/home" />} />
                <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
