import { useState,useEffect } from 'react';
import TaskList from '../components/TaskList.js'
import AddTodo from '../components/AddTodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
export default function taskApp() {
 const [quote,setQuote]=useState('')
  const [todos, setTodos] = useState([])
  const [reload,setReload]=useState(false)
  useEffect (()=>{
    const data = window.localStorage.getItem('todos');
     if (data!==null) setTodos(JSON.parse(data))
    },[])

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(()=>{
      async function quotes() {
      const Response= await fetch('https://api.quotable.io/random?tags=motivational',{mode:'cors'})
      const data= await Response.json()
      data.length<=50?setQuote(data.content):quotes() 
    }
    quotes()
  },[reload])

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
   <div style={{display:'flex',gap:'10px'}}>
   <q  className='quote'>{quote}</q>
      <FontAwesomeIcon onClick={()=>setReload(!reload)} style={{cursor:'pointer'}} icon={faRotateRight} />
   </div>
      <AddTodo onAdd={handleAdd} />
      <title>TodoList</title>
      <TaskList   onChange={handleChange} onAdd={handleAdd}  ondelete={handledelete} todos={todos} />
      </div>
      </div>
  )
}