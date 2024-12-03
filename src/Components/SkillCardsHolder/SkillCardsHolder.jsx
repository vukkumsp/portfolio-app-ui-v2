import SkillCard from '../SkillCard/SkillCard';
import './SkillCardsHolder.css';


function SkillCardsHolder() {
    return (
        <div className='skill-cards'>
            <SkillCard title="Angular" logoPath="./assets/icons/angular.png" />
            <SkillCard title="React" logoPath="./assets/icons/react.png" />
            <SkillCard title="Java 11" logoPath="./assets/icons/java.png" />
        </div>
    );
}

export default SkillCardsHolder;