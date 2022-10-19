import React from "react";
import { useState } from "react";
type Props = {};
interface Object {
  number: number;
}
function LifecyCountDownFunction() {
  const [numberState, useNumberState] = useState<Object>({
    number: 100,
  });

  const handleClick = () => {
    useNumberState({ ...numberState, number: numberState.number + 1 });
  };
  return (
    <div>
      <p>{numberState.number}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default LifecyCountDownFunction;
