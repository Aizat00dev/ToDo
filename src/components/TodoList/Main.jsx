import { useState } from "react";
import List from "./List";




const Main = () => {

    const[inputValue, setInputValue] = useState('')
    const[taskList, setTaskList] = useState([])
    const[filter, setFilter] = useState('all')

    const addTask = () => {
        if(inputValue.trim()){
            setTaskList([...taskList, {id: new Date(), text: inputValue, isCompleted:false}])
            setInputValue('')
        }
        
    }

    const removeTask = (id) => {
        setTaskList(taskList.filter(task => task.id !== id))
    } 

    const toggleCompleted = (id) => {
        setTaskList(taskList.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted} : task))
    }

    const showAll = () => setFilter('all')
    const showCompleted = () => setFilter('completed')
    const showUncompleted = () => setFilter('uncompleted')

    const filteredTasks = taskList.filter(task => {
        if(filter === 'completed') return task.isCompleted
        if(filter === 'uncompleted') return !task.isCompleted
        return true;
    })

    return(
        <div>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <button onClick={showAll}>All</button>
            <button onClick={showCompleted}>Completed</button>
            <button onClick={showUncompleted}>Uncompleted</button>


            <ul>
                {
                  filteredTasks.map(task =>(
                    <List
                        key={task.id}
                        task = {task}
                        removeTask = {removeTask}
                        toggleCompleted = {toggleCompleted}
                    />
                ))
                }
            </ul>
        </div>
    )
}

export default Main;