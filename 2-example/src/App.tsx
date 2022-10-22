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
import BlockUI4 from "./Homeworks/Session2/BlockUI4/BlockUI4";
import BlockUI5 from "./Homeworks/Session2/BlockUI5/BlockUI5";
import BlockUI6 from "./Homeworks/Session2/BlockUI6/BlockUI6";
import BlockUI7 from "./Homeworks/Session2/BlockUI7/BlockUI7";
import CountDown from "./Components/CountDown";
import LifecyCountDown from "./Components/LifecyCountDown";
import LifecyCountDownFunction from "./Components/LifecyCountDownFunction";
import Practive from "./Components/Practive";
import ButtonLike from "./Components/ButtonLike";
import Star from "./Components/Star";
import Form from "./Components/Buoi6/Form";
import ClassComponent from "./Homeworks/Session3/ClassComponentLike";
import ClassComponentImg from "./Homeworks/Session3/ClassComponentImg";
import FormUI from "./Homeworks/Session6/FormUI";
import GetUsers from "./Homeworks/Session7/GetUsers";
import SimpleExample from "./Components/Buoi6/SimpleExample";
import MultipleInputFieldsExample from "./Components/Buoi6/MultipleInputFieldExample";
import FormMilk from "./Components/Buoi6/FormMilk";
import Login from "./Components/Buoi7/Login";
import BtnGetUsers from "./Homeworks/Session7/BtnGetUsers";
function App() {
  // let style = { color: "red", fontSize: 20 };
  // let isLogin = true;

  // function isSnt(n: number) {
  //   var dem = 0;
  //   if (n < 2) return false;
  //   for (let i = 0; i <= n; i++) {
  //     if (n % i == 0) {
  //       dem++;
  //     } else {
  //     }
  //   }
  //   if (dem == 2) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // var snt = [10, 5, 7, 2, 1];
  // function isSntArray(arr: number[]) {
  //   console.log("Các số nguyên tố có trong mảng " + arr + " là: ");
  //   for (let i = 0; i < arr.length; i++) {
  //     if (isSnt(arr[i]) == true) {
  //       console.log(arr[i]);
  //     } else {
  //     }
  //   }
  // }
  // // Snt(snt);
  // isSntArray(snt);

  // function isSdx(n: number) {
  //   // var temp,
  //   //   keep,
  //   //   reverse = 0;
  //   let temp: number = 0;
  //   let reverse: number = 0;
  //   let keep: number = 0;
  //   temp = n;
  //   while (temp != 0) {
  //     keep = temp % 10;
  //     reverse = reverse * 10 + keep;
  //     temp = temp / 10;
  //     console.log(keep, reverse, temp);
  //   }
  //   console.log(keep, reverse);
  //   // console.log(n, temp);
  //   if (reverse == n) {
  //     console.log(n + " là số đối xứng");
  //   } else {
  //     console.log(n + " không phải là số đối xứng");
  //   }
  // }
  // isSdx(111);
  // Mua xăng
  // N=7
  // 1L:3
  // 2L:4
  // case 1: b<= 2a ->b
  // 3 2L: 1 1L : 15
  // 3: phan nguyen 7/2 ?? parsetInt(7/2) *b

  // case2: b >2a ->a
  // N *a

  return (
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
      {/* <BlockUI3
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
      /> */}
      {/* <BlockUI4
        day="TODAY VISTORS"
        number="123"
        arrayChart={[50, 10, 30, 80]}
      /> */}
      {/* <BlockUI5 />
      <BlockUI6
        title="Quyen"
        text="nguyen duc quyen"
        size="XL/X"
        icon={[<ReactIcons.FaDollarSign />, <ReactIcons.FaCartPlus />]}
        money={20}
        button="Add To Cart"
      /> */}
      {/* <BlockUI7
        shop="YOUNG SHOP"
        icon={<ReactIcons.FaDollarSign />}
        money1={[1.422, 96]}
        money2={[1.0025]}
        moneySale="18% off"
        brand="LG White Front Load Steam Washer"
        star={[
          <ReactIcons.FaStar />,
          <ReactIcons.FaStar />,
          <ReactIcons.FaStar />,
          <ReactIcons.FaStar />,
          <ReactIcons.FaStarHalfAlt />,
        ]}
        sold={10}
        range={[50]}
      /> */}
      {/* <CountDown /> */}
      {/* <LifecyCountDown /> */}
      {/* <LifecyCountDownFunction /> */}
      {/* <Practive count={0} /> */}
      {/* <ButtonLike
      // icon={<ReactIcons.Lik />}
      /> */}
      {/* <Star /> */}

      {/* <Form /> */}
      {/* <ClassComponent />
      <ClassComponentImg /> */}
      {/* <FormUI /> */}
      {/* <SimpleExample /> */}
      {/* <MultipleInputFieldsExample /> */}
      {/* <FormMilk /> */}
      {/* <Login /> */}
      {/* <GetUsers /> */}
      <BtnGetUsers />
    </>
  );
}

export default App;
