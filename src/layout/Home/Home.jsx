import LeftColumn from "../LeftColumn/LeftColumn";
import RightColumn from "../RightColumn/RightColumn";

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