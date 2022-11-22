import logo from "./logo.svg";
import "./App.css";
import { useStateContext } from "./context/Counter";
import Multiplier from "./Components/Multiplier";
import Subtraction from "./Components/Subtraction";
import Divider from "./Components/Divider";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <div class="row">
        <h1>Off-Screen MERN Task:</h1>
        <Multiplier />
        <Subtraction />
        <Divider />
        <Counter />
      </div>
    </div>
  );
}

export default App;
