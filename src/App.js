import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Skills from './components/Skills/Skills.jsx'
import Experience from "./components/Experience/Experience.jsx";
import Contact from "./components/Contact/Contact.jsx";


function App() {
  return (
    <div className="App">
      <main id='home' className="home_container">
        <Navbar/>
        <Home/>
      </main>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
