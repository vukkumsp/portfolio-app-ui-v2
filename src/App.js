import './App.css';
import Home from './layout/Home/Home.jsx';
import PersonalProjects from './layout/PersonalProjects/PersonalProjects.jsx';

function App() {
  return (
    <div className='background'>
      <div className='page-container'>
        <Home />
        <PersonalProjects />
      </div>
    </div>
    // <div className="container">
    //   <Header className="header-section"/>
    //   <Profile className="profile-section"/>
    //   <RightSection className="right-section"/>
    // </div>
  );
}

export default App;
