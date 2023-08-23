import React from 'react';
import {Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Typography variant="h1" style={{marginBottom: '1rem'}}>
                404 - Page Not Found
            </Typography>
            <Typography variant="h6" style={{marginBottom: '2rem', color: '#777'}}>
                The page you are looking for does not exist.
            </Typography>
            <Button variant="contained" color="primary" onClick={goBack}>
                Go Back
            </Button>
        </div>
    );
};

export default NotFound;
