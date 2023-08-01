import React from "react";
import { Field, ErrorMessage } from "formik";
import { renderErrorMessage } from "../assets/FormUtils";

function Page7(props) {
  const formik = props.formik
  return (
    <div className="pageSeven  items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 lg:w-1/3">
              <div className=" justify-center items-center">
                <h2 className="font-semibold text-center text-lg" >Do you want to print anything or support the bussiness?</h2>
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
                  <ErrorMessage name="publish" render={renderErrorMessage}/>
                </div>
              </div>
              {formik.values.publish === "yes" && (
                <div className="pageCart border-2 border-primary rounded-lg shadow-lg p-6 m-6 ">
                  <h3>Page Cart Contents</h3>
                  <Field type="number" name="cart-item-1" className="input input-primary input-bordered" placeholder="Enter the number of items" />
                </div>
              )}
              <div className="flex items-center justify-around m-10">
                <button className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg" onClick={props.handlePrevious}>
                  Go Back
                </button>
                <button className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg" onClick={props.handleNext}>
                  Next
                </button>
              </div>
            </div>
  )
}

export default Page7