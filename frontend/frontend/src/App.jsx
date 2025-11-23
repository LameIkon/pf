import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Diagram from "./Diagram.jsx";
import { registerCharts } from './registerCharts';
import LineChart from "./LineChart"

registerCharts();

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <> 
      <div> 
        <Diagram/>     
      </div>
    </>
  )
}

export default App
