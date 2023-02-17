import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import About from "./Components/About";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Cards/>
        <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
