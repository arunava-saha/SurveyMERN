import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Survey = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:8001/user/survey", {
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
          alert("survey submited ...");
          reset();
        } else {
          alert("sumthing went wrong");
        }
      });
  };
  return (
    <div className="m-10 px-20 bg-slate-400 py-4">
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            id="name"
            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
            placeholder="Name"
            required
          />
        </div>
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
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Phone
          </label>
          <input
            type="number"
            {...register("phone")}
            placeholder="Phone"
            className="bg-gray-50 border border-gray-3 sm:text-sm rounded-lg block w-full p-2.5 "
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Gender
          </label>
          <input
            type="text"
            {...register("gender")}
            placeholder="Gender"
            className="bg-gray-50 border border-gray-3 sm:text-sm rounded-lg block w-full p-2.5 "
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium capitalize text-gray-900">
            nationality
          </label>
          <input
            type="text"
            {...register("nationality")}
            placeholder="nationality"
            className="bg-gray-50 border border-gray-3 sm:text-sm rounded-lg block w-full p-2.5 "
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium capitalize text-gray-900">
            address
          </label>
          <input
            type="text"
            {...register("address")}
            placeholder="address"
            className="bg-gray-50 border border-gray-3 sm:text-sm rounded-lg block w-full p-2.5 "
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium capitalize text-gray-900">
            message
          </label>
          <input
            type="text"
            {...register("message")}
            placeholder="message"
            className="bg-gray-50 border border-gray-3 sm:text-sm rounded-lg block w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Survey;
