import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./Components/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    //Sections
    //About
    //Projects
    //Skills
    //Github and Resume
    <div className="snap-mandatory">
      <About />
    </div>
  );
}

export default App;
