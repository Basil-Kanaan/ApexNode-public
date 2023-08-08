import React from 'react';
import {Button, Container, Link, Paper, TextField, Typography} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import {Link as RouterLink} from 'react-router-dom'; // Import Link as RouterLink

function SignUp() {
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
                    Create an Account
                </Typography>
                <TextField
                    label="Full Name"
                    fullWidth
                    sx={{
                        mb: 2,
                    }}
                />
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
                <TextField
                    label="Confirm Password"
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
                    Sign Up
                </Button>
                <Typography variant="body2" sx={{mt: 2}}>
                    Already have an account?{' '}
                    <Link component={RouterLink} to="/ApexNode/login" color="primary">
                        Log In
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
}

export default SignUp;
