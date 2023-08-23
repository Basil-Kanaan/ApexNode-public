import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import {AuthProvider, useAuth} from './AuthContext';
import './styles.css';
import '@mui/material/styles';
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/ApexNode/" element={<Landing/>}/>
                    <Route path="/ApexNode/login" element={<Login/>}/>
                    <Route path="/ApexNode/signup" element={<SignUp/>}/>
                    <Route path="/ApexNode/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/ApexNode/dashboard/*" element={<ProtectedDashboard/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

const ProtectedDashboard = () => {
    const {isAuth} = useAuth();
    return isAuth() ? <DashboardLayout/> : <Navigate to="/ApexNode/login"/>;
};

export default App;
