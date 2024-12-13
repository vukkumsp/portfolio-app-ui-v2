import ButtonsHolder1 from '../../components/ButtonsHolder1/ButtonsHolder1.jsx';
import Heading from '../../components/Heading/Heading.jsx';
import SkillCardsHolder from '../../components/SkillCardsHolder/SkillCardsHolder.jsx';
import './RightColumn.css';

function RightColumn() {
    const allSkills = [
        { value: "Javascript", iconFile: "javascript.png" },
        { value: "Angular", iconFile: "angular.png" },
        { value: "React", iconFile: "react.png" },
        { value: "ElectronJs", iconFile: "electronjs.png" },
        { value: "Java 11", iconFile: "java.png" },
        { value: "Spring", iconFile: "spring.png" },
        { value: "NodeJs", iconFile: "nodejs.png" },
        { value: "Docker", iconFile: "docker.png" },
        { value: "Solidity", iconFile: "solidity.png" },
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