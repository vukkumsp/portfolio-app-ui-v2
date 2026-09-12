import { useState, useEffect } from 'react';
import './Heading.css';

function Heading() {
    const [content, setContent] = useState({
        name: 'Sai Prakash',
        role: 'Full Stack Developer',
        location: {
            city: 'Hyderabad',
            country: 'India',
            link: 'https://maps.app.goo.gl/VKBytf8V1HwqxLGa9'
        }
    });

    useEffect(()=>{
        fetch('/data/content.json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data.role);
          setContent(data);
        })
        .catch((error) => console.error('Error fetching JSON:', error));
    }, []);

    return (
    <div className='heading'>
        <p className='location'>
            <a href={content.location.link} target="_blank" rel="noopener noreferrer">
                📍{content.location.city}, {content.location.country}
            </a>
        </p>
        <div className='prefix'>
            <span className='name'>{content.name || 'Sai Prakash'}</span>
        </div>
        <div>
            <span className="job-role">{content.role || 'Full Stack Developer'}</span>
            
        </div>
    </div>
    );
}

export default Heading;