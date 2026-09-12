import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './layout/Home/Home.jsx';

function App() {
  return (
    <Router>

    
    <div className='background'>
      <div className='page-container'>
        <Routes>
          <Route path="/" element={
              <>
                <Home />
                {/* <PersonalProjects /> */}
              </>
          } />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
