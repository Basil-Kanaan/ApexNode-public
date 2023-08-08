import React from 'react';
import { Container, Paper, Typography, TextField, Button, Link } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function Login() {
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
                >
                    Log In
                </Button>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Don't have an account?{' '}
                    <Link component={RouterLink} to="/signup" color="primary">
                        Sign Up
                    </Link>
                </Typography>
                <Typography variant="body2">
                    <Link component={RouterLink} to="/forgot-password" color="textSecondary">
                        Forgot Password?
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
}

export default Login;
