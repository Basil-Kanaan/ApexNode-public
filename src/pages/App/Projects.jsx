import React, {useState} from 'react';
import {Button, Divider, Typography} from '@mui/material';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]); // State to store projects

    const handleCreateProject = () => {
        // Create a new project object with some example data
        const newProject = {
            id: projects.length + 1, // Incremental ID
            title: `New Project ${projects.length + 1}`,
            description: 'This is a new project description.',
        };

        // Update the projects state with the new project
        setProjects([...projects, newProject]);
    };

    const handleDeleteProject = (projectId) => {
        setProjects(projects.filter(project => project.id !== projectId));
    };

    return (
        <div>
            {/* Content for "Projects" tab */}
            <Typography variant="h4">Projects</Typography>
            <Divider sx={{my: 2}}/>
            <Button variant="outlined" color="primary" onClick={handleCreateProject}>
                Create New Project
            </Button>

            {/* Display projects and their details here */}
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    onDelete={() => handleDeleteProject(project.id)}
                    title={project.title}
                    progress={project.progress}
                    developers={project.developers}
                    description={project.description}
                />
            ))}
        </div>
    );
};

export default Projects;
