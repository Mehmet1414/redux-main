import React from 'react'
import { useSelector } from 'react-redux'
import SingelTodo from './SingelTodo';
function ListTodos() {
  const {todoState} = useSelector((state)=> state);

  //console.log(todoState.todos)
  return (
    <div className='d-flex gap-5 p-4 '>
        {todoState.todos.map((todo)=>(
            <SingelTodo todo={todo} />
        ))}
    </div>
  )
}

export default ListTodos