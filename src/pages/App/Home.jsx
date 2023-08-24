import React from 'react';
import {Button, Grid, Paper, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Home = ({setSelectedTab}) => {
    const username = 'User123'; // Change this to the user's actual username
    const navigate = useNavigate();

    const handleViewProjects = () => {
        setSelectedTab(1); // Update the selected tab to "Projects"
        navigate('/ApexNode-public/dashboard/projects');
    };

    const handleViewMessages = () => {
        setSelectedTab(2); // Update the selected tab to "Messages"
        navigate('/ApexNode-public/dashboard/messages');
    };

    const handleLearnMore = () => {
        setSelectedTab(0); // Update the selected tab to "Home"
        navigate('/ApexNode-public/dashboard/home');
    };

    return (
        <div style={{flexGrow: 1, padding: '20px', marginTop: '80px'}}>
            <Typography variant="h3" align="center" gutterBottom>
                Welcome, {username}!
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3}
                           sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
                        <Typography variant="h6" gutterBottom>
                            Projects
                        </Typography>
                        <Typography variant="h4">5</Typography>
                        <Button onClick={handleViewProjects} variant="outlined" color="primary"
                                sx={{marginTop: 'auto'}}>
                            View Projects
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3}
                           sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
                        <Typography variant="h6" gutterBottom>
                            Messages
                        </Typography>
                        <Typography variant="h4">10</Typography>
                        <Button onClick={handleViewMessages} variant="outlined" color="primary"
                                sx={{marginTop: 'auto'}}>
                            View Messages
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3}
                           sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
                        <Typography variant="h6" gutterBottom>
                            General Info
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, est vel tincidunt
                            tincidunt, sem ex interdum eros.
                        </Typography>
                        <Button onClick={handleLearnMore} variant="outlined" color="primary" sx={{marginTop: 'auto'}}>
                            Learn More
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
