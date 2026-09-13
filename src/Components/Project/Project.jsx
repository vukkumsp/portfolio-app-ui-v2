import CustomButton from '../../Components/CustomButton/CustomButton.jsx';
import SkillCardsHolder from '../../Components/SkillCardsHolder/SkillCardsHolder.jsx';
import './Project.css';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Project({
    title, description = '', imgUrl,
    liveLink, githubLink, skills = {}, disabled = 'false' }) {
    let liveConfig = {
        href: liveLink,
        emoji: '🔴',
        disabled: liveLink === '#' ? 'true' : 'false',
    };
    let githubConfig = {
        href: githubLink,
        icon: './assets/icons/github.svg'
    }
    return (
        <fieldset className='project-container'>
            <legend className='project-title'>{title}</legend>
            <Zoom>
                <img className='project-screenshot' src={imgUrl} />
            </Zoom>

            <SkillCardsHolder skills={skills} />
            <p className='project-description'>{description}</p>

            <div className='project-buttons-container'>
                <CustomButton value='Live' type='link' config={liveConfig} />
                <CustomButton value='Github' type='link' config={githubConfig} />
            </div>
        </fieldset>
    );
}

export default Project;