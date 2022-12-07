export default function Taskitem({ task }) {
    console.log(task);

    return (
        <div className="task">
            <div>{task.task}
            <button>DONE</button>
            <button>DELETE</button>
            <button>EDIT</button>
            </div>
        </div>
    );

}