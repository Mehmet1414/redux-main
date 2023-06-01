import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";

function SingelTodo({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios.delete(`http://localhost:3003/todos/${todo.id}`)
    .then(() => {
      dispatch({
        type: "DEL_TODO",
        payload: todo.id,
      });
    });
  };

  const handleEdit = () => {
    axios
      .put(`http://localhost:3003/todos/${todo.id}`, {
        ...todo,
        isDone: !todo.isDone,
      })
      .then(() => {
        dispatch({
          type: "EDIT_TODO",
          payload: todo.id,
        });
      });
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className={!todo.isDone ? "card-body" : "card-body opacity-50 "}>
        <h5 className="card-title">{todo.text}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {todo.isDone ? "Tamamlandi" : "Devam ediyor..."}
        </h6>
        <p className="card-text">{new Date(todo.date).toLocaleDateString()}</p>
        <a href="#" className="card-link" onClick={handleEdit}>
          {todo.isDone ? "GeriAl" : "Tamamla"}
        </a>
        <a href="#" className="card-link" onClick={handleDelete}>
          Sil
        </a>
      </div>
    </div>
  );
}

export default SingelTodo;
