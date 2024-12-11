import CustomButton from '../CustomButton/CustomButton';
import SkillCard from '../SkillCard/SkillCard';
import SkillCardsHolder from '../SkillCardsHolder/SkillCardsHolder';
import './Project.css';

function Project({
    title, description = '', imgUrl,
    liveLink, githubLink, skills = {} }) {
    let liveConfig = {
        link: liveLink,
        emoji: '🔴'
    };
    let githubConfig = {
        link: githubLink,
        icon: './assets/icons/github.svg'
    }
    return (
        <div className='project-container'>
            <div className='project-title'>{title}</div>
            <img className='project-screenshot' src={imgUrl} />
            <SkillCardsHolder skills={skills} />
            <div className='project-buttons-container'>
                <CustomButton value='Live' type='link' config={liveConfig} />
                <CustomButton value='Github' type='link' config={githubConfig} />
            </div>
        </div>
    );
}

export default Project;