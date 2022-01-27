// import React, { Component } from 'react'
// import Header from './Header'

// export default class Home extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        task:""
//     }
//   }
//   handleOnChange=(e)=>
//   {
//     const {name,value}=e.target;
//     this.setState({[name]:value})
//     console.log(this.state.task)

//   }
//   handleOnClick=()=>
//   {
//     this.setState(this.task)

//   }

//   render() {
//     return (
//       <>
//       <Header/>
//       <form onSubmit={this.handleSubmit}>
//       <div className="mt-4">
//       <tr>
//     <td> Add task <input type="text"placeholder="enter the task" name="task"  onChange={this.handleOnChange}/><br/></td>
//     <td> Add Description <input type="text"placeholder="enter the task"/><br/></td>
//     <td> Priority<select>
//        <option>1</option>
//        <option>2</option>
//        <option>3</option>
//        <option>4</option>
//        <option>5</option>
//      </select>
//      </td>
//      <td>
//        <button onClick={this.handleOnClick}>Add</button>
//      </td>
//      </tr><br/>
//      <tr>
//        <td>{this.newItem}</td>
//      </tr>

//      </div>
//      </form>

//       </>
//     )
//   }
// }
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import Header from "./Header";
import { Footer } from "./Footer";


export default function Home() 
{
  const onDelete = (todo) => {
    console.log("i m on delete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("i am adding todo", title, desc);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
     setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "go to the market",
      desc: "you need to the go to the market",
    },
    {
      sno: 2,
      title: "go to the gym",
      desc: "you need to the go to the gym",
    },
    
  ]);


  return (
    <div>
      <Header/>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
      
    </div>
  );
}
