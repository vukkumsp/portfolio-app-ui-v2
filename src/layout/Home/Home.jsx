import { useState, useEffect } from 'react';
import LeftColumn from "./MainSection/LeftColumn/LeftColumn.jsx";
import RightColumn from "./MainSection/RightColumn/RightColumn.jsx";
import PersonalProjects from '../PersonalProjects/PersonalProjects.jsx';

import './Home.css';

function Home(){
    const [content, setContent] = useState({
        name: 'Sai Prakash',
        role: 'Full Stack Developer',
        location: {
            city: 'Hyderabad',
            country: 'India',
            link: 'https://maps.app.goo.gl/VKBytf8V1HwqxLGa9'
        },
        skills: [],
        professionalSummary: ''
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
        <main className="home">
            {/* Section 1 */}
            <div className="main-section" aria-label="Profile summary">
                    <LeftColumn />
                    <RightColumn content={content} />
            </div>
            
            <hr className='horizontal-line'/>

            {/* Section 2 */}
            <PersonalProjects projects={content.projects} />
        </main>
    );
}

export default Home;