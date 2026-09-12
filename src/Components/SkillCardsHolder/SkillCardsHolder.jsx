import SkillCard from './SkillCard/SkillCard.jsx';
import './SkillCardsHolder.css';

function SkillCardsHolder({skills}) {
    const logoPathDir="./assets/icons/";
    const skillsArray = [];

    for (let i = 0; i < skills.length; i++) {
        if (skills[i].present) {
            skillsArray.push(
                <SkillCard title={skills[i].value} logoPath={logoPathDir+skills[i].iconFile} />
            );
        }
    }

    return (<>
        <div className='skill-cards'>
            {skillsArray}
        </div>
    </>
        
    );
}

export default SkillCardsHolder;