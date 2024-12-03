import './Heading.css';

function Heading() {
    return (
    <div className='heading'>
        <p className='location'>
            📍India
        </p>
        <div className='prefix'>
            I am <span className='name'>Sai Prakash</span>,
        </div>
        <div>
            a <span className="job-role">Frontend Developer</span>
        </div>
    </div>
    );
}

export default Heading;