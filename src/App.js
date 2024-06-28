
import './App.css';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import SwiperComponent from './components/SwiperComponent';
import { slides, projects} from './components/data';

function App() {
 
  return (
    <div className="App bg-[#090909] text-white">
      <div className='max-w-7xl mx-auto'>

      <Navbar/>
      <Hero/>
      <SwiperComponent items={slides}/>
      <Projects/>
      <SwiperComponent items={projects}/>
      <About/>
      <Experience/>
      <Skills/>
      </div>
    </div>
  );
}

export default App;
