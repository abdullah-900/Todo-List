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
                <button style={{all:'unset',cursor:"pointer"}}  onClick={() => { setIsEdit(!isEdit); }}><FontAwesomeIcon icon={faFloppyDisk} /></button>
                <button style={{all:'unset',cursor:"pointer"}}  onClick={() => ondelete(todo.id)}><FontAwesomeIcon icon={faXmarkCircle} /></button>
                
               
            </>
        )
    } else {

        return (
            <>

                {todo.done ? <s>{todo.task}</s> : todo.task}
                <button style={{all:'unset',cursor:"pointer"}} onClick={() => ondelete(todo.id)}><FontAwesomeIcon icon={faXmarkCircle} /></button>
                <button style={{all:'unset',cursor:"pointer"}} onClick={() => { setIsEdit(!isEdit); }}><FontAwesomeIcon icon={faPenToSquare} /></button>


                <div class="checkbox-wrapper-39">
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






            </>
        )


    }
}