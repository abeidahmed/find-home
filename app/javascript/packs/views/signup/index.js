import React from "react";
import Form from "./components/form";
import Header from "./components/header";
import Image from "images/building.jpg";

const Signup = () => {
  return (
    <main className="min-h-screen lg:flex">
      <div className="py-10 px-4 min-h-screen flex items-center justify-center lg:w-5/12">
        <div className="lg:ml-auto lg:max-w-md lg:pr-16">
          <Header />
          <Form />
        </div>
      </div>
      <div className="hidden lg:block lg:w-7/12">
        <img src={Image} className="h-full w-full bg-center bg-no-repeat" alt="Building image" />
      </div>
    </main>
  );
};

export default Signup;
