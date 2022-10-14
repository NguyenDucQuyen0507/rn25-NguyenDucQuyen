import React from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import * as ReactIcons from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./App.css";
import "./Homeworks/Session2/Basic.css";
import Basic1 from "./Homeworks/Session2/Basic1";
import Basic2 from "./Homeworks/Session2/Basic2";
import Basic3 from "./Homeworks/Session2/Basic3";
import BlockUI1 from "./Homeworks/Session2/BlockUI1";
import Index from "./Homeworks/Session2/BlockUI2/Index";
import BlockUI3 from "./Homeworks/Session2/BlockUI3/Block";
import BlockUI4 from "./Homeworks/BlockUI4/BlockUI4";
import BlockUI5 from "./Homeworks/Session2/BlockUI5/BlockUI5";
import CountDown from "./Components/CountDown";
import LifecyCountDown from "./Components/LifecyCountDown";
import LifecyCountDownFunction from "./Components/LifecyCountDownFunction";
function App() {
  let style = { color: "red", fontSize: 20 };
  let isLogin = true;
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img style={style} src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    //   <div className="header"></div>
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-12 col-md-3 col-sm-6">
    //         <ul className="session-list">
    //           <li className="session-item">The Drive</li>
    //           <li className="session-item">The Walk</li>
    //           <li className="session-item">The Return</li>
    //           <li className="session-item">The End</li>
    //         </ul>
    //       </div>
    //       <div className="col-12 col-md-6 col-sm-6">
    //         <h1 className="session-main">The walk</h1>
    //         <p className="session-content">
    //           Bootstrap employs a handful of important global styles and
    //           settings, all of which are almost exclusively geared towards the
    //           normalization of cross browser styles. Let’s dive in.
    //         </p>
    //         <img
    //           className="session-img"
    //           // src="https://a.cdn-hotels.com/gdcs/production181/d458/10eb7c5f-a291-46d5-ae63-83f6e4555fa2.jpg"
    //           src={img}
    //           alt="Street NewYork"
    //         />
    //       </div>
    //       <div className="col-12 col-md-3 col-sm-6 ">
    //         <ul className="session-aisde bg-info">
    //           <li className="session-list-quesion">What</li>
    //           <li className="session-aside-question">What is your name?</li>
    //           <li className="session-list-quesion">Where</li>
    //           <li className="session-aside-question">Where do you live?</li>
    //           <li className="session-list-quesion">Price</li>
    //           <li className="session-aside-question">How much to buy a car?</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="footer">
    //     <h1 className="footer-end">@2022 ApTech DA NANG</h1>
    //   </div>
    // </div>

    // <>
    //   <Header isLogin={isLogin} />
    //   <Content />
    //   <Footer />
    // </>
    <>
      {/* Baif tap VN */}
      {/* <Basic1 />
      <Basic2 />
      <Basic3 />
      <BlockUI1 />
      <BlockUI2 /> */}
      {/* <BlockUI1 />
      <Index
        text="Color"
        color="pink"
        color1="rgb(206, 85, 105)"
        percent={10}
      /> */}
      {/* <Index text="Red" color="red" color1="rgb(241, 49, 81)" percent={50} />
      <Index text="Black" color="black" color1="rgb(39, 15, 19)" percent={60} /> */}
      <BlockUI3
        icon={<ReactIcons.FaFacebook />}
        icon1={<ReactIcons.FaTwitter />}
        icon2={<ReactIcons.FaGoogle />}
        icon3={<ReactIcons.FaPinterest />}
        color="rgb(51, 65, 223)"
        color1="rgb(71, 178, 235)"
        color2="rgb(217, 247, 110)"
        color3="rgb(253, 125, 230)"
        text="FaceBook And You"
        text1="Twitter And You"
        text2="Google And You"
        text3="Pinterest And You"
      />
      <BlockUI4
        day="TODAY VISTORS"
        number="123"
        arrayChart={[50, 10, 30, 80]}
      />
      <BlockUI5 />
      {/* <CountDown /> */}
      {/* <LifecyCountDown /> */}
      {/* <LifecyCountDownFunction /> */}
    </>
  );
}

export default App;
