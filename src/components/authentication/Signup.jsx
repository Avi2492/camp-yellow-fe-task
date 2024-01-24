import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Logo from "../logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthStore.jsx";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[480px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-10">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2 flex justify-center">
                  <Logo />
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-gray-200">
                  Sign up to create account
                </h2>
                <p className="mt-2 text-center text-base text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    title=""
                    className="font-medium text-gray-100 transition-all duration-200 hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
                <form className="mt-6">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-400"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full text-gray-200 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          id="email"
                          autoComplete="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-base font-medium text-gray-400"
                        >
                          {" "}
                          Password{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full text-gray-200 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          id="password"
                          autoComplete="current-password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-red-700"
                        onClick={handleSubmit}
                      >
                        Create Account <ArrowRight className="ml-2" size={16} />
                      </button>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                        <p>
                          <input
                            className="mr-2"
                            type="checkbox"
                            name=""
                            id=""
                          />
                          Remember Me
                        </p>
                        <p>Need help?</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
