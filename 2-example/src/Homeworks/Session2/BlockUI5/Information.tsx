import React from "react";
import { icons } from "react-icons/lib";
type Props = {};
interface Information {
  icon: JSX.Element[];
  text: string[];
  dateTime: string[];
}
function Information(props: Information) {
  return (
    <div style={{ padding: "5px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="" style={{ display: "flex" }}>
          <div className="" style={{ marginRight: "5px" }}>
            {props.icon[0]}
          </div>
          <div>{props.text[0]}</div>
        </div>
        <div>{props.dateTime[0]}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="" style={{ display: "flex" }}>
          <div className="" style={{ marginRight: "5px" }}>
            {props.icon[1]}
          </div>
          <div>{props.text[1]}</div>
        </div>
        <div>{props.dateTime[1]}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="" style={{ display: "flex" }}>
          <div className="" style={{ marginRight: "5px" }}>
            {props.icon[2]}
          </div>
          <div>{props.text[2]}</div>
        </div>
        <div>{props.dateTime[2]}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="" style={{ display: "flex" }}>
          <div className="" style={{ marginRight: "5px" }}>
            {props.icon[3]}
          </div>
          <div>{props.text[3]}</div>
        </div>
        <div>{props.dateTime[3]}</div>
      </div>
    </div>
  );
}

export default Information;
