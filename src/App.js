import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword'; // Import the ForgotPassword component
import './styles.css';
import '@mui/material/styles';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/ApexNode/" element={<Landing/>}/>
                    <Route path="/ApexNode/login" element={<Login/>}/>
                    <Route path="/ApexNode/signup" element={<SignUp/>}/>
                    <Route path="/ApexNode/forgot-password" element={<ForgotPassword/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
