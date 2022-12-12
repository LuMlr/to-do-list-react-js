import { useState, useEffect } from "react";

export default function Taskitem({ task, tasks, setTasksArray, contentEditable }) {
    
   
const [isActiveDone, setIsActiveDone] = useState(false);
const [isActiveEdit, setIsActiveEdit] = useState(false);

let taskIndex = task.id - 1
console.log(taskIndex);


  const onDelete = () => {

    const stateCopy = tasks.slice();
    console.log(stateCopy)
    let taskIndex = task.id - 1
    console.log(taskIndex);
    stateCopy.splice(taskIndex,1);
    setTasksArray(stateCopy);
}
  


    const onDone = () => {
        const stateCopy = tasks.slice();
        setIsActiveDone(current => !current);
        if (isActiveDone === false) {task.completed=true}
        else{task.completed=false}
        setTasksArray(stateCopy);
    }

    const onEdit = () => {
        setIsActiveEdit(current => !current);
}

    return (
        <div className="task">
            <div className="taskitem"
                style={{textDecorationLine: isActiveDone ? 'line-through' : 'none'}}
                contentEditable={isActiveEdit ? true : false}
                >
                    {task.task}
                
            </div>
                <div className="buttons">
                    <button onClick={onDone} className={"buttons btn btn-outline-success"}>DONE</button>
                    <button onClick={onDelete} className={"buttons btn btn-outline-danger"}>DELETE</button>
                    <button onClick={onEdit} className={"buttons btn btn-outline-warning"}>EDIT</button>
                </div>
            
        </div>
    );

}