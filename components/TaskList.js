import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk,faXmarkCircle,faPenToSquare } from '@fortawesome/free-regular-svg-icons'
export default function TaskList({ todos, ondelete, onChange}) {


    return (
        <>
            <ul >
                {todos.map((todo) => (
                    <li className="task" key={todo.id}>
                        <Task onChange={onChange} ondelete={ondelete} todo={todo} />
                       
                    </li>
                ))}
            </ul>
        </>
    )
}

function Task({ todo, ondelete, onChange}) {
    const [isEdit, setIsEdit] = useState(false)
    const [finished, setIsFinished] = useState(false)
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

                {finished ? <s>{todo.task}</s> : todo.task}
                <button style={{all:'unset',cursor:"pointer"}} onClick={() => ondelete(todo.id)}><FontAwesomeIcon icon={faXmarkCircle} /></button>
                <button style={{all:'unset',cursor:"pointer"}} onClick={() => { setIsEdit(!isEdit); }}><FontAwesomeIcon icon={faPenToSquare} /></button>


                <div class="checkbox-wrapper-39">
                    <label>
                        <input className="checkbox-wrapper-39" type='checkbox' onClick={() => setIsFinished(!finished)}></input>
                        <span className="checkbox"></span>
                    </label>
                </div>






            </>
        )


    }
}