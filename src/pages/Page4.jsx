import React from "react";
import { Field, ErrorMessage } from "formik";
import { renderErrorMessage } from "../assets/FormUtils";
import example from "../assets/example.jpg";

function Page4(props) {
  const formik = props.formik;
  return (
    <div className="pageFour-instructions w-4/5 h-4/5 m-3 flex flex-col items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 lg:m-6 lg:w-1/3">
      
      <div class="grid grid-cols-2 mt-24 md:mt-32 lg:w-56 gap-2 justify-center items-center">
        <div className="avatar">
          <div className="w-48 rounded">
            <img src={example} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-48 rounded">
            <img src={example} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-48 rounded">
            <img src={example} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-48 rounded">
            <img src={example} />
          </div>
        </div>
      </div>
      <div className="m-5 w-full">
        <Field
          type="file"
          id="file"
          name="file"
          className="file-input file-input-bordered file-input-primary w-full"
        />
      </div>
      <ErrorMessage name="file" render={renderErrorMessage} />
      <h1 className="font-semibold text-center text-lg">Upload a picture</h1>

      <div className="flex items-center justify-around my-16">
        {formik.values.picked === "portrait" && (
          <button
            className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg"
            onClick={props.handlePrevious}
          >
            Go Back
          </button>
        )}
        {formik.values.picked === "other" && (
          <button
            className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg"
            onClick={props.handleBackTwo}
          >
            Go back
          </button>
        )}
        <button
          className="btn btn-primary btn-md sm:btn-sm md:btn-md m-1/4 lg:btn-lg m-5"
          onClick={props.handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Page4;
