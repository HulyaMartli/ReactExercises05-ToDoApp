import { useState } from 'react'
import './App.css'

const DATA_TODOS = [
  { id: 0, content: "Eat.", isCompleted: false },
  { id: 1, content: "Code.", isCompleted: false },
  { id: 2, content: "Sleep.", isCompleted: false },
  { id: 3, content: "Repeat.", isCompleted: false }
]

function App() {
  const [count, setCount] = useState();

  return (
    <main>
      <h1>To-Do List</h1>
      <form>
        <input type="text" name="" id="" placeholder="Write a to-do item..." />
        <button type="submit">Add</button>
      </form>

      <ul>
        <ToDoItem content="Eat." />
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
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );

  const editTemplate = (
    <li>
      <input type="checkbox" name='' id='' />
      <input type='text' />
      <button>Save</button>
      <button>Close</button>
    </li>
  );

  return (
    <>
      {isEditing ? editTemplate : viewTemplate}
    </>
  );
}

export default App
