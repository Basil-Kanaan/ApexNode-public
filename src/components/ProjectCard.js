import React from 'react';
import {Card, CardContent, Container, IconButton, Menu, MenuItem, Typography} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProjectCard = ({id, title, progress, developers, description, onDelete}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteClick = () => {
        onDelete();
        handleMenuClose();
    };

    return (
        <div>
            <Container sx={{mt: 2}}>
                <Card>
                    <CardContent>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Typography variant="h6">{title}</Typography>
                            <IconButton
                                aria-controls={`project-card-menu-${id}`}
                                aria-haspopup="true"
                                onClick={handleMenuClick}
                            >
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                id={`project-card-menu-${id}`}
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
                            </Menu>
                        </div>
                        <Typography variant="body2">Progress: {progress}%</Typography>
                        <Typography variant="body2">Developers: {developers}</Typography>
                        <Typography variant="body2">{description}</Typography>
                        {/* Add more project details here */}
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default ProjectCard;
