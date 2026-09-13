import Heading from './Heading/Heading.jsx';
import CustomButton from '../../../../Components/CustomButton/CustomButton.jsx';
import SkillCardsHolder from '../../../../Components/SkillCardsHolder/SkillCardsHolder.jsx';
import ProfessionalSummary from './ProfessionalSummary/ProfessionalSummary.jsx';

import './RightColumn.css';

function RightColumn({ content }) {

    return (
        <div className="right-column">
            <Heading />
            <SkillCardsHolder skills={content.skills || []} />
            <ProfessionalSummary summary={content.professionalSummary} />
            <div className='buttons-holder'>
                <CustomButton value='LinkedIn' 
                    type='link' config={content.linkedInConfig} />
                <CustomButton value="Download CV" 
                    type='downloader' 
                    config={content.downloadResumeConfig}/>
                <CustomButton value="Github"
                    type='link' config={content.githubConfig} />
                <CustomButton value="Instagram"
                    type='link' config={content.instagramConfig} />
            </div>
        </div>
    );
}

export default RightColumn;