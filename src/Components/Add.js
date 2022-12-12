import React from "react";
import { useState } from "react";


export default function Add({ tasks, setTasksArray, contenteditable }) {
    let inputValue;
       const onChangeFun = (e) => {
             inputValue = e.target.value;
            return inputValue
          }
        const onClickFun = (e) => {
            if(inputValue) {
            let counter = tasks.length
            counter = counter+1;
          // slice will create a copy of the array
          const stateCopy = tasks.slice();
          stateCopy.unshift({id: counter,task: inputValue, completed: false});
          setTasksArray(stateCopy);
            }
            else {
                alert('Required Field: Please enter some text!!')
            }

        }
      return (
    <div className="row">
      <div className="additem col backgroundcolor-col pb-2">
            <div className="row">
                <h1>To Do List</h1>
                </div>
            <div className="row row-cols-md-auto">
                <div className="col-12 flex-grow-1">
                <input onChange={onChangeFun} name="name" type="text" className="form-control" id="addItemInput" placeholder="New Task"/>
                </div>
                <div className="col-12">
                <button onClick={onClickFun} type="button" id = "addInputButton" className="addbutton btn buttons float-end">Add</button>
                </div>
            </div>
      </div>
    </div>

      );
    }