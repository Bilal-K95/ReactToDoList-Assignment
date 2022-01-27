import React from 'react'

export default function ToDoItem({todo,onDelete}) {
    return (
        <div style={{marginLeft:"210px"}}>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn-sm btn-danger" key={todo.sno} onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
