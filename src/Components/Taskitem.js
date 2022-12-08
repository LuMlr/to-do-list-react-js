import { useState } from "react";

export default function Taskitem({ task }) {
    console.log(task);
const [isActiveDone, setIsActiveDone] = useState(false);
   

    
    const onDelete = () => {

    }

    const onDone = () => {
        
            setIsActiveDone(current => !current);
        
            // 👇️ or set to true
            // setIsActive(true);
    }

    return (
        <div className="task">
            <div className="taskitem"
                style={{textDecorationLine: isActiveDone ? 'line-through' : 'none'}}>
                    {task.task}
                <div className="buttons">
                    <button onClick={onDone} className={"buttons btn btn-outline-success"}>DONE</button>
                    <button onClick={onDelete} className={"buttons btn btn-outline-danger"}>DELETE</button>
                    <button className={"buttons btn btn-outline-warning"}>EDIT</button>
                </div>
            </div>
        </div>
    );

}