import React, {useState} from 'react';
import {Button, Container, Link, Paper, TextField, Typography} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import {Link as RouterLink, useNavigate} from 'react-router-dom'; // Use useNavigate instead of useHistory
import {useAuth} from '../AuthContext';

function Login() {
    const {login} = useAuth();
    const navigate = useNavigate(); // Use useNavigate from react-router-dom

    const [loginError, setLoginError] = useState(false);

    const handleLogin = () => {
        const userRole = 'client';

        if (userRole) {
            login(userRole);
            navigate('/ApexNode-public/dashboard'); // Navigate to the dashboard using navigate
        } else {
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
                    <Typography variant="body2" color="error" sx={{mt: 2}}>
                        Login failed. Please check your credentials.
                    </Typography>
                )}
                <Typography variant="body2" sx={{mt: 2}}>
                    Don't have an account?{' '}
                    <Link component={RouterLink} to="/ApexNode-public/signup" color="primary">
                        Sign Up
                    </Link>
                </Typography>
                <Typography variant="body2">
                    <Link component={RouterLink} to="/ApexNode-public/forgot-password" color="textSecondary">
                        Forgot Password?
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
}

export default Login;
