import React from "react";

type Props = {};

function BlockUI1({}: Props) {
  return (
    <div className="block1">
      {/* <div className=""></div> */}
      <div className="block__name">BANDWIDTH</div>
      <div className="block__percent">
        <div className="block__20">20%</div>
        <span className="block__80"></span>
      </div>
      <div className="block__storge">STORAGE</div>
      <div className="block__percent">
        <div className="block__50">50%</div>
        <span className="block__505"></span>
      </div>
      <div className="block__user">USERS</div>
      <div className="block__percent">
        <div className="block__70">70%</div>
        <span className="block__30"></span>
      </div>
      <div className="block__email">EMAIL</div>
      <div className="block__percent">
        <div className="block__303">30%</div>
        <span className="block__707"></span>
      </div>
      <div className="block__basic">BASIC</div>
      <div className="block__percent">
        <div className="block__40">40%</div>
        <span className="block__60"></span>
      </div>
    </div>
  );
}

export default BlockUI1;
