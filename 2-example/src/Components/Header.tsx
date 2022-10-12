import React from "react";

type Props = {
  isLogin: boolean;
};

function Header({ isLogin }: Props) {
  return (
    <div className="header">
      <button className={`btn ${isLogin ? "btn-success" : "btn-dark"}`}>
        {isLogin ? "LOG OUT" : "LOG IN"}
      </button>
      {/* <div className="btn btn-success">LOG IN</div>
      <div className="btn btn-dark">LOG OUT</div> */}
    </div>
  );
}

export default Header;
