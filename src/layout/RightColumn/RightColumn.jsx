import ButtonsHolder1 from '../../Components/ButtonsHolder1/ButtonsHolder1.jsx';
import Heading from '../../Components/Heading/Heading.jsx';
import SkillCardsHolder from '../../Components/SkillCardsHolder/SkillCardsHolder.jsx';
import './RightColumn.css';

function RightColumn() {
    const allSkills = [
        // { value: "Javascript", iconFile: "javascript.png" },
        // { value: "Angular 21", iconFile: "angular.png" },
        // { value: "React", iconFile: "react.png" },
        // { value: "ReactNative", iconFile: "reactnative.png" },
        // { value: "Expo", iconFile: "expo.png" },
        // { value: "ElectronJs", iconFile: "electronjs.png" },
        { value: "Java 21", iconFile: "java.png" },
        { value: "Spring", iconFile: "spring.png" },
        { value: "NodeJs", iconFile: "nodejs.png" },
        { value: "Docker", iconFile: "docker.png" },
        { value: "AWS", iconFile: "aws.png" },
        // { value: "Solidity", iconFile: "solidity.png" },
    ];

    return (
        <div className="right-column">
            <Heading />
            <ButtonsHolder1 />
            <SkillCardsHolder skills={allSkills} />
        </div>
    );
}

export default RightColumn;