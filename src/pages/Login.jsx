import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-2">Login</h1>
          <p className="text-end ">here...</p>
        </div>
        <div className="card bg-base-100 border border-[#1D3F72] dark:border-gray-50 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered rounded-none"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label text-xs justify-start">
                New here:
                <Link to="/signup" className="link link-hover text-[#2AAAB8]">
                  Sign Up here...
                </Link>
              </label>
            </div>
            <button class="btn btn-md relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-[#2AAAB8] border border-[#1D3F72] rounded-none hover:bg-white group">
              <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#1D3F72] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Login
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
