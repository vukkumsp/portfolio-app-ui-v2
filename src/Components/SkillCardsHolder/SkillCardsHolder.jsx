import SkillCard from '../SkillCard/SkillCard.jsx';
import './SkillCardsHolder.css';

/* 
    logoPathDir="./assets/icons/"
    skills = [
    {
        value: "Javascript",
        iconFile: "javascript.png"
    }
]
*/
function SkillCardsHolder({skills}) {
    const logoPathDir="./assets/icons/";
    const skillsArray = [];

    for (let i = 0; i < skills.length; i++) {
        skillsArray.push(
            <SkillCard title={skills[i].value} logoPath={logoPathDir+skills[i].iconFile} />
        );
    }

    return (
        <div className='skill-cards'>
            {skillsArray}
            {/* <SkillCard title="Javascript" logoPath="./assets/icons/javascript.png" />
            <SkillCard title="Angular" logoPath="./assets/icons/angular.png" />
            <SkillCard title="React" logoPath="./assets/icons/react.png" />
            <SkillCard title="Java 11" logoPath="./assets/icons/java.png" />
            <SkillCard title="Spring" logoPath="./assets/icons/spring.png" />
            <SkillCard title="NodeJs" logoPath="./assets/icons/nodejs.png" />
            <SkillCard title="Docker" logoPath="./assets/icons/docker.png" />
            <SkillCard title="AWS" logoPath="./assets/icons/aws.png" />
            <SkillCard title="Solidity" logoPath="./assets/icons/solidity.png" /> */}
        </div>
    );
}

export default SkillCardsHolder;