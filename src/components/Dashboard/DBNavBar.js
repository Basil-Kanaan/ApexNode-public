import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {AppBar, Tab, Tabs, Toolbar} from '@mui/material';
import {Home, Folder, Message, Settings} from '@mui/icons-material'; // Import icons

const DBNavBar = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate();

    const tabs = [
        {label: 'Home', icon: <Home/>},
        {label: 'Projects', icon: <Folder/>},
        {label: 'Messages', icon: <Message/>},
        {label: 'Settings', icon: <Settings/>},
    ];

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        navigate("/ApexNode/dashboard/" + tabs[newValue].label.toLowerCase());
    };

    return (
        <AppBar
            position="static"
            sx={{
                background: 'linear-gradient(to top, #29293d, #6e1423)',
                marginBottom: '1rem',
            }}
        >
            <Toolbar sx={{justifyContent: 'flex-end'}}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="inherit"
                    indicatorColor="primary"
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            icon={tab.icon}
                            sx={{
                                fontSize: '1.1rem',
                                transition: 'transform 0.2s, color 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    color: '#FFF',
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default DBNavBar;
