import {styled} from '@mui/system';

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
});

export const Header = styled('header')({
    background: "linear-gradient(to bottom, rgba(181, 23, 51, 1) 0%, rgba(110, 20, 35, 1) 95%, rgba(88, 17, 29, 1) 100%);", /* Update the gradient colors */
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
});

export const Content = styled('div')({
    flexGrow: 1,
});

export const Footer = styled('footer')({
    backgroundColor: '#1c1c1c',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
});


export const Page = styled('div')({
    padding: "1rem",
});