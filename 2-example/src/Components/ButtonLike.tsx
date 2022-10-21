import React, { useEffect, useState } from "react";
import * as ReactIcons from "react-icons/ai";
interface star {
  //   icon: JSX.Element;
}
function ButtonLike(props: star) {
  const [like, setLike] = useState(true); //có 2 gt là true và fasle nên dung kiu boolean  ban đầu chưa like
  //false là gid trị tương ứng của like
  const handleClick = () => {
    // console.log("Clicked");
    // setLike(like === false);
    setLike(!like);
  };

  // const [star, setStar] = useState({ color: "red" });
  // const { color } = star;
  // let Sao = [
  //   <ReactIcons.AiFillStar />,
  //   <ReactIcons.AiFillStar />,
  //   <ReactIcons.AiFillStar />,
  //   <ReactIcons.AiFillStar />,
  //   <ReactIcons.AiFillStar />,
  // ];
  // const handleClickStar = () => {
  //   for (let i = 0; i <= Sao.length; i++) {
  //     for (let j = i + 1; j <= Sao.length; j++) {}
  //   }
  // };
  //star
  //star = 0: 00000
  //star = 4: 11110
  //for(1 -> star: let i=1;i<=star;i++): in ra so 1
  //for(1 -> star: let i=st ar+1;i<=5;i++): in ra so 0
  return (
    <div>
      {/* <span style={{ color }}>{Sao}</span> */}
      <button onClick={handleClick}>
        {like ? <ReactIcons.AiOutlineLike /> : <ReactIcons.AiTwotoneLike />}
      </button>
      <span>{like ? 0 : 1}</span>
    </div>
  );
}

export default ButtonLike;
