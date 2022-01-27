import React from 'react'
import ToDoItem from './ToDoItem'

export default function Todos(props) {
    return (
        <div>
            {props.todos.length===0? "No Todos to display":
            props.todos.map((todo)=>{
                return <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            }
            )}
            
           
        </div>
    )
}
