import React from "react";
import { Field, ErrorMessage } from "formik";
import { renderErrorMessage } from "../assets/FormUtils";
import example from "../assets/example.jpg";

function Page2(props) {
  const formik = props.formik;
  return (
    <div className="pageTwo w-1/9 items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6">
      <h1 className="font-semibold text-center text-lg">
        What kind of picture are you looking for?
      </h1>
      <div id="my-radio-group"></div>
      <div role="group" aria-labelledby="my-radio-group" className="flex">
        <label className="m-6 flex flex-col justify-center items-center">
          <img src={example} alt="Example" className="w-70  lg:max-w-xs" />
          <Field
            type="radio"
            name="picked"
            value="portrait"
            className="radio radio-primary m-2"
          />
          Portrait
        </label>
        <label className="m-6 flex flex-col justify-center items-center">
          <img src={example} alt="Example" className="w-70 lg:max-w-xs" />
          <Field
            type="radio"
            name="picked"
            value="other"
            className="radio radio-primary m-2"
          />
          other
        </label>
        <ErrorMessage name="picked" render={renderErrorMessage} />
      </div>

      <div className="flex items-center justify-around m-6">
        <button
          className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg"
          onClick={props.handlePrevious}
        >
          Go Back
        </button>
        {formik.values.picked === "portrait" && (
          <button
            className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg"
            onClick={props.handleNext}
          >
            Next
          </button>
        )}
        {formik.values.picked === "other" && (
          <button
            className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg"
            onClick={props.handleJump}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Page2;
