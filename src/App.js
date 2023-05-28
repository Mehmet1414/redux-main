import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3003/todos")
    .then((res) => {
      dispatch({
        type: "RES_TODOS",
        payload: res.data,
      });
    });
  }, []);
  return (
    <div className="App">
      <AddForm />
      <ListTodos />
    </div>
  );
}

export default App;
