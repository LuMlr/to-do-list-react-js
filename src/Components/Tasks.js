import React from "react";
import Taskitem from "./Taskitem";


export default function List({ tasks }) {
  console.log({tasks});


    return (
        <div className="tasks">
            {tasks.map((element) => {
                return <Taskitem task={element} key={element.id}/>;
            })}
        </div>
    );
}