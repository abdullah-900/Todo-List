import { useState,useEffect } from 'react';
import TaskList from '../components/TaskList.js'
import AddTodo from '../components/AddTodo';

export default function taskApp() {
 const [quote,setQuote]=useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

useEffect (()=>{
const data = window.localStorage.getItem('todos');
 if (data!==null) setTodos(JSON.parse(data))
},[])

  useEffect(()=>{
      async function quotes() {
      const Response= await fetch('https://api.quotable.io/random?tags=motivational',{mode:'cors'})
      const data= await Response.json()
      data.length<=50?setQuote(data.content):quotes() 
    }
    quotes()
  },[])

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
      <q>{quote}</q>
      <AddTodo onAdd={handleAdd} />
      <title>TodoList</title>
      <TaskList   onChange={handleChange} onAdd={handleAdd}  ondelete={handledelete} todos={todos} />
      </div>
      </div>
  )
}