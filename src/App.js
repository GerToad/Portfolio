import './App.css';

import Header from './components/header/index';
import Intro from './components/intro/index';
import Skills from './components/skills/index';
import About from './components/about/index';
import Projects from './components/projects/index';
import Contact from './components/contact/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
