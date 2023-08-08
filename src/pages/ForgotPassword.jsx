import React from 'react';
import {Button, Container, Link, Paper, TextField, Typography} from '@mui/material';
import {LockOutlined} from '@mui/icons-material';
import {Link as RouterLink} from 'react-router-dom';

function ForgotPassword() {
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
                <LockOutlined
                    sx={{
                        fontSize: '3rem',
                        mb: 2,
                        color: theme => theme.palette.primary.main,
                    }}
                />
                <Typography variant="h5" component="h1">
                    Forgot Password
                </Typography>
                <Typography variant="body2" sx={{mt: 2, color: 'text.primary'}}>
                    Enter your email address to reset your password. A reset link will be sent to your email.
                </Typography>
                <TextField
                    label="Email"
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
                    Reset Password
                </Button>
                <Typography variant="body2" sx={{mt: 2}}>
                    Remember your password?{' '}
                    <Link component={RouterLink} to="/ApexNode/login" color="primary">
                        Log In
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
}

export default ForgotPassword;
