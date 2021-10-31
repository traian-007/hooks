import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Task from './components/Task'


const MainPage = () => {
    const [totalTask, setTotalTask] = useState([])
    const [task, setTask] = useState('')
    
    function addTask () {
        setTotalTask(() => [...totalTask, task])
        setTask('')
    }
    function removeTask (data) {
        setTotalTask(() => totalTask.filter((item) => item !== data))
    }

    function takeTaskFromInput (task) {
        setTask(task)
    }
    
    return (
        <div style={{width: 400,display: 'column',alignItems: 'center',margin: '100px auto'}}>
            <h1> Todo List</h1>
            <div style={{display: 'flex',justifyContent: 'space-between', marginBottom: 30,height: '30px'}}>
                <Input takeTaskFromInput={takeTaskFromInput} task={task}/>
                <Button addTask={addTask}/>
            </div>
                {
                    totalTask.map((task,index) => (
                        <Task key={`${task}${index}`} removeTask={removeTask} task={task} />
                    ))
                }
        </div>
       
    )
}

export default MainPage
