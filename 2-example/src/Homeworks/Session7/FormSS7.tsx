import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
type Props = {};

export default function Form({}: Props) {
  const SignupSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email Address is required"),
    password: Yup.string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const [loadDB, setLoadDB] = useState([]);
      useEffect(() => {
        fetch("https://63528f71a9f3f34c3741633b.mockapi.io/api/v1/users", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            setLoadDB(data);
            console.log(data);
          })
          .catch((error) => {
            console.log("Error:", error);
          });
      }, []);
      console.log(values);
    },
  });
  return (
    <div>
      <div
        className=""
        style={{ width: "800px", margin: "auto", paddingTop: "30px" }}
      >
        <form action="">
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Email
              </h2>
              <input
                style={{ width: "300px" }}
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p style={{ margin: "0px", color: "red" }}>
                {formik.touched.email ? formik.errors.email : null}
              </p>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Password
              </h2>
              <input
                style={{ width: "300px" }}
                type="password"
                name="password"
                id=""
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p style={{ margin: "0px", color: "red" }}>
                {formik.touched.password ? formik.errors.password : null}
                {/* {formik.errors.password ?? null} */}
              </p>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p style={{ textAlign: "center" }}>Address</p>
            <input style={{ width: "100%" }} type="text" />
          </div>
          <div style={{ marginTop: "30px" }}>
            <p style={{ textAlign: "center" }}>Address2</p>
            <input style={{ width: "100%" }} type="text" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                City
              </h3>
              <input type="select" />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                District
              </h3>
              <input type="select" />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Commune
              </h3>
              <input type="select" />
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <input style={{ width: "30px" }} type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Check me out</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                marginTop: "30px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                padding: "5px 15px",
                borderRadius: "5px",
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
