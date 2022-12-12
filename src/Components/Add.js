import React from "react";
import { useState } from "react";

export default function Add({ tasks, setTasksArray, contenteditable }) {
  const [inputState, setInputState] = useState('')
  const onChangeFun = (e) => {
    setInputState(e.target.value)
  };
  const onClickFun = (e) => {
    if (inputState) {
      const ids = tasks.map((object) => {
        return object.id;
      });
      let counter = Math.max(...ids);
      counter = counter + 1;
      const stateCopy = tasks.slice();
      stateCopy.push({ id: counter, task: inputState ,completed:false});
      setTasksArray(stateCopy);
      setInputState('');
    } else {
      alert("Required Field: Please enter some text!!");
    }
  };
  return (
    <div className="row">
      <div className="additem col backgroundcolor-col pb-2">
        <div className="row">
          <h1>To Do List</h1>
        </div>
        <div className="row row-cols-md-auto">
          <div className="col-12 flex-grow-1">
            <input
              onChange={onChangeFun}
              name="name"
              type="text"
              className="form-control"
              id="addItemInput"
              placeholder="New Task"
              value={inputState}
            />
          </div>
          <div className="col-12">
            <button
              onClick={onClickFun}
              type="button"
              id="addInputButton"
              className="addbutton btn buttons float-end"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}