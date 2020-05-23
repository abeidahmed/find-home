import React, { useState } from "react";
import axios from "axios";
import Icon from "@components/icon";
import { Link } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loginUser = () => {
    axios
      .post(
        "/api/v1/sessions",
        {
          user: {
            email,
            password
          }
        },
        { withCredentials: true }
      )
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          setIsLoading(false);
        }
      })
      .catch(err => {
        setError(err.response.data.message);
        setIsLoading(false);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    loginUser();
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm">
        <div>
          <input
            aria-label="Email address"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Email address"
          />
        </div>
        <div className="-mt-px">
          <input
            aria-label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        {error && <p className="text-sm font-medium text-red-700">{error}</p>}
        <div className="ml-auto text-sm leading-5">
          <Link
            to="/"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <button
          disabled={isLoading}
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <Icon
              icon="lock"
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
            />
          </span>
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </div>
    </form>
  );
};

export default Form;
