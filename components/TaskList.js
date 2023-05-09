import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk,faXmarkCircle,faPenToSquare } from '@fortawesome/free-regular-svg-icons'
export default function TaskList({ todos, ondelete, onChange}) {
const unfinished=todos.filter(t=>t.done===false)
const [showActive,setShowActive]=useState(false)
const visible=showActive?unfinished:todos
    return (
        <>
         <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
            <ul >
                {visible.map((todo) => (
                    <li className="task" key={todo.id}>
                        <Task onChange={onChange} ondelete={ondelete} todo={todo} />
                       
                    </li>
                ))}
            </ul>
            <p>{unfinished.length} todos left</p>
        </>
    )
}

function Task({ todo, ondelete, onChange}) {
    const [isEdit, setIsEdit] = useState(false)
  
    
    if (isEdit) {
        return (
            <>

                <input value={todo.task} onChange={(e) => {
                    onChange({
                        ...todo,
                        task: e.target.value
                    })
                }}></input>
                 <FontAwesomeIcon style={{cursor:'pointer'}} onClick={() =>  setIsEdit(!isEdit)} icon={faFloppyDisk} />
               <FontAwesomeIcon style={{cursor:'pointer'}}  onClick={() => ondelete(todo.id)} icon={faXmarkCircle} />
                
               
            </>
        )
    } else {

        return (
            <>

               
                    {todo.done ? <s>{todo.task}</s> : todo.task}
                     <div className="edit">
                    <FontAwesomeIcon style={{cursor:'pointer'}} onClick={() => ondelete(todo.id)} icon={faXmarkCircle} />
                    <FontAwesomeIcon style={{cursor:'pointer'}} onClick={() =>  setIsEdit(!isEdit) } icon={faPenToSquare} />
                    <div className="checkbox-wrapper-39">
                        <label>
                            <input className="checkbox-wrapper-39"  checked={todo.done}  type='checkbox'  onChange={(e) => {
                        onChange(todo.done?{
                            ...todo,
                            done: false}:{...todo,done:e.target.checked})
                    }}
                        ></input>
                            <span className="checkbox"></span>
                        </label>
                    </div>
                    </div>
               




            </>
        )


    }
}