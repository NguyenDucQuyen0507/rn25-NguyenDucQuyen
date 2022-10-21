import React, { useState } from "react";

function Form() {
  const [text, setText] = useState(" ");
  const [check, setCheck] = useState<boolean>(false);
  const handleSubmit = (event: any) => {
    event.preventDefault(); // ngăn chặn load lại trang

    console.log(event);
  };
  const handleText = (event: any) => {
    setText(event.target.value);
  };
  const handleCheck = (event: any) => {
    setCheck(event.target.checked);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleText} />
        <input
          type="checkBox"
          //   value={check}
          name="name"
          id=""
          onChange={handleCheck}
        />
        <input type="checkBox" name="name" id="" onChange={handleCheck} />
        <input type="checkBox" name="name" id="" onChange={handleCheck} />
        <input type="radio" name="name1" id="" onChange={handleCheck} />
        <input type="radio" name="name1" id="" onChange={handleCheck} />
        <input type="radio" name="name1" id="" onChange={handleCheck} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Form;
