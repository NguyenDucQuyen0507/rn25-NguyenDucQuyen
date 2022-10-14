import React from "react";
import Image from "./Image";
import Information from "./Information";
import Email from "./Email";
import * as ReactIcons from "react-icons/fa";
import { icons } from "react-icons/lib";
type Props = {};

function BlockUI5({}: Props) {
  return (
    <div className="container">
      <div
        className=""
        style={{
          width: "200px",
          boxShadow: "3px 0px #f5ecec",
          //   padding: "10px",
        }}
      >
        <Image text="ROBORT PATTISION" text1="Developing" />
        <Information
          icon={[
            <ReactIcons.FaCalendar />,
            <ReactIcons.FaHeartbeat />,
            <ReactIcons.FaGraduationCap />,
            <ReactIcons.FaMap />,
          ]}
          text={["DOB", "BG", "EDU", "RES"]}
          dateTime={["1/1/1", "2/2/2", "3/3/3", "4/4/4"]}
        />
        <Email
          text="Email ID"
          address="nguyenducquyen2k1@gmail.com"
          text1="PHONE NQ"
          address1="123456789"
        />
      </div>
    </div>
  );
}

export default BlockUI5;
