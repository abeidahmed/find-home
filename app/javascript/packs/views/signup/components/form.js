import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Icon from "@components/icon";
import { InputField } from "@components/field";
import { postCurrentUser } from "@actions/current-user";
import { useHistory } from "react-router-dom";

const Form = ({ postUser }) => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const signupUser = () => {
    axios
      .post(
        "/api/v1/users",
        {
          user: {
            first_name: firstName,
            last_name: lastName,
            email,
            password
          }
        },
        { withCredentials: true }
      )
      .then(res => {
        if (res.status === 201) {
          postUser(res.data.user, res.data.token);
          setIsLoading(false);
          history.push("/");
        }
      })
      .catch(err => {
        setError(err.response.data);
        setIsLoading(false);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    signupUser();
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div>
        <InputField
          id="signup_first_name"
          label="First name"
          type="text"
          error={error}
          errorType="first name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <InputField
          id="signup_last_name"
          label="Last name"
          type="text"
          error={error}
          errorType="last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <InputField
          id="signup_email"
          label="Email address"
          type="email"
          error={error}
          errorType="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <InputField
          id="signup_password"
          label="Password"
          type="password"
          error={error}
          errorType="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <button
          disabled={isloading}
          className="group relative block w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-7 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <Icon
              icon="lock"
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
            />
          </span>
          {isloading ? "Signing up..." : "Sign up"}
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postUser: (userData, token) => dispatch(postCurrentUser(userData, token))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
