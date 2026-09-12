import Project from '../../Components/Project/Project.jsx';
import './PersonalProjects.css';

function PersonalProjects({ projects }) {
    const projectsArray = [];

    if(projects === undefined || projects.length === 0) {
        return (
            []  
        );
    }

    for (let i = 0; i < projects.length; i++) {
        if(!projects[i].disabled) {
            projectsArray.push(
                <div className='project' key={i}>
                    <Project
                        title={projects[i].title}
                        imgUrl={projects[i].imgUrl}
                        skills={projects[i].skills}
                        liveLink={projects[i].liveLink}
                        disabled={projects[i].disabled}
                        githubLink={projects[i].githubLink}
                        description={projects[i].description}
                    />
                </div>
            );
        }
    }

    return (
        <div className="personal-projects-container">
            <div className='projects-title'>
                Personal Projects
            </div>
            <div className='projects'>
                {projectsArray}
            </div>
        </div>
    );
}

export default PersonalProjects;