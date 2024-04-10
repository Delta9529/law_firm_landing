import './App.css';
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection';


function App() {
  return (
    <div className='main'>
      <div className="Header">
        <Navbar />
        <HeroSection />
      </div>
      <div className='background-content'>
          <div className='body-wrapper'>
          </div>
      </div>
    </div>
  );
}

export default App;
