import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Diagram from "./Diagram.jsx";
import { registerCharts } from './registerCharts';


registerCharts();

function App() {
  
  return (
    <> 
      <div> 
        <Diagram/>     
      </div>
    </>
  )
}

export default App
