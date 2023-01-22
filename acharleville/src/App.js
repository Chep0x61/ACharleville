import "./App.css"
import Header from "./Components/Header"
import Avatar from "./Components/Avatar";
import Button from "./Components/Button";

const App = () => {
  return (
    <div>
      <Header />
      <Avatar />
      <div>
        Salut je suis Alizée et je suis
        <div class="text-xl font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">SoundDesigneuse</div>
        <Button txt="Un coup d'oeil à mon CV"/>
      </div>
    </div>
  );
}

export default App;
