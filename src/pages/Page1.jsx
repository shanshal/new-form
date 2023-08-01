import React from "react";
import { Field, ErrorMessage } from "formik";
import { renderErrorMessage } from "../assets/FormUtils";

function Page1(props) {
  const formik = props.formik;

  return (
    <div className="pageOne flex flex-col w-9/10 lg:w-1/3 items-center justify-center border-2 border-primary rounded-lg shadow-lg p-8 m-6">
      <h1 className="font-semibold text-center text-lg m-5">Personal Info</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <div className="form-control space-y-2">
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-primary"
          />
          <ErrorMessage name="firstName" render={renderErrorMessage} />
        </div>
        <div className="form-control space-y-2">
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-primary"
          />
          <ErrorMessage name="lastName" render={renderErrorMessage} />
        </div>
        <div className="form-control space-y-2">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email@email.com"
            className="input input-bordered input-primary"
          />
          <ErrorMessage name="email" render={renderErrorMessage} />
        </div>
        <div className="form-control space-y-2">
          <label htmlFor="tel">Phone Number</label>
          <Field
            type="tel"
            id="tel"
            name="tel"
            placeholder="Your Phone Number"
            className="input input-bordered input-primary"
          />
          <ErrorMessage name="tel" render={renderErrorMessage} />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg"
          onClick={props.handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Page1;
