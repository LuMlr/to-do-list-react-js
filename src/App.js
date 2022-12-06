import React from 'react';
import Add from './Components/Add';
import Counter from './Components/Counter';
import Delete from './Components/Delete';
import Done from './Components/Done';
import Edit from './Components/Edit';
import Tasks from './Components/Tasks';


function App() {
  return (
    <div>
      Here be the add stuff
      <Add /> {/* Candy */} 
      <Tasks />{/* Sindhura */} 
      <Delete />{/* Lukas */} 
      <Edit />{/* Sofia */} 
      <Done />{/*  */} 
      <Counter />{/*  */} 
    </div>
  );
}

export default App;
