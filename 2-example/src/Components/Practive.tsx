import React, { useEffect, useState } from "react";
interface Number {
  count: number;
}
function Practive(props: Number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("ComponentDidMount");
    return () => {
      console.log("ComponentWillUnmount");
    };
  }, []);
  useEffect(() => {
    console.log("DidUpdate");
    // chạy n lần.
    //nếu bỏ setState(giá trị thay đổi) nó sẽ chạy vô hạn
  });
  useEffect(() => {
    console.log("ComponentDidUpdate");
    // dc chạy khi state(Depences thay đổi)
  }, [count]);
  const handleClick = () => {
    console.log("Ok");
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button
        id="btn"
        onClick={handleClick}
        disabled={count >= 4 ? true : false}
      >
        Click me!
      </button>
    </div>
  );
}

export default Practive;
