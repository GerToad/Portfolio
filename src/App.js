import './App.css';

import Header from './components/header/index';
import Skills from './components/skills/index';
import About from './components/about/index';
import Projects from './components/projects/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
