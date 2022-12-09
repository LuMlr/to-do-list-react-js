import React from "react";
import Taskitem from "./Taskitem";


export default function List({ tasks, setTasksArray, contentEditable }) {
  console.log({tasks});


    return (
        <div className="tasks">
            {tasks.map((element) => {
                return <Taskitem task={element} key={element.id} tasks={tasks} setTasksArray={setTasksArray} contentEditable={contentEditable}/>;
            })}
        </div>
    );
}