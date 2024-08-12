import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");
  const [store, setStore] = useState([]);
  const [edit, setEdit] = useState(null);
  const Handler = (event) => {
    const currentText = event.target.value;
    setData(currentText);
  };
  const Submit = () => {
    if (data.trim() !== "") {
      if (edit !== null) {
        setStore((hehe) =>
          hehe.map((value, index) => (index === edit ? data : value))
        );
        setEdit(null);
      } else {
        setStore((value) => [...value, data]);
      }
      setData("");
    }
  };

  const MainHandler = (event) => {
    event.preventDefault();
  };
  const Remove = (id) => {
    setStore((hehe) => hehe.filter((item, index) => index !== id));
  };
  const Edit = (index) => {
    setData(store[index]);
    setEdit(index);
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
      <form onSubmit={MainHandler}>
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
              onClick={() => Submit()}
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
        {store.map((value, index) => {
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
                      onClick={() => Remove(index)}
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
                      onClick={() => Edit(index)}
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

export default Todo;
