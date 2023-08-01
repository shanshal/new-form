import React, { useState } from "react";
import { Formik, Form } from "formik";
import { initialValues, validationSchema, onSubmit } from "../assets/FormUtils";
import Page0 from "../pages/Page0";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";
import Page6 from "../pages/Page6";
import Page7 from "../pages/Page7";
import Page8 from "../pages/Page8";
import Page9 from "../pages/Page9";

const pages = [
  Page0,
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
];

function MainForm() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handleJump = () => {
    setCurrentPage((prevPage) => prevPage + 2);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleBackTwo = () => {
    setCurrentPage((prevPage) => prevPage - 2);
  };


  const CurrentPageComponent = pages[currentPage];
  const progress = ((currentPage + 1) / pages.length) * 100;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnMount
    >
      {(formik) => (
        <Form>
          <div className="back flex flex-col h-screen items-center justify-center">
          <progress className="progress progress-primary w-3/5" value={progress} max="100"></progress>
            <CurrentPageComponent
              formik={formik}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              handleJump={handleJump}
              handleBackTwo={handleBackTwo}
            />
            {console.log(formik)}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default MainForm;
