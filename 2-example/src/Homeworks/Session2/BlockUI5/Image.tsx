import React from "react";
import img from "../../../assets/images/ao1.jpg";
type Props = {};
interface Img {
  text?: string;
  text1?: string;
}

function Image(props: Img) {
  return (
    <div>
      <img src={img} alt="" style={{ width: "200px", height: "150px" }} />
      <p style={{ textAlign: "center", marginBottom: "0px" }}>{props.text}</p>
      <p style={{ textAlign: "center" }}>{props.text1}</p>
    </div>
  );
}

export default Image;
