import './App.css';
import pic1 from "../src/pic1.png"
import pic2 from "../src/pic2.png"
import {useState} from 'react'
import Button from './component/button/button';

function App() {
  const[bulb,setBulb] = useState(true)
  return (
    <div className="App">
      <h1>Bulb Checking</h1>
      <img style={{width: "300px" , margin: "auto"}} src={bulb ? pic1 : pic2} alt="" />
      <Button title={bulb ? "ONN" : "OFF"} onClick={() => {setBulb(!bulb)}} />
    </div>
  );
}

export default App;
