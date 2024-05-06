import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    let [todos, setTodos] = useState([{task: "Task 1", id: uuidv4(), isDone: false}]); // For All Task 
    let [task, setTask] = useState(""); // For Task needs to be added

    // Add new task
    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: task, id: uuidv4(), isDone: false}];
        });
        setTask("");
    }

    let updateToDoValue = (event) => {
        setTask(event.target.value);
    }

    let deleteToDoValue = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    };
                } else {
                    return todo;
                }
            })
        );
    }

    return (
        <div>
           <input value={task} onChange={updateToDoValue} placeholder="Enter a Task"></input>
           <br></br>
           <br></br>
           <button onClick={addNewTask}>Add</button>

           <br></br>
           <br></br>
           <hr></hr>

           <p>Task ToDo</p>
           <ul>
            {todos.map((todo) => {
                return (
                    <div>
                    <li key={todo.id}>
                        <span style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                  color: todo.isDone ? "gray" : "black", // Conditional color change
                }}
                >{todo.task}</span>
                        &nbsp; &nbsp;
                        <button onClick={() => deleteToDoValue(todo.id)}>Delete</button>
                        &nbsp; &nbsp;
                        <button onClick={() => upperCaseOne(todo.id)}>Update</button>
                        &nbsp; &nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark as {todo.isDone ? "Done" : "Not Done"}</button>
                    </li>
                    <br></br>
                    
                </div> // Added 'return' here
                ) 
            })}
           </ul>
           <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
    );
}
