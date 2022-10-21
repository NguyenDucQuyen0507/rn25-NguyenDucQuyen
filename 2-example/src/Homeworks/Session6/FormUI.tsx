import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Formcss from "./FormCss.module.css";
import Login from "../../assets/images/Login.jpg";
import Form from "../../Components/Buoi6/Form";
type Props = {};
const SignupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  name: Yup.string()
    // .min(2, "The name must be unique and between 3 - 128 characters")
    // .max(128, "The name must be unique and between 3 - 128 characters")
    .min(2, "Mininum 2 characters")
    .max(15, "Maximum 15 characters")
    .required("The name is not blank"),
});
function FormUI() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault(); // ngăn chặn load lại trang
  //     console.log(e);
  //   };
  //   const handleChange = (e: any) => {
  //     console.log(e.target);
  //   };
  //   const handleBlur = (e: any) => {
  //     console.log(e.target);
  //   };
  return (
    <div className="container-fluid">
      <div className="row p-3 bg-info text-dark bg-opacity-25">
        <div className="col-4">
          <img src={Login} alt="" />
        </div>
        <div className="col-8 h-100 m-auto p-5 ml-3">
          <form onSubmit={formik.handleSubmit}>
            <h1 className={Formcss.Form__login}>Register</h1>
            <p className={Formcss.Form__title}>
              Manage all your lottery efficiently
            </p>
            <p>
              Let's get you all set up so you can verify your persional account
              and begin setting up your profile
            </p>
            <div className="">
              <table className={Formcss.style}>
                <tbody>
                  <tr className={Formcss.tr}>
                    <td>First Name</td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        id=""
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <p style={{ margin: "0px" }}>
                        {formik.touched.name ? formik.errors.name : null}
                      </p>
                    </td>
                  </tr>
                  {/* </tbody> */}
                  {/* <tbody> */}
                  <tr>
                    <td>Last Name</td>
                    <td>
                      <input
                        type="text"
                        name="lastName"
                        id=""
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <p style={{ margin: "0px" }}>
                        {formik.touched.name ? formik.errors.name : null}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>City</td>
                    <td>
                      <input type="text" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>District</td>
                    <td>
                      <input type="text" name="" id="" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>Phone Number</td>
                    <td>
                      <input type="number" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        id=""
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>Password </td>
                    <td>
                      <input type="password" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Confirm Password</td>
                    <td>
                      <input type="password" name="" id="" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={Formcss.Form__agree}>
                <input
                  type="checkbox"
                  name="agree"
                  id=""
                  className={Formcss.form__check}
                />
                <p className={Formcss.form__yes}>Yes, I agree</p>
              </div>
              <div className={Formcss.Form__agree}>
                <input
                  type="checkbox"
                  name="agree"
                  id=""
                  className={Formcss.form__check}
                />
                <p className={Formcss.form__yes}>
                  I agree to all the
                  <p style={{ margin: "0", padding: "0", color: "blue" }}>
                    Tom, Privacy
                  </p>
                </p>
              </div>
              <button type="submit" className={Formcss.form__btn}>
                Create Account
              </button>
              <div>
                <span>Already have an account?</span>
                <span style={{ color: "blue", cursor: "pointer" }}>Login</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormUI;
