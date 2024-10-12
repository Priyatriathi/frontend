import React from 'react';

const LoginPage = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col lg:flex-row">
      {/* Left side content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-left px-6 lg:px-20 py-10 lg:py-0">
        {/* MANIT Logo */}
        <img
          src="../public/logo.png"
          alt="MANIT Logo"
          className="w-32 h-32 lg:w-40 lg:h-40 mb-6"
        />

        {/* Title Section */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 text-center lg:text-left">
          Training and Placement Cell
        </h1>
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-8 text-center lg:text-left">
          Maulana Azad National Institute of Technology, Bhopal
        </h2>

        {/* Instruction */}
        <p className="mb-6 text-lg lg:text-xl text-gray-700 text-center lg:text-left">
          Please login with your email/username and password below.
        </p>

        {/* Login Form */}
        <div className="w-full max-w-lg p-6">
          <form className="space-y-6">
            {/* Username/Email Input */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Username/Email
              </label>
              <input
                type="text"
                placeholder="Email/Username"
                className="w-full px-4 py-2 text-lg text-gray-700 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-lg text-gray-700 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Login Button */}
            <div className="flex justify-between items-center mt-6">
              <button className="w-40 px-4 py-2 bg-blue-950 text-white text-lg font-semibold rounded-lg hover:bg-blue-400">
                Login
              </button>

              <div className="flex flex-col space-y-2">
                {/* Create Account Link */}
                <a href="/createaccount" className="text-blue-950 hover:underline text-lg">
                  Create Account
                </a>

                {/* Forgot Password Link */}
                <a href="forgotpassword" className="text-blue-950 hover:underline text-lg">
                  Forgot Password
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right side image section */}
      <div
        className="w-full lg:w-1/2 h-64 lg:h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://qualifygate.com/wp-content/uploads/2013/05/manit-3.jpg')" }}
      >
        {/* Background image */}
      </div>
    </div>
  );
};

export default LoginPage;
