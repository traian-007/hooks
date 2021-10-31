import React, { useState } from 'react'
import crossed from '../crossed.png'

const Task = ({removeTask,task}) => {
    const [stateOfTask, setStateOfTask] = useState(false)
    const ab = () => {
        setStateOfTask(!stateOfTask)
    }
    const border = stateOfTask? "2px solid red": 'none'

    return (
        <div onDoubleClick={ab} style={{display: 'flex',height: 30,justifyContent: 'space-between',alignItems: 'center',borderLeft: `${border}`, padding: "10px 0"}}>
            <h1 style={{paddingLeft: 5}}>{task}</h1>
            <img src={crossed} style={{width: 20, height: 20}} onClick={() => removeTask(task)}/>
        </div>
    )
}

export default Task
