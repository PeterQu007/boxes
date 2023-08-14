import React from 'react';
import './App.css';
import Box from './Box.js';
import BoxesData from './data.js';

function App() {
  const [boxes, setBoxes] = React.useState(BoxesData);

  console.log(BoxesData);

  const BoxesPanel = boxes.map(box=><Box key={box.id} on={box.on} toggle={()=>toggle(box.id)}/>) 

  const toggle = id => {
    setBoxes(preBoxes => {
      return preBoxes.map(box=>{
        return box.id===id ? {...box, on: !box.on} : box;
      })
    })
  };

  return (
    <div className="App">
     <h1>React Boxes App</h1>
     {BoxesPanel}
    </div>
  ); 
}

export default App;
