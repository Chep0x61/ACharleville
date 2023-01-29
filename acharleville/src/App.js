import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import About from "./Components/About";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Cards/>
    </div>
  );
}

export default App;
