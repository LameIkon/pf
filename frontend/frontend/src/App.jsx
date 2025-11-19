import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Diagram from "./Diagram.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Diagram/>
    </>
  )
}

export default App
