import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './layout/Home/Home.jsx';
import PersonalProjects from './layout/PersonalProjects/PersonalProjects.jsx';
import Privacy from './layout/PrivacyPage/Privacy.jsx';

function App() {
  return (
    <Router>

    
    <div className='background'>
      <div className='page-container'>
        <Routes>
          <Route path="/" element={
              <>
                <Home />
                <PersonalProjects />
              </>
          } />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
