import { useState } from "react";
export default function AddTodo({ onAdd }) {
  const [task, setTask] = useState("");
  return (
    <div className="inputcomp">

      <input placeholder="Enter a Todo..." className="adding"  value={task} onChange={(e) => setTask(e.target.value)}></input>
      <button className="addbutton" onClick={() =>{onAdd(task);
      setTask('')} }>Add</button>
    </div>
  );
}
