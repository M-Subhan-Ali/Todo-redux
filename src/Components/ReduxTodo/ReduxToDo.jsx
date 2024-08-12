import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Submit } from "../../Feature/TodoSlice";
const ReduxToDo = () => {
  const [data, setData] = useState("");
  const [store, setStore] = useState([]);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.Todo.list);

  const Handler = (event) => {
    setData(event.target.value);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    dispatch(Submit(data));
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
              type="submit"
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
              Submit
            </button>
          </div>
        </div>
        {todo.map((value, index) => {
          return (
            <div style={{ display: "grid" }}>
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
                  <h1 style={{ fontSize: "20px" }}>{data}</h1>
                </div>
                <div className="flex" style={{ gap: "10px" }}>
                  <div>
                    <button
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
