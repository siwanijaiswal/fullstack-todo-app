import './index.css'
import Todo from './components/Todo';
import { useState, useEffect } from "react";
import { getAllTodo, addToDo, updateToDo, deleteToDo, searchInTodo } from './utils/HandleApi';

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllTodo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (

    <div className="App">
      <div className="container">
        <h1> Todo App</h1>

        <div className="top">
          <input type="text"
            placeholder="Add Todos here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className='add'
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}</div>

          <input type="text"
            placeholder="Search Todos here..."
            onChange={(e) => searchInTodo(e.target.value, setToDo)}
          />
        </div>

        <div className="list">
          {toDo.map((item) => <Todo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)} />)}
        </div>
      </div>
    </div>
  );
}
export default App;
