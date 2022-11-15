import React from 'react';
import './App.css';
import {Simulate} from "react-dom/test-utils";
import {TasksType, ToDoList} from "./components/ToDoList/ToDoList";

function App() {

    let tasks1: Array<TasksType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    let tasks2: Array<TasksType> = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: false},
        {id: 3, title: "Stop", isDone: false},
    ]

    return(
        <div>
            <ToDoList title={"What to learn"} tasks={tasks1}/>
            <ToDoList title={"Movies"} tasks={tasks2}/>
        </div>
        )

}

export default App;
