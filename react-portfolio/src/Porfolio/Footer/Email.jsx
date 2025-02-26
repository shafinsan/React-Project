import React from "react";
import { useForm } from "react-hook-form";


function Email() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const submittion = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-full bg-[#2b2e3a] p-6 rounded-lg shadow-lg max-w-md scale-105">
      <form onSubmit={handleSubmit(submittion)} className="space-y-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
            placeholder="Name"
            className="w-full px-4 py-2 bg-[#1c1e26] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Email"
            className="w-full px-4 py-2 bg-[#1c1e26] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <textarea
            placeholder="Message"
            {...register("description", {
              minLength: {
                value: 5,
                message: "Length must be greater than 5 characters",
              },
            })}
            rows="4"
            className="w-full px-4 py-2 bg-[#1c1e26] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded hover:scale-105 transform transition-transform flex justify-center items-center"
        >
          Send <span className="ml-2">&#9993;</span>
        </button>
      </form>
    </div>
  );
}

export default Email;
