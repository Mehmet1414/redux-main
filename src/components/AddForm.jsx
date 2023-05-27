import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };
  return (
    <form className="d-flex mt-3 p-4" onSubmit={handleSubmit}>
      <input
        className="form-control position-relative mx-2 px-5 outline-none"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-danger position-absolute ">
        Add
      </button>
    </form>
  );
}

export default AddForm;
