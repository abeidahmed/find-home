import React, { useState } from "react";
import Icon from "@components/icon";
import { InputField } from "@components/field";

const Form = ({ signup, loading }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="mt-8">
      <div>
        <InputField
          id="signup_first_name"
          label="First name"
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <InputField
          id="signup_last_name"
          label="Last name"
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <InputField
          id="signup_email"
          label="Email address"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <InputField
          id="signup_password"
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <button className="group relative block w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-7 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <Icon
              icon="lock"
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
            />
          </span>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Form;
