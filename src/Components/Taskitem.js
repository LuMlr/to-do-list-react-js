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
            <div 
             style={{
                textDecorationLine: isActiveDone ? 'line-through' : 'none',
              }}
            >{task.task}
            <button onClick={onDone}>DONE</button>
            <button onClick={onDelete}>DELETE</button>
            <button>EDIT</button>
            </div>
        </div>
    );

}