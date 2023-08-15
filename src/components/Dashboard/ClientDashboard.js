import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import {AppBar, Button, Card, CardContent, Container, Divider, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import { Content } from './styles';
import ProjectCard from "../ProjectCard";

const ClientDashboard = () => {
    const { userRole } = useAuth();

    const handleCreateProject = () => {
        // Implement logic to create a new project
    };

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Container>
            {userRole === 'client' && (
                <Content>
                    <div>
                        <AppBar position="static" sx={{ marginBottom: "1rem"}}>
                            <Toolbar sx={{ justifyContent: 'flex-end' }}>
                                <Tabs
                                    value={selectedTab}
                                    onChange={handleTabChange}
                                    textColor="inherit"
                                    indicatorColor="primary"
                                    variant="scrollable"
                                    scrollButtons="off"
                                    TabIndicatorProps={{
                                        style: { display: 'none' },
                                    }}
                                >
                                    <Tab
                                        label="Projects"
                                        sx={{
                                            fontSize: '1.1rem',
                                        }}
                                    />
                                    <Tab
                                        label="Messages"
                                        sx={{
                                            fontSize: '1.1rem',
                                        }}
                                    />
                                    <Tab
                                        label="Settings"
                                        sx={{
                                            fontSize: '1.1rem',
                                        }}
                                    />
                                </Tabs>
                            </Toolbar>
                        </AppBar>

                        {selectedTab === 0 && (
                            <div>
                                {/* Content for "Projects" tab */}
                                <Typography variant="h4">Projects</Typography>
                                <Divider sx={{ my: 2 }} />
                                <Button variant="outlined" color="primary" onClick={handleCreateProject}>
                                    Create New Project
                                </Button>

                                {/* Display projects and their details here */}
                                <ProjectCard/>
                            </div>
                        )}

                        {selectedTab === 1 && (
                            <div>
                                {/* Content for "Messages" tab */}
                                <Typography variant="h4">Messages</Typography>
                                <Divider sx={{ my: 2 }} />

                            </div>
                        )}

                        {selectedTab === 2 && (
                            <div>
                                {/* Content for "Settings" tab */}
                                <Typography variant="h4">Settings</Typography>
                                <Divider sx={{ my: 2 }} />

                            </div>
                        )}
                    </div>
                </Content>
            )}
        </Container>
    );
};

export default ClientDashboard;
