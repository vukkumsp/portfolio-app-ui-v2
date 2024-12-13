import LeftColumn from "../LeftColumn/LeftColumn.jsx";
import RightColumn from "../RightColumn/RightColumn.jsx";

import './Home.css';

function Home(){
    return (
        <div className="home">
            <LeftColumn />
            <RightColumn />
        </div>
    );
}

export default Home;