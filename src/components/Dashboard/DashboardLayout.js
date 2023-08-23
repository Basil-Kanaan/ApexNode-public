import React, {useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {useAuth} from '../../AuthContext';
import {Container, Content, Footer, Header, Page} from './styles';
import DBNavBar from './DBNavBar';
import Home from '../../pages/App/Home';
import NotFound from '../../pages/NotFound';
import Projects from '../../pages/App/Projects';
import Settings from '../../pages/App/Settings';
import Messages from '../../pages/App/Messages';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function DashboardLayout() {
    const {userRole} = useAuth();
    const [selectedTab, setSelectedTab] = useState(0); // Define the selected tab state here

    return (
        <Container>
            <Header>
                <h1>{capitalizeFirstLetter(userRole)} Dashboard</h1>
            </Header>

            <DBNavBar selectedTab={selectedTab}
                      setSelectedTab={setSelectedTab}/> {/* Pass the selected tab state and updater function */}

            <Content>
                <Page>
                    <Routes>
                        <Route path="/" element={<Navigate to="home"/>}/>
                        <Route path="/home" element={<Home setSelectedTab={setSelectedTab}/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/messages" element={<Messages/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Page>
            </Content>

            <Footer>
                <p>Contact Us: contact@apexnode.com</p>
            </Footer>
        </Container>
    );
}

export default DashboardLayout;
