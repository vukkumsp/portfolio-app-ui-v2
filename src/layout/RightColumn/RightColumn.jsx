import ButtonsHolder1 from '../../components/ButtonsHolder1/ButtonsHolder1';
import Heading from '../../components/Heading/Heading';
import SkillCardsHolder from '../../components/SkillCardsHolder/SkillCardsHolder';
import './RightColumn.css';

function RightColumn() {
    return (
        <div className="right-column">
            <Heading />
            <ButtonsHolder1 />
            <SkillCardsHolder />
        </div>
    );
}

export default RightColumn;