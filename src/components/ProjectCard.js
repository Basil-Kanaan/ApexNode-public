import React from 'react';
import {Card, CardContent, Container, Typography} from "@mui/material";

const ProjectCard = (props) => {
    return (
        <div>
            <Container sx={{ mt: 2 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Project Title</Typography>
                        <Typography variant="body2">Progress: 40%</Typography>
                        <Typography variant="body2">Developers: Developer A, Developer B</Typography>
                        {/* Add more project details here */}
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default ProjectCard;
