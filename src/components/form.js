import "../App.css"

const Form = ({handleAdd, toDoInput, setToDoInput}) => {

    return (
        <form className="formStyle" onSubmit={handleAdd}>
            <label className="centre">
                Add a Task:
                <input className="box" type="text" value={toDoInput} onChange={(x) => setToDoInput(x.target.value)}></input>
            </label>
            <button onClick={handleAdd}>Submit Task</button>
        </form>
    )
}

export default Form