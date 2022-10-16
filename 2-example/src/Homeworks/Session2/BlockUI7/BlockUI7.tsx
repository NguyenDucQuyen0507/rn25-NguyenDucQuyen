import React from "react";
import Maygic from "../../../assets/images/maygiac.png";
import Loa from "../../../assets/images/loa.png";
import Camera from "../../../assets/images/camera.jpg";
type Props = {};
interface Equiment {
  shop?: string;
  money1: number[];
  money2?: number[];
  moneySale?: string;
  brand?: string;
  icon?: JSX.Element;
  star?: JSX.Element[];
  range: number[];
  sold?: number;
}

function BlockUI7(props: Equiment) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-4 shadow">
          <div className="">
            <img
              src={Camera}
              alt=""
              style={{ width: "100%", padding: "30px" }}
            />
            <h2
              style={{
                fontSize: "20px",
                marginTop: "20px",
                fontWeight: "300",
              }}
            >
              {props.shop}
            </h2>
          </div>
          <div
            style={{ backgroundColor: "gray", height: "1px", margin: " 5px 0" }}
          ></div>
          <div className="">
            <span style={{ color: "green" }}>
              {props.icon}
              {props.money1[0]}
            </span>
            <span
              style={{
                color: "gray",
                fontSize: "12px",
                textDecorationLine: "line-through",
              }}
            >
              {props.icon}
              {props.money2}
            </span>
            <span style={{ color: "red" }}>{props.moneySale} off</span>
          </div>
          <div className="">
            <p style={{ padding: "10px 0 10px", margin: "0px" }}>
              {props.brand}
            </p>
            <span style={{ color: "yellow" }}>{props.star}</span>
            <div
              className=""
              style={{
                width: "100%",
                height: "5px",
                margin: "10px 0",
                backgroundColor: "#bab1b1",
              }}
            >
              <div
                style={{
                  width: `${props.range[0]}%`,
                  backgroundColor: "orange",
                  height: "100%",
                }}
              ></div>
            </div>
            <span>Sold: {props.sold}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockUI7;
