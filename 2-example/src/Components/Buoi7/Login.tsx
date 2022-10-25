import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  // email: Yup.string()
  //   .email("Invalid email")
  //   .required("Required"),
  // password: Yup.string().required("Password is required"),
  // passwordConfirmation: Yup.string().oneOf(
  //   [Yup.ref("password"), null],
  //   "Passwords must match"
  // ),
  // name: Yup.string()
  //   .min(3, "The name must be unique and between 3 - 128 characters")
  //   .max(128, "The name must be unique and between 3 - 128 characters")
  //   .required("The name is not blank"),
});
function RegisterFormWithYup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      // email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const url = "https://63528f71a9f3f34c3741633b.mockapi.io/api/v1/users";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          // Xử lý kết quả JSON ở đây
          console.log(json);
        })
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
      console.log(values);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value);
    console.log(e.target);
  };

  return (
    <form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
      <div className="container d-flex justify-content-center" style={{}}>
        <tr>
          <td style={{ marginRight: "10px" }}>Name: </td>
          <td>
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </td>
        </tr>

        {/* <p>{formik.errors.name ?? null}</p> */}
      </div>
      {/* <div>
        <input
          name="email"
          value={formik.values.email}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.email ?? null}</p>
      </div> */}
      <button className="btn btn-primary m-3">POST</button>
    </form>
  );
}

export default RegisterFormWithYup;
