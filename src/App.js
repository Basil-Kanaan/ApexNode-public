import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import DashboardLayout from './components/Dashboard/DashboardLayout'; // Import the DashboardLayout component
import { AuthProvider } from './AuthContext'; // Import the AuthProvider

import './styles.css';
import '@mui/material/styles';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <NavBar />
                <Routes>
                    <Route path="/ApexNode/" element={<Landing />} />
                    <Route path="/ApexNode/login" element={<Login />} />
                    <Route path="/ApexNode/signup" element={<SignUp />} />
                    <Route path="/ApexNode/forgot-password" element={<ForgotPassword />} />
                    <Route path="/ApexNode/dashboard/*" element={<DashboardLayout />} /> {/* Add the dashboard route */}
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
