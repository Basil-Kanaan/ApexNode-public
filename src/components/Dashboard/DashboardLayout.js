import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { Container, Content, Footer, Header } from './styles';
import AdminDashboard from './AdminDashboard';
import ClientDashboard from './ClientDashboard';
import DeveloperDashboard from './DeveloperDashboard';
import DBNavBar from "./DBNavBar";
import Home from "../../pages/App/Home";
import NotFound from "../../pages/NotFound";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function DashboardLayout() {
    const { userRole } = useAuth();

    const DashboardComponent = {
        admin: AdminDashboard,
        client: ClientDashboard,
        developer: DeveloperDashboard,
    }[userRole] || null;

    return (
        <Container>
            <Header>
                <h1>{capitalizeFirstLetter(userRole)} Dashboard</h1>
            </Header>

            <DBNavBar/>
            <Routes>
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/projects" element={<div></div>} />
                <Route path="/messages" element={<div></div>} />
                <Route path="/settings" element={<div></div>} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Content>
                {DashboardComponent && <DashboardComponent />}
            </Content>

            <Footer>
                <p>Contact Us: contact@apexnode.com</p>
            </Footer>
        </Container>
    );
}

export default DashboardLayout;
