import "./App.css"
import Header from "./Components/Header"
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import About from "./Components/About";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Cards/>
    </div>
  );
}

export default App;
