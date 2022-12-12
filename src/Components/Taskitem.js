import { useState, useEffect } from "react";

export default function Taskitem({ task, tasks, setTasksArray, contentEditable }) {
    
   
    const [isActiveDone, setIsActiveDone] = useState(false);
    const [isActiveEdit, setIsActiveEdit] = useState(false);
    const [doneButton, setDoneButton] = useState('DONE');
    const [editButton, setEditText] = useState('EDIT');
  
    const onDelete = () => {
      const stateCopy = tasks.slice();
      let index = stateCopy.findIndex((x) => x.task === task.task);
      stateCopy.splice(index, 1);
      setTasksArray(stateCopy);
    };


    const onDone = () => {
        const stateCopy = tasks.slice();
        setIsActiveDone(current => !current);
        if (isActiveDone === false) {task.completed=true}
        else{task.completed=false}
        setTasksArray(stateCopy);
        if (doneButton === "DONE") {
            setDoneButton("UNDO");
          } else {
            setDoneButton("DONE");
          }
    }

    const onEdit = () => {
        setIsActiveEdit((current) => !current);
        if (editButton === "EDIT") {
            setEditText("SAVE");
          } else {
            setEditText("EDIT");
          }
      };
    
      return (
        <div className="task">
          <div
            className="taskitem"
            style={{ textDecorationLine: isActiveDone ? "line-through" : "none",
                     color: isActiveEdit ? 'rgb(210, 231, 125)' : "" }}
            contentEditable={isActiveEdit ? true : false}
          >
            {task.task}
          </div>
          <div className="buttons">
            <button onClick={onDone} className={"buttons btn btn-outline-success"}>
            {doneButton}
            </button>
            <button onClick={onDelete} className={"buttons btn btn-outline-danger"}>
              DELETE
            </button>
            <button onClick={onEdit} className={"buttons btn btn-outline-warning"}>
            {editButton}
            </button>
          </div>
        </div>
      );
    }