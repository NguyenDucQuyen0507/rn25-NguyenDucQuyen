import React from "react";
"react-icons/fa";
type Props = {};
interface UserInterFace {
  icon?: JSX.Element;
  icon1: JSX.Element;
  icon2: JSX.Element;
  icon3: JSX.Element;
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
          <div style={{ backgroundColor: props.color, height: "250px" }}>
            <div
              style={{ color: "white", fontSize: "40px", paddingLeft: "20px" }}
            >
              {props.icon}
            </div>
            <div
              style={{
                marginTop: "125px",
                paddingLeft: "20px",
                fontSize: "20px",
                color: "white",
              }}
            >
              {props.text}
            </div>
            <span
              style={{
                paddingLeft: "20px",
                fontSize: "15px",
                color: "white",
              }}
            >
              5,000,000 like
            </span>
          </div>
        </div>
        <div className={`col-4 col-md-3`}>
          <div style={{ backgroundColor: props.color1, height: "250px" }}>
            <div
              style={{ color: "white", fontSize: "40px", paddingLeft: "20px" }}
            >
              {props.icon1}
            </div>
            <div
              style={{
                marginTop: "125px",
                paddingLeft: "20px",
                fontSize: "20px",
                color: "white",
              }}
            >
              {props.text1}
            </div>
            <span
              style={{
                paddingLeft: "20px",
                fontSize: "15px",
                color: "white",
              }}
            >
              4,000,000 like
            </span>
          </div>
        </div>
        <div className={`col-4 col-md-3`}>
          <div style={{ backgroundColor: props.color2, height: "250px" }}>
            <div
              style={{ color: "white", fontSize: "40px", paddingLeft: "20px" }}
            >
              {props.icon2}
            </div>
            <div
              style={{
                marginTop: "125px",
                paddingLeft: "20px",
                fontSize: "20px",
                color: "white",
              }}
            >
              {props.text2}
            </div>
            <span
              style={{
                paddingLeft: "20px",
                fontSize: "15px",
                color: "white",
              }}
            >
              3,000,000 like
            </span>
          </div>
        </div>
        <div className={`col-4 col-md-3`}>
          <div style={{ backgroundColor: props.color3, height: "250px" }}>
            <div
              style={{ color: "white", fontSize: "40px", paddingLeft: "20px" }}
            >
              {props.icon3}
            </div>
            <div
              style={{
                marginTop: "125px",
                paddingLeft: "20px",
                fontSize: "20px",
                color: "white",
              }}
            >
              {props.text3}
            </div>
            <span
              style={{
                paddingLeft: "20px",
                fontSize: "15px",
                color: "white",
              }}
            >
              2,500,000 like
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block;
