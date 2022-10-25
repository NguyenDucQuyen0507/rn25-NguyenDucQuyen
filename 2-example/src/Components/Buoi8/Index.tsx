import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import List from "./ListPage";
import Login from "../Buoi7/Login";
import Detail from "./DetailUser";
import DetailUser from "./DetailUser";
type Props = {};

function Index() {
  return (
    <div>
      <BrowserRouter>
        <ul
          className="container-fluid"
          style={{
            background: "blue",
            padding: "10px 400px",
            display: "flex",
            textDecoration: "none",
            listStyle: "none",
            justifyContent: "space-between",
          }}
        >
          <li>
            <Link
              style={{
                listStyle: "none",
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
              to="/"
            >
              List
            </Link>
          </li>
          <li>
            <Link
              style={{
                listStyle: "none",
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
              to="/form"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              style={{
                listStyle: "none",
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
              to="/detail"
            >
              Detail
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/form" element={<Login />} />
          <Route path="/detail/:id" element={<DetailUser />} />
          <Route
            //   Khi nòa đường dẫn ái nó sẽ qua trang này

            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Index;
