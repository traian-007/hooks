import React from 'react'

const Input = ({takeTaskFromInput,task}) => {
    return (
        <div style={{width: '100%'}}>
           <input type='text' placeholder='writte something' style={{width: '96%',height: "24px",paddingLeft: 5}} value={task} onChange={(e)=> takeTaskFromInput(e.target.value)}></input> 
        </div>
    )
}

export default Input
