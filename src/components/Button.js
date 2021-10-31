import React from 'react'

const Button = ({addTask}) => {
    return (
        <button onClick={() => addTask()} style={{color: 'white', background: 'green'}}>
            Add
        </button>
    )
}

export default Button
