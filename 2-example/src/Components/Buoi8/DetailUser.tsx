import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface Iuser {
  id: string;
  name: string;
}
function DetailUser() {
  let params = useParams();

  const [getUser, setGetUser] = useState<Iuser>({
    id: "",
    name: "",
  });
  useEffect(() => {
    const url =
      "https://63528f71a9f3f34c3741633b.mockapi.io/api/v1/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setGetUser(data);
        // setGetUser là khi ta muốn thay đổi giá trị
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>Name id: {getUser.id}</p>
      {/* <p onChange={()=>()}>Name user: {getUser.name}</p> */}
      <span>Name user: </span>
      <input
        style={{ border: "none" }}
        type="text"
        value={getUser.name}
        onChange={(e) => {
          setGetUser(e.target);
        }}
        // onChange={(e) => {
        //   //   console.log(e.target.value);
        // //   console.log(setValueinput(e.target.value));
        // }}
      />
    </div>
  );
}

export default DetailUser;
