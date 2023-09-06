import { useState } from 'react'
import "./assets/styles/reset.css"
import './App.css'
import {appIcon} from "./components/Icons"

const DATA_TODOS = [
  { id: 0, content: "Eat.", isCompleted: false },
  { id: 1, content: "Code.", isCompleted: false },
  { id: 2, content: "Sleep.", isCompleted: false },
  { id: 3, content: "Repeat.", isCompleted: false }
]

function App() {
  const [count, setCount] = useState();

  return (
    <main className='todo-app'>
      <div className='logo'>
      {appIcon}
      <h1>To-Do List</h1>
      </div>
      <form>
        <input type="text" name="" id="" placeholder="Write a to-do item..." />
        <button type="submit">Add</button>
      </form>

      <ul>
        <ToDoItem content="Eat." />
        <hr/>
        <ToDoItem content="Code." />
      </ul>

    </main>
  )

}

function ToDoItem({ content }) {
  const [isEditing, setIsEditing] = useState(false);

  const viewTemplate = (
    <li>
      <input type="checkbox" name='' id='' />
      {content}
      <button type='button' onClick={()=>{
        setIsEditing(true);
      }}>Edit</button>
      <button>Delete</button>
    </li>
  );

  const editTemplate = (
    <li>
      <input type='text' />
      <button type='button'>Save</button>
      <button type='button' onClick={()=>{
        setIsEditing(false);
      }}>Close</button>
    </li>
  );

  return (
    <>
      {isEditing ? editTemplate : viewTemplate}
    </>
  );
}

export default App
