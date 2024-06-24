import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add, deletee, editt, update } from "../Action/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Todo = () => {
  const [change, setChange] = useState({ firstval: "" });
  const [field, setField] = useState(false);
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.tododata.data);
  console.log(todos, "todos");

  const handleClick = () => {
    const trimmedValue = change.firstval.trim();
    if (trimmedValue === "") {
      // alert("Insert the value first");
      toast.warn("Insert the value first");

      
    } else {
      const newTodo = { id: todos.length + 1, firstval: change.firstval };
      dispatch(add(newTodo));
      setChange({ firstval: "" });
    }
  };

  const handleChange = (e) => {
    setChange({ firstval: e.target.value });
  };

  const handleEdit = (id) => {
    dispatch(editt(id, change));
    let newEditItem = todos.find((data) => {
      // console.log(data);
      return data.id === id;
    });
    setChange({ firstval: newEditItem.firstval });
    setField(() => !field);
    setEditId(id);
  };
  const handleupdate = (id) => {
    dispatch(update(id, change));
    setField(false);
    setEditId(null);
    setChange({ firstval: "" });
  };

  return (
    <>
      <ToastContainer /> 
    <div>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "10%",
          alignItems: "center",
        }}
      >
        Todo List
      </h1>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          type="text"
          name="firstval"
          value={change.firstval}
          onChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={() => handleClick()}
          style={{ border: "1px solid", backgroundColor: "black" }}
        >
          +
        </Button>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <ul>
          {todos.map((todo) => (
            <table>
              <tr key={todo.id}>
                <td style={{ width: "3rem" }}>{todo.id}</td>
                {/* {field && editId === todo.id  ? (
                  <td>

                    <Input
                      type="text"
                      // name="firstval"
                      // value={change.firstval}
                      // onChange={handleChange}
                    />
                  </td>
                ):(

                  <td style={{ width: "15rem" }}>{todo.firstval}</td>
                )
              } */}
                <td style={{ width: "15rem" }}>{todo.firstval}</td>
                <td style={{ width: "3rem" }}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => dispatch(deletee(todo.id))}
                  >
                    Delete
                  </Button>
                </td>
                {field && editId === todo.id ? (
                  <td style={{ width: "3rem" }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleupdate(todo.id)}
                    >
                      Update
                    </Button>
                  </td>
                ) : (
                  <td style={{ width: "3rem" }}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleEdit(todo.id)}
                    >
                      Edit
                    </Button>
                  </td>
                )}
              </tr>
            </table>
          ))}
        </ul>
      </section>
    </div>
    </>

  );
};
