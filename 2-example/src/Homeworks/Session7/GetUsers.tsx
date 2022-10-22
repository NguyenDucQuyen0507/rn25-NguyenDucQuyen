import { type } from "os";
import React, { useEffect, useState } from "react";
import { array } from "yup";

type Props = {
  // id: number;
  // name: string;
};
interface type {
  id: number;
  name: string;
}

export default function GetUsers({}: Props) {
  const [users, setUsers] = useState<Array<type>>([]);
  useEffect(() => {
    // fetch("https://63528f71a9f3f34c3741633b.mockapi.io/api/v1/users", {
    //   method: "GET",
    // })
    // nên dùng method: "GET"
    fetch("https://63528f71a9f3f34c3741633b.mockapi.io/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // console.log(user);
    // const data = response.json()
  }, []);
  return (
    <div>
      <table>
        <tbody>
          {users.map((item: type, id: number) => {
            return (
              <tr key={id}>
                <td style={{ border: "1px solid gray" }}>{item.id}</td>
                <td style={{ border: "1px solid gray" }}>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <ul>
        {user.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
