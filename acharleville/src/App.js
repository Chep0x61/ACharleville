import "./App.css"
import Header from "./Components/Header"
import Button from "./Components/Button";
import Card from "./Components/Card"
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div>
        <Card w="96" title="MacNCheese" desc="description" pic="https://m.media-amazon.com/images/M/MV5BMDRhYzUwZGQtMTRkMi00NzMwLWE0ZjMtMzRiYzFjZWQwMzIxXkEyXkFqcGdeQXVyMjEzNTA4MTM@._V1_.jpg"/>
      </div>
    </div>
  );
}

export default App;
