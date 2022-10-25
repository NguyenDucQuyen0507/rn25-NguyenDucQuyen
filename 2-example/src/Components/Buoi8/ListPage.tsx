import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";
import Index from "./Index";
import { useNavigate } from "react-router-dom";
type Props = {};
interface Iuser {
  id: string;
  name: string;
}

export default function ListPage({}: Props) {
  const navi = useNavigate();
  const [getUser, setGetUser] = useState<Array<Iuser>>([]);

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    const url = "https://63528f71a9f3f34c3741633b.mockapi.io/api/v1/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setGetUser(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Dùng cho button Detail
  const gotoDetail = (id: string) => {
    // console.log(id);
    // navi là thư viện dùng để chuyển trang
    navi("detail/" + id);
  };

  const handleDelete = (id: string) => {
    const url =
      "https://63528f71a9f3f34c3741633b.mockapi.io/api/v1/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        response.json();
      })
      .then((json) => {
        //chúng ta sẽ có 2 cách
        console.log("delete success", json);
        // let arr = getUser.filter((user) => user.id !== json.id);
        // setGetUser(arr);
        // Gọi lại function getListUser để cập nhật lại data
        getListUser();
      });
  };
  const handleUpdate = (id: string) => {
    const url =
      "https://63528f71a9f3f34c3741633b.mockapi.io/api/v1/users/" + id;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "",
      }),
      // body: data
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(),
    })
      .then((response) => response.json())
      // .then((data) => {
      // })
      .then((data) => {
        getListUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const User = [
  //   {
  //     id: "1",
  //     name: "Nguyễn Đức Quyền",
  //   },
  //   {
  //     id: "2",
  //     name: "Nguyễn Đức Quyền Đẹp trai",
  //   },
  //   {
  //     id: "3",
  //     name: "Nguyễn Đức Quyền Lại Đẹp trai",
  //   },
  // ];
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">^_^</th>
          </tr>
        </thead>
        <tbody>
          {getUser.map((item: Iuser) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button
                  onClick={() => gotoDetail(item.id)}
                  type="button"
                  className="btn btn-primary m-3"
                >
                  Detail
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  type="button"
                  className="btn btn-danger m-3"
                >
                  Delete
                </button>
                <button
                  onClick={() => gotoDetail(item.id)}
                  type="button"
                  className="btn btn-warning"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <p>Name id: {getUser.id}</p>
      <p>Name user: {getUser.name}</p> */}
    </div>
  );
}
