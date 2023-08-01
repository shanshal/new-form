import React from "react";
import logo from "../assets/logo.png";
function Page9() {
  return (
    <div className="thankYouPage flex flex-col lg:w-1/2 h-auto border-2 border-primary  items-center justify-center rounded-lg shadow-lg p-6 m-6">
      <img src={logo} alt="logo" />
      <h1 className="font-semibold text-xl text-center">Thank You for using our services!</h1>
      <h2 className="font-medium text-lg text-center">
        For now check what other services we offer while We contact you soon!
      </h2>
      <button className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-lg m-6">
        What we offer
      </button>
    </div>
  );
}

export default Page9;
