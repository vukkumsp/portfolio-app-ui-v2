import logo from './logo.svg';
import './App.css';
// Layout Components

// Pages
import Home from './pages/Home/Home';
import PrimarySkills from './pages/PrimarySkills/PrimarySkills';
import SecondarySkills from './pages/SecondarySkills/SecondarySkills';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home></Home>
      <PrimarySkills></PrimarySkills>
      <SecondarySkills></SecondarySkills>
    </div>
  );
}

export default App;
