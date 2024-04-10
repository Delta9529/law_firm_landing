import './App.css';
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection';
import Intro from './Components/Intro';


function App() {
  return (
    <div className='main'>
      <div className="Header">
        <Navbar />
        <HeroSection />
      </div>
      <div className='background-content'>
          <div className='body-wrapper'>
            <Intro />
          </div>
      </div>
    </div>
  );
}

export default App;
