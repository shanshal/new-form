import React from "react";
import { Field, ErrorMessage } from "formik";
import { renderErrorMessage } from "../assets/FormUtils";
function Page3(props) {

  return (
    <div className="pageThree-portrait w-9/10 lg:items-center lg:justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 lg:w-1/3">
      <h1 className="font-semibold text-center text-lg">Describe your charachter</h1>
              <div className="flex flex-col lg:flex-row justify-evenly">
                <div className="form-control flex flex-col space-y-2 m-2 ">
                  <label htmlFor="age">Age</label>
                  <Field
                    id="age"
                    name="age"
                    placeholder="Age"
                    as="select"
                    className="input input-bordered input-primary lg:w-52"
                  >
                    <option value="0-12">0-12</option>
                    <option value="13-17">13-17</option>
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55-64">55-64</option>
                    <option value="65+">65+</option>
                  </Field>
                </div>
                <div className="form-control flex flex-col space-y-2 m-2 ">
                  <label htmlFor="weight">Weight</label>
                  <Field
                    id="weight"
                    name="weight"
                    placeholder="weight"
                    as="select"
                    className="input input-bordered input-primary lg:w-52"
                  >
                    <option value="25-30">25 kg to 30 kg</option>
                    <option value="30-35">30 kg to 35 kg</option>
                    <option value="35-40">35 kg to 40 kg</option>
                    <option value="40-45">40 kg to 45 kg</option>
                    <option value="45-50">45 kg to 50 kg</option>
                    <option value="50-55">50 kg to 55 kg</option>
                    <option value="55-60">55 kg to 60 kg</option>
                    <option value="60-65">60 kg to 65 kg</option>
                    <option value="65-70">65 kg to 70 kg</option>
                    <option value="70-75">70 kg to 75 kg</option>
                    <option value="75-80">75 kg to 80 kg</option>
                    <option value="80-85">80 kg to 85 kg</option>
                    <option value="85-90">85 kg to 90 kg</option>
                    <option value="90-95">90 kg to 95 kg</option>
                    <option value="95-100">95 kg to 100 kg</option>
                    <option value="100+">100+ kg</option>
                  </Field>
                  <ErrorMessage name="weight" render={renderErrorMessage} />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-evenly mt-5 ">
                <div className="form-control flex flex-col space-y-2 m-2 ">
                  <label htmlFor="height">Height</label>
                  <Field
                    id="height"
                    name="height"
                    placeholder="height"
                    as="select"
                    className="input input-bordered input-primary lg:w-52"
                  >
                    <option value="0-99">0 to 99 cm</option>
                    <option value="140-149">140 to 149 cm</option>
                    <option value="150-159">150 to 159 cm</option>
                    <option value="160-169">160 to 169 cm</option>
                    <option value="170-179">170 to 179 cm</option>
                    <option value="180-189">180 to 189 cm</option>
                    <option value="190-199">190 to 199 cm</option>
                    <option value="200+">200+ cm</option>
                  </Field>

                </div>
                <div className="form-control flex flex-col space-y-2 m-2 lg:w-52 ">
                  <label htmlFor="gender">Gender</label>
                  <Field
                    id="gender"
                    name="gender"
                    placeholder="gender"
                    as="select"
                    className="input input-bordered input-primary"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>

                </div>
              </div>
              <div className="flex items-center justify-around mt-5">
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

export default Page3