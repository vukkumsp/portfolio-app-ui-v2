import DividerBand from '../../components/DividerBand/DividerBand';
import Project from '../../components/Project/Project';
import './PersonalProjects.css';

function PersonalProjects() {
    const pollingBoothSkills = [
        { value: "Javascript", iconFile: "javascript.png" },
        { value: "Angular", iconFile: "angular.png" },
        { value: "Solidity", iconFile: "solidity.png" }
    ];
    const lesSkills = [
        { value: "Angular", iconFile: "angular.png" },
        { value: "ElectronJs", iconFile: "electronjs.png" },
        { value: "NodeJs", iconFile: "nodejs.png" }
    ]
    return (
        <div className="personal-projects-container">
            <DividerBand />
            <div className='projects'>
                <Project
                    title='Polling Booth'
                    imgUrl='#' liveLink='#' githubLink='#'
                    skills={pollingBoothSkills} />
                <Project
                    title='Local Entertainment System'
                    imgUrl='#' liveLink='#' githubLink='#'
                    skills={lesSkills} />
            </div>
        </div>
    );
}

export default PersonalProjects;