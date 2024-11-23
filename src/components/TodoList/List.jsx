



const List = ({task, removeTask, toggleCompleted}) => {
    return(
        <div>
                <li>
                    <input 
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={()=>toggleCompleted(task.id)}
                    />
                    <span
                     style={{textDecoration: task.isCompleted ? "line-through" : "none"}}
                    >{task.text} </span>
                        
                        
                        <button onClick={() => removeTask(task.id)}>Del</button>
                </li>
        </div>
    )
}

export default List;