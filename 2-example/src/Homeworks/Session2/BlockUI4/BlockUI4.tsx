import React from "react";

type Props = {};
interface chart {
  day?: string;
  number?: string;
  arrayChart: number[];
}
function BlockUI4(props: chart) {
  return (
    <div className={`container`}>
      <div
        className={`row d-inline-block text-center`}
        style={{ border: "1px solid gray", width: "400px" }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "pink",
            margin: "10px",
          }}
        >
          {props.day}
        </h2>
        <div className={`col-12 d-inline-flex justify-content-center `}>
          <div
            className={`d-flex flex-column-reverse`}
            style={{
              height: "150px",
              width: "40px",
              backgroundColor: "white",
              border: "1px solid gray",
              marginRight: "20px",
              margin: "10px",
            }}
          >
            <div
              style={{
                height: `${props.arrayChart[0]}%`,
                width: "100%",
                backgroundColor: "red",
                fontSize: "12px",
                color: "white",
              }}
            >
              {props.arrayChart[0]}%
            </div>
          </div>
          <div
            className={`d-flex flex-column-reverse`}
            style={{
              height: "150px",
              width: "40px",
              backgroundColor: "white",
              border: "1px solid gray",
              marginRight: "20px",
              margin: "10px",
            }}
          >
            <div
              style={{
                height: `${props.arrayChart[1]}%`,
                width: "100%",
                backgroundColor: "pink",
                fontSize: "12px",
                color: "white",
              }}
            >
              {" "}
              {props.arrayChart[1]}%
            </div>
          </div>
          <div
            className={`d-flex flex-column-reverse`}
            style={{
              height: "150px",
              width: "40px",
              backgroundColor: "white",
              border: "1px solid gray",
              marginRight: "20px",
              margin: "10px",
            }}
          >
            <div
              className=""
              style={{
                height: `${props.arrayChart[2]}%`,
                width: "100%",
                backgroundColor: "blue",
                fontSize: "12px",
                color: "white",
              }}
            >
              {" "}
              {props.arrayChart[2]}%
            </div>
          </div>
          <div
            className={`d-flex flex-column-reverse`}
            style={{
              height: "150px",
              width: "40px",
              backgroundColor: "white",
              border: "1px solid gray",
              marginTop: "10px",
            }}
          >
            <div
              className=""
              style={{
                height: `${props.arrayChart[3]}%`,
                width: "100%",
                backgroundColor: "green",
                fontSize: "12px",
                color: "white",
              }}
            >
              {" "}
              {props.arrayChart[3]}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockUI4;
