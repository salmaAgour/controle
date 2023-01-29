import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { myAdd, myDelete, myUpdate } from "./action"
import './Tasks.css'

export default function Tasks() {
    const [task, setTask] = useState('')
    const tasks = useSelector(state => state.data)
    const dispatch = useDispatch()

    const addTask = () => { task.length > 0 && dispatch(myAdd(task)); setTask('') }   //n'ajoute pas une task vide

    return <div className="container">
        <h2>My Task List </h2>
        <input type='text' id='inputTask' value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask}>Add a task</button>
        {tasks.map((task, index) =>
            <Item key={index} task={task} index={index} />)}
    </div>
}

function Item(props) {
    const [hide, setHide] = useState(true)
    const [newTitle, setNewTitle] = useState('')
    let tasks = useSelector(state => state.data);
    const dispatch = useDispatch();

    const removeTask = () => {
        tasks.splice(props.index, 1)
        dispatch(myDelete(tasks))
    }
    const updateTask = () => {
        tasks.splice(props.index, 1, newTitle)
        setHide(!hide)
        dispatch(myUpdate(tasks))
    }
    const handleClick = () => {
        setHide(!hide)
        setNewTitle(props.task)
    }

    return (
        <>
            {hide ?
                <div className="inside">
                    <span>{props.task}</span>
                    <div>
                        <button onClick={removeTask} className='remove'>remove</button>
                        <button onClick={handleClick} className='update'>update</button></div></div >
                : <div className="inside">
                    <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    <button onClick={updateTask} className='done'>done</button></div>
            }
        </>
    )
}