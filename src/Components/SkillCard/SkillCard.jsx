import './SkillCard.css';

function SkillCard({logoPath, title}){
    return (
        <div className="skill-card">
            <img className="skill-logo" src={logoPath}/>
            <span className='skill-name'>{title}</span>
        </div>
    );
}

export default SkillCard;