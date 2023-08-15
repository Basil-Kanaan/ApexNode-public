import { styled } from '@mui/system';

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
});

export const Header = styled('header')({
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '16px',
    textAlign: 'center',
});

export const Content = styled('div')({
    flexGrow: 1,
    padding: '16px',
});

export const Footer = styled('footer')({
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '16px',
    textAlign: 'center',
});
