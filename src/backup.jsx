import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import example from "../assets/example.jpg";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  picked: "",
  age: "",
  file: null,
  checkboxChecked: false,
  area1: "",
  area2: "",
  support: "no",
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  tel: Yup.string().required("Required"),
  picked: Yup.string().required("Please select an option"),
  age: Yup.string().required("Please select an option"),
  file: Yup.mixed().required("Please select a file"),
  area1: Yup.string().when("checkboxChecked", {
    is: true,
    then: Yup.string().required("Area 1 is required when checkbox is checked"),
    otherwise: Yup.string(),
  }),
  area2: Yup.string().when("checkboxChecked", {
    is: false,
    then: Yup.string().required(
      "Area 2 is required when checkbox is not checked"
    ),
    otherwise: Yup.string(),
  }),
});

const renderErrorMessage = (msg) => (
  <div className="alert alert-warning">
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
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <span>{msg}</span>
  </div>
);

function Ytform() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div className="flex flex-col h-screen items-center justify-center">
            <div className="pageOne flex flex-col w-1/3 items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6">
              <div className="flex justify-between space-x-4 spacye-y-2">
                <div className="form-control flex flex-col space-y-2">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="input input-bordered input-warning"
                  />
                  <ErrorMessage name="firstName" render={renderErrorMessage} />
                </div>
                <div className="form-control flex flex-col space-y-2">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="input input-bordered input-warning"
                  />
                  <ErrorMessage name="lastName" render={renderErrorMessage} />
                </div>
              </div>
              <div className="flex justify-between space-x-4">
                <div className="form-control flex flex-col space-y-2">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email@email.com"
                    className="input input-bordered input-warning"
                  />
                  <ErrorMessage name="email" render={renderErrorMessage} />
                </div>
                <div className="form-control flex flex-col space-y-2">
                  <label htmlFor="tel">Phone Number</label>
                  <Field
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Your Phone Number"
                    className="input input-bordered input-warning"
                  />
                  <ErrorMessage name="tel" render={renderErrorMessage} />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  disabled={!formik.isValid}
                  className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                >
                  Next
                </button>
              </div>
            </div>
            <div className="pageTwo items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6">
              <h1 className="">What kind of picture are you looking for?</h1>
              <div id="my-radio-group">Picked</div>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className="flex"
              >
                <label className="m-6">
                  <img src={example} alt="Example" className="max-w-xs" />
                  <Field
                    type="radio"
                    name="picked"
                    value="One"
                    className="radio radio-primary"
                  />
                  One
                </label>
                <label className="m-6">
                  <img src={example} alt="Example" className="max-w-xs" />
                  <Field
                    type="radio"
                    name="picked"
                    value="Two"
                    className="radio radio-primary"
                    checked
                  />
                  Two
                </label>
                <ErrorMessage name="picked" render={renderErrorMessage} />
              </div>
              <div className="flex items-center justify-around">
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Go Back
                </button>
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Next
                </button>
              </div>
            </div>
            <div className="pageThree-portrait items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 w-1/3">
              <div className="flex justify-evenly">
                <div className="form-control flex flex-col space-y-2 m-2 w-1/2">
                  <label htmlFor="age">Age</label>
                  <Field
                    id="age"
                    name="age"
                    placeholder="Age"
                    as="select"
                    className="input input-bordered input-warning"
                  >
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                  <ErrorMessage name="age" render={renderErrorMessage} />
                </div>
                <div className="form-control flex flex-col space-y-2 m-2 w-1/2">
                  <label htmlFor="weight">Weight</label>
                  <Field
                    id="weight"
                    name="weight"
                    placeholder="weight"
                    as="select"
                    className="input input-bordered input-warning"
                  >
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                  <ErrorMessage name="weight" render={renderErrorMessage} />
                </div>
              </div>
              <div className="flex justify-evenly ">
                <div className="form-control flex flex-col space-y-2 m-2 w-1/2">
                  <label htmlFor="height">Height</label>
                  <Field
                    id="height"
                    name="height"
                    placeholder="height"
                    as="select"
                    className="input input-bordered input-warning"
                  >
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                  <ErrorMessage name="height" render={renderErrorMessage} />
                </div>
                <div className="form-control flex flex-col space-y-2 m-2 w-1/2">
                  <label htmlFor="gender">Gender</label>
                  <Field
                    id="gender"
                    name="gender"
                    placeholder="gender"
                    as="select"
                    className="input input-bordered input-warning"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>

                  <ErrorMessage name="age" render={renderErrorMessage} />
                </div>
              </div>
              <div className="flex items-center justify-around">
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Go Back
                </button>
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Next
                </button>
              </div>
            </div>
            <div className="pageFour-instructions items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 w-1/3">
              <div className="container flex flex-col">
                <div className="row flex m-3">
                  <img src={example} alt="Example" className="max-w-xs m-3" />
                  <img src={example} alt="Example" className="max-w-xs m-3" />
                </div>
                <div className="row flex m-3">
                  <img src={example} alt="Example" className="max-w-xs m-3" />
                  <img src={example} alt="Example" className="max-w-xs m-3" />
                </div>
              </div>
              <Field
                type="file"
                id="file"
                name="file"
                className="file-input file-input-bordered file-input-warning w-full max-w-xs m-8"
              />
              <ErrorMessage name="file" render={renderErrorMessage} />

              <div className="flex items-center justify-around my-16">
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Go Back
                </button>
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Next
                </button>
              </div>
            </div>
            <div className="pageFive justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 w-1/2">
              <div className="container flex flex-col items-center">
                <div className="row flex justify-center items-center">
                  <label htmlFor="theme" className="flex flex-col items-center">
                    <img src={example} alt="Example" className="max-w-xs m-3" />
                    <Field
                      type="radio"
                      name="theme"
                      value="theme1"
                      className="radio radio-primary"
                    />
                    <h3>Theme 1</h3>
                  </label>
                  <label htmlFor="theme" className="flex flex-col items-center">
                    <img src={example} alt="Example" className="max-w-xs m-3" />
                    <Field
                      type="radio"
                      name="theme"
                      value="theme2"
                      className="radio radio-primary"
                    />
                    <h3>Theme 2</h3>
                  </label>
                  <label htmlFor="theme" className="flex flex-col items-center">
                    <img src={example} alt="Example" className="max-w-xs m-3" />
                    <Field
                      type="radio"
                      name="theme"
                      value="theme3"
                      className="radio radio-primary"
                    />
                    <h3>Theme 3</h3>
                  </label>
                </div>
                <div className="row flex justify-center items-center">
                  <label htmlFor="theme" className="flex flex-col items-center">
                    <img src={example} alt="Example" className="max-w-xs m-3" />
                    <Field
                      type="radio"
                      name="theme"
                      value="theme4"
                      className="radio radio-primary"
                    />
                    <h3>Theme 4</h3>
                  </label>
                  <label htmlFor="theme" className="flex flex-col items-center">
                    <img src={example} alt="Example" className="max-w-xs m-3" />
                    <Field
                      type="radio"
                      name="theme"
                      value="theme5"
                      className="radio radio-primary"
                    />
                    <h3>Theme 5</h3>
                  </label>
                  <label htmlFor="theme" className="flex flex-col items-center">
                    <img src={example} alt="Example" className="max-w-xs m-3" />
                    <Field
                      type="radio"
                      name="theme"
                      value="theme6"
                      className="radio radio-primary"
                    />
                    <h3>Theme 6</h3>
                  </label>
                </div>
                <div className="row flex justify-center items-center">
                  <label htmlFor="theme" className="flex flex-col items-center">
                    <img src={example} alt="Example" className="max-w-xs m-3" />
                    <Field
                      type="radio"
                      name="theme"
                      value="theme7"
                      className="radio radio-primary"
                    />
                    <h3>Theme 7</h3>
                  </label>
                  <label htmlFor="theme" className="flex flex-col items-center">
                    <img src={example} alt="Example" className="max-w-xs m-3" />
                    <Field
                      type="radio"
                      name="theme"
                      value="theme8"
                      className="radio radio-primary"
                    />
                    <h3>Theme 8</h3>
                  </label>
                  <label htmlFor="theme" className="flex flex-col items-center">
                    <img src={example} alt="Example" className="max-w-xs m-3" />
                    <Field
                      type="radio"
                      name="theme"
                      value="theme9"
                      className="radio radio-primary"
                    />
                    <h3>Theme 9</h3>
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-around m-10">
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Go Back
                </button>
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Next
                </button>
              </div>
            </div>

            <div className="pageSix items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 w-1/3">
              <div className="form-control flex flex-col space-y-2">
                <label htmlFor="checkboxChecked" className="flex items-center">
                  <Field
                    type="checkbox"
                    id="checkboxChecked"
                    name="checkboxChecked"
                    className="checkbox checkbox-primary"
                  />
                  Show Area 1
                </label>
              </div>

              {formik.values.checkboxChecked ? (
                <div className="form-control flex flex-col space-y-2">
                  <label htmlFor="area1">Area 1</label>
                  <Field
                    as="textarea"
                    id="area1"
                    name="area1"
                    placeholder="Enter text for Area 1"
                    className="textarea textarea-primary"
                  />
                  <ErrorMessage name="area1" render={renderErrorMessage} />
                </div>
              ) : (
                <div className="form-control flex flex-col space-y-2">
                  <label htmlFor="area2">Area 2</label>
                  <Field
                    as="textarea"
                    id="area2"
                    name="area2"
                    placeholder="Enter text for Area 2"
                    className="textarea textarea-primary"
                  />
                  <ErrorMessage name="area2" render={renderErrorMessage} />
                </div>
              )}
               <div className="flex items-center justify-around m-10">
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Go Back
                </button>
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Next
                </button>
              </div>
            </div>

            <div className="pageSeven  items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 w-1/3">
              <div className=" justify-center items-center">
                <h2>Do you want to support the bussiness</h2>
                <div className="flex items-center justify-center">
                  <label htmlFor="publish" className="flex flex-col m-5">
                    <h3>Yes</h3>
                    <Field
                      type="radio"
                      name="publish"
                      value="yes"
                      className="radio radio-primary"
                    />
                  </label>
                  <label htmlFor="publish" className="flex flex-col m-5">
                    <h3>No</h3>
                    <Field
                      type="radio"
                      name="publish"
                      value="No"
                      className="radio radio-primary"
                    />
                  </label>
                </div>
              </div>
              {formik.values.publish === "yes" && (
                <div className="pageCart items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 w-1/3">
                  <h3>Page Cart Contents</h3>
                  {/* contents of the cart */}
                </div>
              )}
               <div className="flex items-center justify-around m-10">
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Go Back
                </button>
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Next
                </button>
              </div>
            </div>
            {/* last page about socials and publishing */}
            <div className="pageEight">
              <div className="contact"></div>
              <div className="publish"></div>
              <div className="flex items-center justify-around m-10">
                <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg m-5">
                  Go Back
                </button>
                <button type="submit" className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Ytform;
