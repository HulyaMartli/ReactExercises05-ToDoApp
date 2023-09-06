import { useState } from 'react'
import "./assets/styles/reset.css"
import './App.css'
import { appIcon } from "./components/Icons"
import { v4 as uuidv4 } from 'uuid';

const DATA_TODOS = [
  { id: 0, content: "Eat.", isCompleted: false },
  { id: 1, content: "Code.", isCompleted: false },
  { id: 2, content: "Sleep.", isCompleted: false },
  { id: 3, content: "Repeat.", isCompleted: false }
]

function App() {
  const [toDos, setToDos] = useState(DATA_TODOS)

  //action addTodo
  function addToDo(content) {
    const newToDos = { id: uuidv4(), content, isCompleted: false };

    setToDos([newToDos, ...toDos]);
  }

  //action deleteTodo
  function deleteToDo(id) {
    const newToDos = toDos.filter(item => item.id !== id);
    setToDos(newToDos);

  }

  //action editTodo
  function editToDo() {

  }

  //action toggleCompleted
  function toggleCompleted() {

  }

  return (
    <main className='todo-app'>
      <div className='logo'>
        {appIcon}
        <h1>To-Do List</h1>
      </div>
      <ToDoForm onAddToDo={addToDo} />

      <ul>
        {toDos.map(todo => <ToDoItem key={todo.id} id={todo.id} content={todo.content} onDeleteToDo={deleteToDo} />)}
      </ul>

    </main>
  )

}

function ToDoForm({ onAddToDo }) {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) {
      return;
    }
    onAddToDo(content);
    console.log("****")
    console.log(content)
    setContent("");
  }

  return (
    <form id='frm-add-todo'
      onSubmit={handleSubmit}>
      <input type="text" name="" id="" placeholder="Write a to-do item..." onChange={(e) => setContent(e.target.value)} value={content} />
      <button type="submit">Add</button>
    </form>
  )
}

function ToDoItem({ content, onDeleteToDo, id }) {
  const [isEditing, setIsEditing] = useState(false);

  const viewTemplate = (
    <li>
      <input type="checkbox" name='' id='' />
      {content}
      <button type='button' onClick={() => {
        setIsEditing(true);
      }}>Edit</button>
      <button type='button' onClick={() => {
        onDeleteToDo(id);
      }}>Delete</button>
    </li>
  );

  const editTemplate = (
    <li>
      <input type='text' />
      <button type='button'>Save</button>
      <button type='button' onClick={() => {
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
