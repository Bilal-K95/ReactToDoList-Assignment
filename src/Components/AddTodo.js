import React, { useState } from "react";

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit=(e)=>
    {
        e.preventDefault();
        if(!title || !desc)
        {
            alert("title and Desc cannot be empty")
        }
        addTodo(title,desc)
    }
   
  return (
    <div className="container my-3">
      <h3>Add Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group mb-3">
          <label htmlfor="title">Todo Title</label>
          <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" />
        </div>
        <div className="form-group mb-3">
          <label htmlfor="Desc">Todo Description</label>
          <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" />
        </div>

        {/* <div className="form-group mb-3">
          <label htmlFor="priority">Add Priority</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>    */}

        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
