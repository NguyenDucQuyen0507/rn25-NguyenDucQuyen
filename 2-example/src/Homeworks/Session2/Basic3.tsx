import React from "react";
import Chandung from "../../assets/images/mechine.jpg";
type Props = {};

function Basic3({}: Props) {
  return (
    <div className="main__3">
      <div className="row p-4">
        <div className="col-12">
          <img src={Chandung} alt="ChanDung" className="main__2-img" />
        </div>
        <div className="col-12">
          <h2 className="main__3-name">Technogly</h2>
          <h3 className="main__3-size">Công nghệ của các bạn</h3>
          <div className="main__3-star">Ngày 11 tháng 10 năm 2022</div>
        </div>
      </div>
    </div>
  );
}

export default Basic3;
