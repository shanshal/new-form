import React from "react";
import { Field, ErrorMessage } from "formik";
import { renderErrorMessage } from "../assets/FormUtils";


function Page6(props) {
  const formik = props.formik
  return (
    <div className="pageSix items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 lg:w-1/3">
              <div className="form-control flex flex-col space-y-2">
                <label htmlFor="checkboxChecked" className="flex items-center">
                  <Field
                    type="checkbox"
                    id="checkboxChecked"
                    name="checkboxChecked"
                    className="checkbox checkbox-primary"
                  />
                  <h1 className="font-semibold text-lg m-4">Leave it for us?</h1>
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
                  {/* <ErrorMessage name="area1" render={renderErrorMessage} /> */}
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
                  {/* <ErrorMessage name="area2" render={renderErrorMessage} /> */}
                </div>
              )}
              <div className="flex items-center justify-around m-10">
                <button className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg m-2" onClick={props.handlePrevious}>
                  Go Back
                </button>
                <button className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg m-2" onClick={props.handleNext}>
                  Next
                </button>
              </div>
            </div>

  )
}

export default Page6