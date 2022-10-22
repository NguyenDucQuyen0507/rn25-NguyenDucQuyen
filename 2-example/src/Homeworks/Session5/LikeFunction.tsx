import React, { useEffect, useState } from "react";
import * as ReactIcons from "react-icons/ai";
interface star {
  //   icon: JSX.Element;
}
function LikeFuntcion(props: star) {
  const [like, setLike] = useState(true); //có 2 gt là true và fasle nên dung kiu boolean  ban đầu chưa like
  //false là gid trị tương ứng của like
  const handleClick = () => {
    // console.log("Clicked");
    // setLike(like === false);
    setLike(!like);
  };
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

export default LikeFuntcion;
