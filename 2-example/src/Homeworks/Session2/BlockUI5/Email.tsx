import React from "react";

type Props = {};
interface email {
  text?: string;
  address?: string;
  text1?: string;
  address1?: string;
}
function Email(props: email) {
  return (
    <div style={{ padding: "5px" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "red",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <p style={{ margin: "0px", fontWeight: "bold", color: "white" }}>
          {props.text}
        </p>
        <p
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
            margin: "0px",
          }}
        >
          {props.address}
        </p>
      </div>
      <div style={{ width: "100%", backgroundColor: "green", padding: "5px" }}>
        <p style={{ margin: "0px", fontWeight: "bold", color: "white" }}>
          {props.text1}
        </p>
        <p
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
            margin: "0px",
          }}
        >
          {props.address1}
        </p>
      </div>
    </div>
  );
}

export default Email;
