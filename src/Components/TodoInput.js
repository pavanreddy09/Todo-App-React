import React from 'react'

function TodoInput(props) {
  return (
    <div className='input-div'>
       <input placeholder='Enter the Task' value={props.value} onChange={props.onchange}/> 
       <button onClick={props.onclick}>ADD</button>
    </div>
  )
}

export default TodoInput