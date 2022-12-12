import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Add from './Components/Add';
import Counter from './Components/Counter';
import Buttons from './Components/Buttons';
import Navbar from './Components/Navbar';
import Tasks from './Components/Tasks';
import Taskitem from './Components/Taskitem';
import { useState, useEffect } from "react";


const tasks = [];


function App() {
  const [tasks, setTasksArray] = useState([  ]);

  let uncompleted = 0;
  for (let i=0; i < tasks.length; i++) {
    if (tasks[i].completed === false) uncompleted++;
  }

  return (
    <div className='container mt-5 col backgroundcolor-col'>
      <div id="list">
      {/* <Navbar />*/} 
      <Add tasks={tasks} setTasksArray={setTasksArray} />
       <Tasks tasks={tasks} setTasksArray={setTasksArray} contentEditable={false}/>
      {/* <Buttons /> Lukas */} 
      {/* <Counter />Sofia*/} 
      </div>
      <p>You have {uncompleted} undone tasks</p>
    </div>
  );
}

export default App;
