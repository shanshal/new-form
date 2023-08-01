import React from "react";
import logo from "../assets/logo.png";
function Page0(props) {
  return (
    <div className="welcomePage lg:w-1/2 h-auto border-2 border-primary  items-center justify-center rounded-lg shadow-lg p-6 m-6">
      <img src={logo} alt="logo" />
      <h1 className="text-2xl font-semibold text-center m-6">Let us show you the Creativity</h1>
      <p>
        {" "}
        Photonect offers the aibility to generate images using AI models, with
        the printing service on what you need, Try it now you will see great
        results
      </p>
      <div className="flex justify-end">
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

export default Page0;
