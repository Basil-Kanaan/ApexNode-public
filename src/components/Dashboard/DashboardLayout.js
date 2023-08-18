import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {useAuth} from '../../AuthContext';
import {Container, Content, Footer, Header} from './styles';
import AdminDashboard from "./AdminDashboard";
import ClientDashboard from "./ClientDashboard";
import DeveloperDashboard from "./DeveloperDashboard"; // Import styles

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const DashboardLayout = () => {
    const {userRole} = useAuth();

    return (
        <Container>
            <Header>
                <h1>{capitalizeFirstLetter(userRole)} Dashboard</h1>
            </Header>

            <Routes>
                {/* Define nested routes for each role's dashboard */}
                <Route path="/" element={<div></div>}>
                    {/* Example: /dashboard/projects */}
                    {/* You can define nested routes for each dashboard */}
                </Route>
            </Routes>

            <Content>
                {/* Render the appropriate dashboard content */}
                {userRole === 'admin' && <AdminDashboard/>}
                {userRole === 'client' && <ClientDashboard/>}
                {userRole === 'developer' && <DeveloperDashboard/>}
                {/* Add more conditions for other roles */}
            </Content>

            <Footer>
                <p>Contact Us: contact@apexnode.com</p>
            </Footer>
        </Container>
    );
};

export default DashboardLayout;
