import './App.css';
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection';
import Intro from './Components/Intro';
import ChooseUs from './Components/Choose Us';


function App() {
  return (
    <div className='main'>
      <div className="header">
        <Navbar />
        <HeroSection />
      </div>
      <div className='background-content'>
          <div className='body-wrapper'>
            <Intro />
            <ChooseUs />
          </div>
      </div>
    </div>
  );
}

export default App;
