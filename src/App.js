import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Add from './Components/Add';
import Counter from './Components/Counter';
import Buttons from './Components/Buttons';
import Navbar from './Components/Navbar';
import Tasks from './Components/Tasks';
import Taskitem from './Components/Taskitem';

const taskList = [
  {id: 1,
  task: 'Get a coffee'}, 
  {id: 2,
  task: 'buy xmas presents'},
  {id: 3,
  task: 'finish Group Project'},
];

function App() {
  return (
    <div>
      {/* <Navbar />*/} 
      {/* <Add />   Sindhura*/} 
       <Tasks tasks={taskList}/>
      {/* <Buttons /> Lukas */} 
      {/* <Counter />Sofia*/} 
    </div>
  );
}

export default App;
