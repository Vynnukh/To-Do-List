import { useState } from "react"
import "../App.css"


let List = ({task, handleClick}) => {
    const [complete, setComplete] = useState(false)
    return (
        <div className="formStyle">
            {complete ? (
                <h2 style={{color: "blue"}}>
                    {task} : completed
                </h2>
            ) : (
                <h2>
                    {task}
                </h2>
            )}
            <button onClick={handleClick}>Delete</button>
            <button onClick={() => setComplete(true)}>Complete Task</button>
        </div>
    )
}

export default List