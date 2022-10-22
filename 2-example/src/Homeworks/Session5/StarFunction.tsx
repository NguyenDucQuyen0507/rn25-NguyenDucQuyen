import React, { useState } from "react";
import * as faIcon from "react-icons/fa";
function StarFunction() {
  const starDefault = {
    display: "inline",
    fontSize: "24px",
    margin: "4px",
    marginRight: "1px",
    cursor: "pointer",
    // color: "yellow",
  };
  const starSelect = {
    display: "inline",
    fontSize: "24px",
    margin: "4px",
    marginRight: "8px",
    cursor: "pointer",
    color: "yellow",
  };

  const [star, setStar] = useState(3); //
  const starIcon: JSX.Element[] = [];
  for (let index = 1; index <= 5; index++) {
    starIcon.push(
      <faIcon.FaStar
        onClick={() => {
          setStar(index);
        }}
        style={index <= star ? starSelect : starDefault}
      />
    );
  }
  return (
    <>
      <div className="text-center">
        {starIcon}
        <p>{star}</p>
      </div>
    </>
  );
  // var arrStar = [1, 2, 3, 4, 5];
  // return (
  //   <div>
  //     {arrStar.map((index) => {
  //       return index < star ? <faIcon.FaStar /> : <faIcon.FaStarHalf />;
  //     })}
  //   </div>
  // );
}

export default StarFunction;
