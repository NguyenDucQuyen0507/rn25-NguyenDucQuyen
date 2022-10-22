import React, { useEffect, useState } from "react";

type Props = {
  // id: number;
  // name: string;
};

export default function GetUsers({}: Props) {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://63528f71a9f3f34c3741633b.mockapi.io/api/v1/users", {
      method: "GET",
    })
      // .then((res))
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error:", error);
      });
    // const data = response.json()
    console.log();
  }, [user]);
  return (
    <div>
      <table>
        <tbody>
          {user.map((item: any, id: number) => {
            return (
              <tr>
                <td style={{ border: "1px solid gray" }}>{item.id}</td>
                <td style={{ border: "1px solid gray" }} key={id}>
                  {item.name}
                </td>
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
