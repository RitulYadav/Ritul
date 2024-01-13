import Navbar from "./components/Navbar/navbar";
import Intro from './components/Intro/intro';
import Skill from './components/Skill/skill';
import Works from './components/Works/work';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
