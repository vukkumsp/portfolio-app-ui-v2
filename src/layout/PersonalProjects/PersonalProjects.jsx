import Project from '../../Components/Project/Project.jsx';
import './PersonalProjects.css';

function PersonalProjects() {
    const expensesTrackerSkills = [
        { value: "ReactNative", iconFile: "reactnative.png" },
        { value: "React", iconFile: "react.png" },
        { value: "Expo", iconFile: "expo.png" }
    ];

    const pollingBoothSkills = [
        { value: "Javascript", iconFile: "javascript.png" },
        { value: "Angular 18", iconFile: "angular.png" },
        { value: "Solidity", iconFile: "solidity.png" }
    ];
    const lesSkills = [
        { value: "Angular", iconFile: "angular.png" },
        { value: "ElectronJs", iconFile: "electronjs.png" },
        { value: "NodeJs", iconFile: "nodejs.png" }
    ]
    return (
        <div className="personal-projects-container">
            <div className='divider-band'>
                -
            </div>
            <div className='projects-title'>
                Personal Projects
            </div>

            <div className='projects'>
                <div className='project'>
                    <Project
                        title='Xpense Tracker'
                        imgUrl='https://raw.githubusercontent.com/vukkumsp/expenses-tracker/refs/heads/master/screenshots/237shots_so.png'
                        skills={expensesTrackerSkills}
                        liveLink='#'
                        disabled='true'
                        githubLink='https://github.com/vukkumsp/expenses-tracker'
                    />
                </div>
                <div className='project'>
                    <Project
                        title='Polling Booth'
                        imgUrl='https://raw.githubusercontent.com/vukkumsp/polling-booth/refs/heads/main/src/assets/screenshots/home-desktop-performing-transaction.png'
                        skills={pollingBoothSkills}
                        liveLink='https://vukkumsp.github.io/polling-booth/'
                        githubLink='https://github.com/vukkumsp/polling-booth'
                    />
                </div>
                <div className='project'>
                    <Project
                        title='Local Entertainment System'
                        imgUrl='https://user-images.githubusercontent.com/9028439/190990778-a27803b5-31e9-45ab-bae5-69f1f8167155.png'
                        skills={lesSkills}
                        liveLink='#'
                        disabled='true'
                        githubLink='https://github.com/vukkumsp/local-entertainment-system'
                    />
                </div>
            </div>
        </div>
    );
}

export default PersonalProjects;