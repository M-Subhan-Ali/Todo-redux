import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Submit, Remove, Edit } from "../../Feature/TodoSlice";
const ReduxToDo = () => {
  const [data, setData] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.Todo.list);

  const Handler = (event) => {
    setData(event.target.value);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
  };

  const Add = () => {
    if (data.trim() !== "") {
      if (editTodo !== null) {
        dispatch(Edit({ value: data, index: editTodo }));
        setData(list[editTodo]);
        setEditTodo(null);
      } else {
        dispatch(Submit(data));
      }
      setData("");
    }
  };

  const Edits = (index) => {
    setData(list[index]);
    setEditTodo(index);
  };

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        width: "400px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <form onSubmit={HandleSubmit}>
        <div
          style={{
            paddingTop: "50px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>
            <input
              type="text"
              onChange={(event) => Handler(event)}
              value={data}
              style={{ fontSize: "30px" }}
            />
          </div>
          <div>
            <button
              onClick={() => Add()}
              style={{
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                fontSize: "20px",
                border: "gray",
              }}
            >
              {editTodo !== null ? "Update" : "Submit"}
            </button>
          </div>
        </div>
        {list.map((value, index) => {
          return (
            <div key={index} style={{ display: "grid" }}>
              <div
                className="flex"
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "400px",
                  marginTop: "20px",
                }}
              >
                <div>
                  <h1 style={{ fontSize: "20px" }}>{value}</h1>
                </div>
                <div className="flex" style={{ gap: "10px" }}>
                  <div>
                    <button
                      onClick={() => dispatch(Remove(index))}
                      style={{
                        padding: "10px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      remove
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => Edits(index)}
                      style={{
                        padding: "10px",
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default ReduxToDo;
