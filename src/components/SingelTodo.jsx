import React from "react";

function SingelTodo({ todo }) {
    
  return (
    <div className="card" style={{ width:"18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{todo.text}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {todo.isDone ? "Tamam" : "Devam"}
        </h6>
        <p className="card-text">
          {new Date(todo.date).toLocaleDateString()}
        </p>
        <a href="#" className="card-link">
          Tamamla
        </a>
        <a href="#" className="card-link">
          Sil
        </a>
      </div>
    </div>
  );
}

export default SingelTodo;
