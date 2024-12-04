import { useState } from 'react';
import './Heading.css';
import { useEffect } from 'react';
// import role from '/data/content.json';


function Heading() {
    const [role, setRole] = useState(null);
    useEffect(()=>{
        fetch('/data/content.json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data.role);
          setRole(data.role);
        })
        .catch((error) => console.error('Error fetching JSON:', error));
    });

    return (
    <div className='heading'>
        <p className='location'>
            📍India
        </p>
        <div className='prefix'>
            I am <span className='name'>Sai Prakash</span>,
        </div>
        <div>
            a <span className="job-role">{role}</span>
            
        </div>
    </div>
    );
}

export default Heading;