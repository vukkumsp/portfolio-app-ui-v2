import { Link } from "react-router-dom";
import LeftColumn from "../LeftColumn/LeftColumn.jsx";
import RightColumn from "../RightColumn/RightColumn.jsx";

import './Home.css';

function Home(){
    return (
        <div className="home">
            <LeftColumn />
            <RightColumn />
            {/* <Link to="/privacy" className="privacy-link">
                Privacy Policy
            </Link> */}
        </div>
    );
}

export default Home;