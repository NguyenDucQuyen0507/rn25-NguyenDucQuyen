import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
"react-icons/fa";
type Props = {};
interface UserInterFace {
  icon?: string;
  icon1: string;
  icon2: string;
  icon3: string;
  color?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
}

function Block(props: UserInterFace) {
  return (
    <div className={`container mt-5`}>
      <div className={`row`}>
        <div className={`col-4 col-md-3`}>
          <div
            className=""
            style={{ backgroundColor: props.color, height: "150px" }}
          >
            <FaFacebookSquare />
            <AiFillTwitterCircle />
          </div>
          <div className="">{props.text}</div>
        </div>
        <div className={`col-4 col-md-3`}>
          <div
            className=""
            style={{ backgroundColor: props.color1, height: "150px" }}
          >
            <FaFacebookSquare />
            <AiFillTwitterCircle />
          </div>
          <div className="">{props.text1}</div>
        </div>
        <div className={`col-4 col-md-3`}></div>
        <div className={`col-4 col-md-3`}></div>
      </div>
    </div>
  );
}

export default Block;
