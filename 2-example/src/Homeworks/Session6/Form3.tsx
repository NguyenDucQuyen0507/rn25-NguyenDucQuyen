import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../assets/images/grovia.jpg";
import logo from "../../assets/images/logo.jpg";
type Props = {};

function Form3({}: Props) {
  const SignupSchema = Yup.object({
    // email: Yup.string()
    //   .email("Invalid email")
    //   .required("Required"),
    password: Yup.string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    // passwordConfirmation: Yup.string().oneOf(
    //   [Yup.ref("password"), null],
    //   "Passwords must match"
    // ),
    name: Yup.string()
      // .min(2, "The name must be unique and between 3 - 128 characters")
      // .max(128, "The name must be unique and between 3 - 128 characters")
      .min(2, "Mininum 2 characters")
      .max(15, "Maximum 15 characters")
      .required("The name is not blank"),
    // lastName: Yup.string().required("The last name is not blank"),
    // number: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <div className="container-fluid p-5 bg-info bg-opacity-10">
        <div className="row">
          <div className="col-8">
            <img src={logo} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-4 bg-white">
            <form action="" onSubmit={formik.handleSubmit}>
              <div>
                <img src={Logo} alt="" style={{ width: "200px" }} />
                <h2
                  style={{ fontSize: "25px", color: "red", margin: "20px 0" }}
                >
                  Login
                </h2>
                <h3 style={{ fontSize: "20px", color: "#1a0f6a" }}>
                  Login to your account
                </h3>
                <p style={{ fontSize: "15px", color: "gray" }}>
                  Thank you for get back Grovia access
                </p>
                <h3
                  style={{ fontSize: "15px", color: "gray", fontWeight: "300" }}
                >
                  Username
                </h3>
                <input
                  type="text"
                  name="name"
                  id=""
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px" }}
                />
                <p style={{ margin: "0px", color: "red", fontSize: "15px" }}>
                  {/* {formik.errors.name ?? null} */}
                  {formik.touched.name ? formik.errors.name : null}
                </p>
                <h3
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    fontWeight: "300",
                  }}
                >
                  Password
                </h3>
                <input
                  type="password"
                  name="password"
                  id=""
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "300px" }}
                />
                <p style={{ margin: "0px", color: "red", fontSize: "15px" }}>
                  {formik.touched.password ? formik.errors.password : null}
                </p>
                <div
                  style={{
                    display: "flex",
                    margin: "15px 0",
                    width: "300px",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </div>
                  <span style={{ color: "red", fontSize: "15px" }}>
                    Resert PassWord?
                  </span>
                </div>
                {/* <div style={{ width: "100%" }}> */}
                <button
                  style={{
                    width: "300px",
                    margin: "20px 0",
                    border: "none",
                    background: "red",
                    color: "white",
                    textAlign: "center",
                    padding: "10px 0",
                  }}
                >
                  SIGN IN
                </button>
                {/* </div> */}
                <p style={{ fontSize: "15px" }}>
                  Don't have an account yet? Join Grovia Now
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form3;
