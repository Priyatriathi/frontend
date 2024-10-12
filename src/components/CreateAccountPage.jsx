import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const CreateAccountPage = () => {
  const [captchaSrc, setCaptchaSrc] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  // Fetch the CAPTCHA when the component loads
  useEffect(() => {
    fetchCaptcha();
  }, []);

  const fetchCaptcha = () => {
    setCaptchaSrc(`/captcha?timestamp=${new Date().getTime()}`); // Adding timestamp to avoid caching
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/verify-captcha', { captchaInput });
      if (response.data.success) {
        alert('Captcha Verified!');
      } else {
        setCaptchaError('Captcha mismatch, please try again.');
        fetchCaptcha(); // Reload CAPTCHA on failure
      }
    } catch (error) {
      console.error('Error verifying captcha:', error);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left side form section */}
      <div className="w-full lg:w-8/12 bg-gray-100 flex flex-col justify-center items-start px-6 py-10 lg:px-16 lg:py-14">
        {/* Placement Portal Logo */}
        <img
          src="/logo.png"
          alt="Placement Portal Logo"
          className="w-20 h-20 mb-4 lg:w-24 lg:h-24 lg:mb-6"
        />

        {/* Title and Subtitle */}
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">PLACEMENT PORTAL</h1>
        <h2 className="text-base lg:text-xl font-semibold text-gray-700 mb-6 lg:mb-8">
          Birla Institute of Technology, Mesra
        </h2>
        <p className="text-lg lg:text-xl text-gray-800 mb-2 lg:mb-4">New Horizons of Career</p>
        <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8">Only a few steps ahead</p>

        {/* Create Account Form */}
        <div className="w-full max-w-lg">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Roll Number and Passing Year Inputs */}
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label className="block text-lg font-semibold text-gray-800 mb-2">Roll Number (as per ERP)</label>
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  className="w-full px-4 py-3 text-lg text-gray-700 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                <label className="block text-lg font-semibold text-gray-800 mb-2">Passing Year</label>
                <input
                  type="text"
                  placeholder="Passing Year"
                  className="w-full px-4 py-3 text-lg text-gray-700 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Security Key Input with Captcha */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">Security Key</label>
              <div className="flex items-center">
                <img src={captchaSrc} alt="Captcha" className="w-32 h-12 mr-4" />
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Security Key"
                  className="w-full px-4 py-3 text-lg text-gray-700 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              {captchaError && <p className="text-red-600 mt-2">{captchaError}</p>}
            </div>

            {/* Create Account Button */}
            <button className="w-full py-3 bg-blue-950 text-white text-lg font-semibold rounded-lg hover:bg-blue-900 transition duration-300">
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-800">
              Already have an account? 
              <Link to="/login" className="text-blue-600 hover:underline"> Login</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side image section */}
      <div className="w-full lg:w-4/12 bg-cover bg-center h-64 lg:h-auto" style={{ backgroundImage: "url('../public/hh2.jpg')" }}>
        {/* Background image for the campus */}
      </div>
    </div>
  );
};

export default CreateAccountPage;
