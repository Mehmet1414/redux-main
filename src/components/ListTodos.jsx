import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SingelTodo from "./SingelTodo";
import axios from "axios";

function ListTodos() {
  const { todoState } = useSelector((state) => state);

  //console.log(todoState.todos)
  const dispatch = useDispatch()
  
  const handleClear = ()=>{
    todoState.todos.forEach((todo)=>{
      axios.delete(`http://localhost:3003/todos/${todo.id}`)
      .then(()=>{
        dispatch({
          type:"CLEAR",
        })
      })
      })
  }

  return (
    <div className="row justify-content-center gap-5 p-4 pt-0 ">
      <div className="">
        {todoState.todos.length >=1 ? (
          <a href="#" onClick={handleClear}>Bütün Listeyi Sil</a>
        ) : (
          "Listeleneck Öge yok..."
        )}
      </div>
      {todoState.todos.map((todo) => (
        <SingelTodo todo={todo} />
      ))}
    </div>
  );
}

export default ListTodos;
