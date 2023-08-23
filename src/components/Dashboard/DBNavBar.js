import React, {useEffect, useMemo, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {AppBar, Tab, Tabs, Toolbar} from '@mui/material';
import {Folder, Home, Message, Settings} from '@mui/icons-material'; // Import icons

const DBNavBar = ({setSelectedTab}) => {
    const [selectedTab, setSelectedTabState] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = useMemo(() => [
        {label: 'Home', icon: <Home/>},
        {label: 'Projects', icon: <Folder/>},
        {label: 'Messages', icon: <Message/>},
        {label: 'Settings', icon: <Settings/>},
    ], []); // Memoize the tabs array

    useEffect(() => {
        const tabName = location.pathname.split('/').pop();
        const tabIndex = tabs.findIndex(tab => tab.label.toLowerCase() === tabName);
        if (tabIndex !== -1) {
            setSelectedTabState(tabIndex);
        }
    }, [location.pathname, tabs]);

    const handleTabChange = (event, newValue) => {
        setSelectedTabState(newValue);
        navigate('/ApexNode/dashboard/' + tabs[newValue].label.toLowerCase());
    };

    useEffect(() => {
        setSelectedTab(selectedTab);
    }, [selectedTab, setSelectedTab]);

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
