import { useState } from "react"
import "./style.css"
export default function App(){
const [newTask,setNewTask] = useState("");
const [todos, setTodos] = useState([]);

function handleSubmit(){
setTodos(currentTodos => {
    return [
        ...currentTodos,
        {id:crypto.randomUUID(),title: newTask, completed:false},
    ]
})

}
return (
    <>
    <div className="submit-container">
        <p>What you need to do?</p>
        <input type="text" 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
    <div className="todos">
        <p>Tasks</p>
        <ul>
            {todos.map(todo => {
                return <li>
                <input value={todo.completed} type="checkbox" />
                 <p className="title">{todo.title}</p>
                <button className="remove">Remove</button>
                </li>
        })}  
        </ul>
    </div>
    </>
)
}