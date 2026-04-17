import React from "react";

export default function page() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-1/2 h-100 m-10 bg-gray-200 rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-black">Login</h1>
        <p>
          Welcome back! Please enter your credentials to access your account.
        </p>
        <form className="flex flex-col gap-4 mt-4 text-black">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded p-2"
          />
          <div>
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
            <input type="checkbox" id="remember" className="ml-2" />
          </div>

          <button type="submit" className="bg-blue-500 text-white rounded p-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
