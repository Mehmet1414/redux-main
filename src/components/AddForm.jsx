import React from "react";
import "../index.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function AddForm() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: text,
      isDone: false,
      date: new Date(),
    };
    axios.post("http://localhost:3003/todos", newTodo)
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setText("")
  };
  return (
    <form className="d-flex mt-3 p-4" onSubmit={handleSubmit}>
      <input
        className="form-control position-relative outline-none inp-frm "
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="btn btn-danger position-absolute add-btn">
        Add
      </button>
    </form>
  );
}

export default AddForm;
