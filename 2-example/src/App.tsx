import React from "react";
// import logo from "./logo.svg";
// import img from "./logo1.png";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import "./App.css";
import Basic1 from "./Homeworks/Session2/Basic1";
import Basic2 from "./Homeworks/Session2/Basic2";
import Basic3 from "./Homeworks/Session2/Basic3";
import BlockUI1 from "./Homeworks/Session2/BlockUI1";
import BlockUI2 from "./Homeworks/Session2/BlockUI2";
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
      <Basic1 />
      <Basic2 />
      <Basic3 />
      <BlockUI1 />
      <BlockUI2 />
    </>
  );
}

export default App;
