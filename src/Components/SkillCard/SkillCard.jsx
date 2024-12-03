import './SkillCard.css';

function SkillCard({logoPath, title}){
    return (
        <div className="skill-card">
            <img className="skill-logo" src={logoPath}/>
            <p className='skill-name'>{title}</p>
        </div>
    );
}

export default SkillCard;