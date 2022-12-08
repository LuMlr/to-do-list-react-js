import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Add from './Components/Add';
import Counter from './Components/Counter';
import Buttons from './Components/Buttons';
import Navbar from './Components/Navbar';
import Tasks from './Components/Tasks';
import Taskitem from './Components/Taskitem';
import { useState } from "react";

const tasks = [];

function App() {
  const [tasks, setTasksArray] = useState([
    {id: 1,
    task: 'Get a coffee'}, 
    {id: 2,
    task: 'buy xmas presents'},
    {id: 3,
    task: 'finish Group Project'},
  ]);
  return (
    <div className='container mt-5'>
      {/* <Navbar />*/} 
      <Add tasks={tasks} setTasksArray={setTasksArray} />
       <Tasks tasks={tasks}/>
      {/* <Buttons /> Lukas */} 
      {/* <Counter />Sofia*/} 
    </div>
  );
}

export default App;
