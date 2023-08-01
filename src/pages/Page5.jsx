import React from "react";
import { Field, ErrorMessage } from "formik";
import { renderErrorMessage } from "../assets/FormUtils";
import example from "../assets/example.jpg";

function Page5(props) {
  return (
    <div className="pageFive justify-center border-2 items-center border-primary rounded-lg shadow-lg p-6 m-6 lg:w-1/2">
      <h1 className="font-semibold text-center text-lg m-5" >Pick Your theme</h1>
      <div className="grid grid-cols-4 gap-10 lg:gap-4">
        {/* Each grid item */}
        <label htmlFor="theme1" className="flex flex-col items-center">
          <div className="avatar w-20 lg:w-36 lg:h-36 overflow-hidden">
            <img
              src={example}
              alt="Theme 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <Field
            type="radio"
            name="theme"
            value="theme1"
            id="theme1" 
            className="radio radio-primary mt-2"
          />
          <h3 className="mt-1">Theme 1</h3>
        </label>
        <label htmlFor="theme2" className="flex flex-col items-center">
          <div className="avatar w-20 lg:w-36 lg:h-36 overflow-hidden">
            <img
              src={example}
              alt="Theme 2"
              className="w-full h-auto object-cover"
            />
          </div>
          <Field
            type="radio"
            name="theme"
            value="theme2"
            id="theme2" 
            className="radio radio-primary mt-2"
          />
          <h3 className="mt-1">Theme 2</h3>
        </label>
        <label htmlFor="theme3" className="flex flex-col items-center">
          <div className="avatar w-20 lg:w-36 lg:h-36 overflow-hidden">
            <img
              src={example}
              alt="Theme 3"
              className="w-full h-auto object-cover"
            />
          </div>
          <Field
            type="radio"
            name="theme"
            value="theme3"
            id="theme3"
            className="radio radio-primary mt-2"
          />
          <h3 className="mt-1">Theme 3</h3>
        </label>
        <label htmlFor="theme4" className="flex flex-col items-center">
          <div className="avatar w-20 lg:w-36 lg:h-36 overflow-hidden">
            <img
              src={example}
              alt="Theme 4"
              className="w-full h-auto object-cover"
            />
          </div>
          <Field

            type="radio"
            name="theme"
            value="theme4"
            id="theme4"
            className="radio radio-primary mt-2"
          />
          <h3 className="mt-1">Theme 4</h3>
        </label>

        {/* Repeat for other grid items */}
        {/* ... */}
      </div>
      <ErrorMessage name="theme" render={renderErrorMessage} />
      <div className="flex items-center justify-between mt-10">
        <button className="btn btn-primary btn-md" onClick={props.handlePrevious}>Go Back</button>
        <button className="btn btn-primary btn-md" onClick={props.handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Page5;
