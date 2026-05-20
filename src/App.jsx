import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Experiences } from "./components/Experiences";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "App">

      <NavBar />
      <Banner />
      <Experiences />
      

    </div>
  );
   
}

export default App
