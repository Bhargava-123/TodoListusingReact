import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
function App() {
  const [todoList, settodoList] = useState([]);
  const [task, setTask] = useState();
  //const [comp,setComp] = useState(false);

  const setTaskHandler = (e) => 
  {
    const obj = {
      id: todoList.length == 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: e.target.value,
      isCompleted: false, }
    setTask(obj);
    console.log(obj.taskName);
  }
  const settodoListHandler = (task) => 
  {
    settodoList([...todoList, task]);
  }
  const StrikeOut = (event, task) => 
  {
    event.target.checked ? task.isCompleted = true : task.isCompleted = false;
    document.getElementById(task.taskName).classList.toggle("striked-out");
  }
  const DeleteHandler = (task) =>
  {
    document.getElementById(task.id).remove();
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => setTaskHandler(e)} />
      <button className="AddTask" onClick={() => settodoListHandler(task)}>Add Task</button>
      <div>
        {
          todoList.map((value, key) => {
            return (
              <div key={key} id = {value.id}>
                <input type="checkbox" id="checkbox" onChange={() => StrikeOut(event, value)} />
                <h2 id={value.taskName}>{value.taskName}</h2>
                <button className="Delete" onClick={() =>DeleteHandler(value)}> X </button>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default App
