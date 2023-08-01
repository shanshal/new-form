import React from "react";
import * as Yup from "yup";
export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  picked: "",
  age: "",
  weight: "",
  height: "",
  gender: "",
  file: null,
  checkboxChecked: false,
  area1: "",
  area2: "",
  support: "no",
  theme: "",
  publish: "",
  contact: "",
  telegramUsername: "",
};
export const onSubmit = (values) => {
  console.log(values);
};
export const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  tel: Yup.string().required("Required"),
  picked: Yup.string().required("Please select an option"),
  file: Yup.mixed().required("Please select a file"),
  theme: Yup.string().required("Required"),
  publish: Yup.string().required("Required"),
  // telegramUsername: Yup.string().require   d("Required"),
  // area1: Yup.string().when("checkboxChecked", {
  //   is: true,
  //   then: Yup.string().required("Area 1 is required when checkbox is checked"),
  //   otherwise: Yup.string(),
  // }),
  // area2: Yup.string().when("checkboxChecked", {
  //   is: false,
  //   then: Yup.string().required(
  //     "Area 2 is required when checkbox is not checked"
  //   ),
  //   otherwise: Yup.string(),
  // }),
});

export const renderErrorMessage = (msg) => (
  <div className="alert alert-error">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>{msg}</span>
  </div>
);
