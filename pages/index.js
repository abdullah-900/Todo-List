import { useState,useEffect } from 'react';
import TaskList from '../components/TaskList.js'
import AddTodo from '../components/AddTodo';

export default function taskApp() {
  
 
  const [todos, setTodos] = useState([])

 



  function handleAdd(task) {
    setTodos(
      [
        ...todos,
        {
          id: Math.random(),
          task: task,
          done: false,
        }
      ]
    )
    
  }
  function handledelete(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    )
  }
 
function handleChange(nextID) {
  setTodos(todos.map(t=>{
    if(t.id===nextID.id) {
      return nextID
    } else {
      return t
    }
  }))
}
  return (
    
    <div className='parent'>
      <div className='child'>
      
      <AddTodo onAdd={handleAdd} />
      <title>TodoList</title>
      <TaskList  onChange={handleChange} onAdd={handleAdd}  ondelete={handledelete} todos={todos} />
      </div>
      </div>
    
  )
}