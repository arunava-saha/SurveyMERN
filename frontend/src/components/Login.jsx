import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:8001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result != "Wrong credentials") {
          alert("user loged in ...");
          reset();
        } else {
          alert("Wrong credentials");
        }
      });
  };
  return (
    <div>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
            placeholder="Username or email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            placeholder="Password"
            className="bg-gray-50 border border-gray-3 sm:text-sm rounded-lg block w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
