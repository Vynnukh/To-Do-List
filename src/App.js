import "./App.css"
import {useState} from "react"
import Form from "./components/form"
import List from "./components/list"

function App () {
  const [toDoList, setToDoList] = useState([])
  const [toDoInput, setToDoInput] = useState("")

  const handleClick = (index) => {
    let storedTasks = [...toDoList]
    storedTasks.splice(index, 1)
    setToDoList(storedTasks)
  }

const handleAdd = (x) => {
  x.preventDefault()
  setToDoList([...toDoList, {task: toDoInput}])
  setToDoInput("")
}

return (
  <div className="genericStyle">
    <h1 className="centre">To Do List</h1>
    <Form handleAdd={handleAdd} toDoInput={toDoInput} setToDoInput={setToDoInput}></Form>
    {toDoList.map((item, index) => {
      return (
        <List task={item.task} key={index} handleClick={() => handleClick(index)}/>
      )
    })}
  </div>
)

}

export default App;
