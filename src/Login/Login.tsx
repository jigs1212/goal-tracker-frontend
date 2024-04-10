import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formValue, setFormValue] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevValue) => {
      return { ...prevValue, [e.target?.name]: e.target?.value };
    });
  };

  const handleLogin = () => {
    // check if both email and password are available
    if (!formValue?.username) setError("Username is required");
    if (!formValue?.password) setError("Password is required");

    //Submit the login API
    axios
      .post("http://localhost:8000/api/v1/user/login", {
        userName: formValue.username,
        password: formValue.password,
      })
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <h1>Login</h1>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Username
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="username"
                id="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="john@doe.com"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="password"
                name="password"
                id="password"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="********"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      {error && (
        <>
          <span className="text-red-700">{error}</span>
          <br />
        </>
      )}
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};

export default Login;
