import React from "react";
import img1 from "../logo1.png";
type Props = {};

function Content({}: Props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-3 col-sm-6">
          <ul className="session-list">
            <li className="session-item">The Drive</li>
            <li className="session-item">The Walk</li>
            <li className="session-item">The Return</li>
            <li className="session-item">The End</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-sm-6">
          <h1 className="session-main">The walk</h1>
          <p className="session-content">
            Bootstrap employs a handful of important global styles and settings,
            all of which are almost exclusively geared towards the normalization
            of cross browser styles. Let’s dive in.
          </p>
          <img
            className="session-img"
            // src="https://a.cdn-hotels.com/gdcs/production181/d458/10eb7c5f-a291-46d5-ae63-83f6e4555fa2.jpg"
            src={img1}
            alt="Street NewYork"
          />
        </div>
        <div className="col-12 col-md-3 col-sm-6 ">
          <ul className="session-aisde bg-info">
            <li className="session-list-quesion">What</li>
            <li className="session-aside-question">What is your name?</li>
            <li className="session-list-quesion">Where</li>
            <li className="session-aside-question">Where do you live?</li>
            <li className="session-list-quesion">Price</li>
            <li className="session-aside-question">How much to buy a car?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content;
