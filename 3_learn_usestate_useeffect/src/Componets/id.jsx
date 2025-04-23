import { useState } from "react";

const Id = () => {
  const [count, setCount] = useState(0);

  const incerment = () => {

    if (count < 100) {
      setCount(count + 1);
    } else {
      console.log("greater them 100");
    }
  };
  const decerment = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("less then 0");
    }
  };


  return (
    <>
      <div className="card">
        <h1>{count}</h1>
        <button style={{ marginLeft: "10px" }} onClick={incerment}>
          incerment
        </button>
        <button onClick={decerment}> decrement </button>
      </div>
    </>
  );
};

export default Id;
