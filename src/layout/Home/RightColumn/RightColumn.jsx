import Heading from './Heading/Heading.jsx';
import ButtonsHolder1 from './ButtonsHolder1/ButtonsHolder1.jsx';
import SkillCardsHolder from './SkillCardsHolder/SkillCardsHolder.jsx';
import ProfessionalSummary from './ProfessionalSummary/ProfessionalSummary.jsx';

import './RightColumn.css';

function RightColumn({ content }) {

    return (
        <div className="right-column">
            <Heading />
            <ButtonsHolder1 
                linkedInConfig={content.linkedInConfig} 
                downloadResumeConfig={content.downloadResumeConfig}
                githubConfig={content.githubConfig}
            />
            <SkillCardsHolder skills={content.skills || []} />
            <ProfessionalSummary summary={content.professionalSummary} />
        </div>
    );
}

export default RightColumn;