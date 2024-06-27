
import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import SwiperComponent from './components/SwiperComponent';

function App() {
  return (
    <div className="App bg-black text-white">
      <Navbar/>
      <Hero/>
      <SwiperComponent/>
      <Projects/>
    </div>
  );
}

export default App;
