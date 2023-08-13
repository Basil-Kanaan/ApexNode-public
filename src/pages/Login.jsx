import React, { useState } from 'react';
import { Button, Container, Link, Paper, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link as RouterLink} from 'react-router-dom';

import { useAuth } from '../AuthContext';

function Login() {
    const { login } = useAuth(); // Get the login function from AuthContext
    // const history = useHistory(); // Import useHistory from react-router-dom

    const [loginError, setLoginError] = useState(false);

    // Simulate a successful login and navigate to the dashboard
    const handleLogin = () => {
        // Replace with actual API call for authentication
        // Example: make an API call with user credentials, get user role and token
        const userRole = 'admin'; // Replace with the user's role obtained from the API

        if (userRole) {
            // Call the login function from AuthContext
            login(userRole);

            // Navigate to the dashboard based on user role
            // (Note: Use proper route based on your route structure)
            // history.push('/ApexNode/dashboard'); // Navigate to the dashboard
        } else {
            // Set login error state
            setLoginError(true);
        }
    };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    width: '400px',
                    textAlign: 'center',
                    boxShadow: theme => `0px 2px 4px ${theme.palette.grey[300]}`,
                }}
            >
                <AccountCircle
                    sx={{
                        fontSize: '3rem',
                        mb: 2,
                        color: theme => theme.palette.primary.main,
                    }}
                />
                <Typography variant="h5" component="h1">
                    Log in to ApexNode
                </Typography>
                <TextField
                    label="Email"
                    fullWidth
                    sx={{
                        mb: 2,
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    sx={{
                        mb: 2,
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        mt: 2,
                    }}
                    onClick={handleLogin} // Call the handleLogin function
                >
                    Log In
                </Button>
                {loginError && (
                    <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                        Login failed. Please check your credentials.
                    </Typography>
                )}
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Don't have an account?{' '}
                    <Link component={RouterLink} to="/ApexNode/signup" color="primary">
                        Sign Up
                    </Link>
                </Typography>
                <Typography variant="body2">
                    <Link component={RouterLink} to="/ApexNode/forgot-password" color="textSecondary">
                        Forgot Password?
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
}

export default Login;
