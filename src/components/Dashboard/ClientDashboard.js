import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { Button, Divider, Typography} from "@mui/material";
import { Content } from './styles';
import ProjectCard from "../ProjectCard";
import DBNavBar from "./DBNavBar";

const ClientDashboard = () => {
    const { userRole } = useAuth();

    const handleCreateProject = () => {
        // Implement logic to create a new project
    };

    const [selectedTab] = useState(0);

    return (
        <div>
            {userRole === 'client' && (
                <Content>
                    <div>
                        <DBNavBar/>

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
        </div>
    );
};

export default ClientDashboard;
