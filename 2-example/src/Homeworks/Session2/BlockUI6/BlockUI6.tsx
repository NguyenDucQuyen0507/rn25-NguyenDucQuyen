import React from "react";
import Phunu from "../../../assets/images/phunu.jpg";
type Props = {};

interface Cart {
  title?: string;
  text?: string;
  size?: string;
  icon: JSX.Element[];
  money?: number;
  button?: string;
}
function BlockUI6(props: Cart) {
  return (
    <div className={`container`}>
      <div
        className=""
        style={{
          width: "300px",
          padding: "20px",
          textAlign: "center",
          border: "1px solid gray",
        }}
      >
        <img
          src={Phunu}
          alt="woman"
          style={{ width: "100%", height: "300px" }}
        />
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "black",
            margin: "10px 0",
          }}
        >
          {props.title}
        </h2>
        <p
          style={{
            color: "gray",
            fontSize: "10px",
            marginBottom: "12px",
          }}
        >
          {props.text}
        </p>
        <p style={{ fontWeight: "bold" }}>{props.size}</p>
        <p>
          {props.icon[0]}
          {props.money}
        </p>
        <button
          style={{
            display: "flex",
            margin: "0 auto",
            padding: "7px 20px",
            alignItems: "center",
            color: "white",
            backgroundColor: "green",
            //outline: "none",
            border: "none",
          }}
        >
          {props.icon[1]}
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default BlockUI6;
