import React, {useState} from 'react';
import {AppBar, Tab, Tabs, Toolbar} from '@mui/material';
import {Folder, Message, Settings} from '@mui/icons-material'; // Import icons

const DBNavBar = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        {label: 'Projects', icon: <Folder/>},
        {label: 'Messages', icon: <Message/>},
        {label: 'Settings', icon: <Settings/>},
    ];

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
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
