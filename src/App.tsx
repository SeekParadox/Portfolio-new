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
    
    <>
      <header className="">
        <p className="">MW</p>
        <h1 className="">Welcome to my portfolio!</h1>

      </header>
      
      <About />
      </> 
  );
}

export default App;
