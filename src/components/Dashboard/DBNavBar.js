import React, { useState }  from 'react';
import {AppBar, Tab, Tabs, Toolbar} from "@mui/material";

const DBNavBar = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <AppBar position="static" sx={{ background: "linear-gradient(to top, #29293d, #6e1423);", marginBottom: "1rem"}}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="inherit"
                    indicatorColor="primary"
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
    );
};

export default DBNavBar;
