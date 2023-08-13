import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'; // Make sure to import Routes and Route
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard.js component
import ClientDashboard from './ClientDashboard'; // Import the ClientDashboard component
import DeveloperDashboard from './DeveloperDashboard'; // Import the DeveloperDashboard component
import {useAuth} from '../../AuthContext';

const DashboardLayout = () => {
    const { userRole } = useContext(useAuth);

    // Dynamically render the appropriate dashboard content based on user role
    const renderDashboardContent = () => {
        switch (userRole) {
            case 'admin':
                return <AdminDashboard />;
            case 'client':
                return <ClientDashboard />;
            case 'developer':
                return <DeveloperDashboard />;
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Common dashboard layout components */}

            {/* Nested routes for specific dashboard features */}
            <Routes>
                {/* Define nested routes for each role's dashboard */}
                <Route path="/" element={<div></div>}>
                    {/* Example: /dashboard/projects */}
                    {/* You can define nested routes for each dashboard */}
                </Route>
            </Routes>

            {/* Render the appropriate dashboard content */}
            {renderDashboardContent()}

            {/* Other common dashboard components */}
        </div>
    );
};

export default DashboardLayout;
