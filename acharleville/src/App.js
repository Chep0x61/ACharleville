import "./App.css"
import Header from "./Components/Header"
import Avatar from "./Components/Avatar";
import Button from "./Components/Button";
import Card from "./Components/Card"

const App = () => {
  return (
    <div>
      <Header />
      <Avatar />
      <div>
        Salut je suis Alizée et je suis
        <div class="text-xl font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">SoundDesigneuse</div>
        <Button txt="Un coup d'oeil à mon CV"/>
        <Card w="96" title="MacNCheese" desc="description" pic="https://m.media-amazon.com/images/M/MV5BMDRhYzUwZGQtMTRkMi00NzMwLWE0ZjMtMzRiYzFjZWQwMzIxXkEyXkFqcGdeQXVyMjEzNTA4MTM@._V1_.jpg"/>
      </div>
    </div>
  );
}

export default App;
