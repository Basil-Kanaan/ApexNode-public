import React, {useState} from 'react';
import {Card, CardContent, Divider, List, ListItemButton, ListItemText, Typography} from '@mui/material';

const Settings = () => {
    const [selectedSetting, setSelectedSetting] = useState('account');

    const handleSettingClick = (setting) => {
        setSelectedSetting(setting);
    };

    const renderSelectedContent = () => {
        switch (selectedSetting) {
            case 'account':
                return (
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Account Settings
                        </Typography>
                        {/* Add your account settings form or content here */}
                    </CardContent>
                );
            case 'project':
                return (
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Project Settings
                        </Typography>
                        {/* Add your project settings form or content here */}
                    </CardContent>
                );
            case 'preferences':
                return (
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Preferences
                        </Typography>
                        {/* Add your preferences form or content here */}
                    </CardContent>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{display: 'flex'}}>
            {/* Sidebar for different settings sections */}
            <div style={{width: '30%', borderRight: '1px solid #ccc', padding: '1rem'}}>
                <Typography variant="h5">Settings</Typography>
                <Divider sx={{my: 1}}/>
                <List>
                    <ListItemButton
                        onClick={() => handleSettingClick('account')}>
                        <ListItemText primary="Account Settings"/>
                    </ListItemButton>
                    <ListItemButton onClick={() => handleSettingClick('project')}>
                        <ListItemText primary="Project Settings"/>
                    </ListItemButton>
                    <ListItemButton onClick={() => handleSettingClick('preferences')}>
                        <ListItemText primary="Preferences"/>
                    </ListItemButton>
                    {/* Add more settings sections here */}
                </List>
            </div>

            {/* Content for selected settings section */}
            <div style={{flex: 1, padding: '1rem'}}>
                <Card
                    style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    {renderSelectedContent()}
                </Card>
            </div>
        </div>
    );
};

export default Settings;
