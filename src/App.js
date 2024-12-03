import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import RightSection from './Components/RightSection';

function App() {
  return (
    <div className="container">
      <Header className="header-section"/>
      <Profile className="profile-section"/>
      <RightSection className="right-section"/>
    </div>
  );
}

export default App;
