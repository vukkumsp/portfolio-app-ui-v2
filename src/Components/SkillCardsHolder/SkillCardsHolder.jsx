import SkillCard from '../SkillCard/SkillCard';
import './SkillCardsHolder.css';


function SkillCardsHolder() {
    return (
        <div className='skill-cards'>
            <SkillCard title="Javascript" logoPath="./assets/icons/javascript.png" />
            <SkillCard title="Angular" logoPath="./assets/icons/angular.png" />
            <SkillCard title="React" logoPath="./assets/icons/react.png" />
            <SkillCard title="Java 11" logoPath="./assets/icons/java.png" />
            <SkillCard title="Spring" logoPath="./assets/icons/spring.png" />
            <SkillCard title="NodeJs" logoPath="./assets/icons/nodejs.png" />
            <SkillCard title="Docker" logoPath="./assets/icons/docker.png" />
            <SkillCard title="AWS" logoPath="./assets/icons/aws.png" />
            <SkillCard title="Solidity" logoPath="./assets/icons/solidity.png" />
        </div>
    );
}

export default SkillCardsHolder;