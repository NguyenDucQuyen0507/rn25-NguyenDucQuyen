import React, { useState } from "react";
import GetUsers from "./GetUsers";

type Props = {};

export default function BtnGetUsers({}: Props) {
  const [btnuser, setBtnUser] = useState(false);

  return (
    <div>
      <button onClick={() => setBtnUser(!btnuser)}>Render</button>
      {btnuser ? <GetUsers /> : null}
    </div>
  );
}
