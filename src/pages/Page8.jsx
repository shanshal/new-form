import React from "react";
import { Field, ErrorMessage } from "formik";
import { renderErrorMessage } from "../assets/FormUtils";

function Page8(props) {
  const formik = props.formik;
  const handleNext = props.handleNext;
  return (
    <div className="pageEight items-center justify-center border-2 border-primary rounded-lg shadow-lg p-6 m-6 lg:w-1/3">
      <h1 className="font-semibold text-center text-lg">Where to contact you?</h1>
      <div className="contact flex flex-col lg:flex-row justify-evenly items-center ">
        <label htmlFor="telegram" className="flex flex-col">
          <div className="tooltip" data-tip="Telegram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 m-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            <Field
              type="radio"
              name="contact"
              value="telegram"
              id="telegram"
              className="radio radio-primary"
            />
          </div>
        </label>
        <label htmlFor="whatsApp" className="flex flex-col">
          <div className="tooltip" data-tip="WhatsApp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 m-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            <Field
              type="radio"
              name="contact"
              value="whatsApp"
              id="whatsApp"
              className="radio radio-primary"
            />
          </div>
        </label>
        <label htmlFor="email" className="flex flex-col">
          <div className="tooltip" data-tip="email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 m-4"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <Field
              type="radio"
              name="contact"
              value="email"
              id="email"
              className="radio radio-primary"
            />
          </div>
        </label>
       
      </div>
      {formik.values.contact === "telegram" && (
          <div>
            <Field
              type="text"
              id="telegramUsername"
              name="telegramUsername"
              className="input input-bordered input-primary w-full max-w-xs my-5"
              placeholder="@username"
            />
            <ErrorMessage name="telegramUsername" render={renderErrorMessage} />
          </div>
        )}
      <div className="publish"></div>
      <div className="flex items-center justify-around m-10">
        <button className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg m-5" onClick={props.handlePrevious}>
          Go Back
        </button>
        <button
          disabled={!formik.isValid}
          type="submit"
          className="btn btn-primary btn-md sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleNext}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Page8;
