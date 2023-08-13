import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import ClientDashboard from './ClientDashboard';
import DeveloperDashboard from './DeveloperDashboard';
import { useAuth } from '../../AuthContext';

const DashboardLayout = () => {
    const { userRole } = useAuth();

    return (
        <div>
            {/* Common dashboard layout components */}
            <header>
                <h1>Welcome to ApexNode Dashboard</h1>
                <p>Your Role: {userRole}</p>
            </header>

            {/* Nested routes for specific dashboard features */}
            <Routes>
                {/* Define nested routes for each role's dashboard */}
                <Route path="/" element={<div></div>}>
                    {/* Example: /dashboard/projects */}
                    {/* You can define nested routes for each dashboard */}
                </Route>
            </Routes>

            {/* Render the appropriate dashboard content */}
            <div>
                {userRole === 'admin' && <AdminDashboard />}
                {userRole === 'client' && <ClientDashboard />}
                {userRole === 'developer' && <DeveloperDashboard />}
                {/* Add more conditions for other roles */}
            </div>

            {/* Other common dashboard components */}
            <footer>
                <p>Contact Us: contact@apexnode.com</p>
            </footer>
        </div>
    );
};

export default DashboardLayout;
