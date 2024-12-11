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
            <div className='projects-title'>
                Personal Projects
            </div>
            <div className='projects'>
                <Project
                    title='Polling Booth'
                    imgUrl='https://raw.githubusercontent.com/vukkumsp/polling-booth/refs/heads/main/src/assets/screenshots/home-desktop-performing-transaction.png'
                    skills={pollingBoothSkills}
                    liveLink='https://vukkumsp.github.io/polling-booth/'
                    githubLink='https://github.com/vukkumsp/polling-booth'
                     />
                <Project
                    title='Local Entertainment System'
                    imgUrl='https://user-images.githubusercontent.com/9028439/190990778-a27803b5-31e9-45ab-bae5-69f1f8167155.png'
                    skills={lesSkills}
                    liveLink='#'
                    githubLink='https://github.com/vukkumsp/local-entertainment-system'
                     />
            </div>
        </div>
    );
}

export default PersonalProjects;