import React from "react";

export default function Add() {

    const tasks = ['Get a coffee', 'Buy x-mas presents'];
    let textTask
    const taskTextChange = (event) => {
        textTask = event.target.value
        console.log(textTask);
    };

    const addTask = () => {
        alert(textTask);
        textTask = "";
    };

    return (
        <div> 
            <h1>To-Do-List</h1>
            <input type="text" placeholder="Add a new task here" onChange={taskTextChange}></input>
            <input type="submit" value="Add Task" onClick={addTask}></input>
        </div>
    );
}