import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Bell, User } from "lucide-react";
import Header from "../components/Header";

const DetailPage = () => {
  return (
    <div className="bg-[#0f1c2e] min-h-screen">
      <Header />

      {/* Title Bar */}
      <div className="bg-[#1F2B3E]/50 w-full py-3 px-4 sm:px-6 md:px-8 border-b border-[#2A3A4E]">
        <h2 className="text-white font-semibold text-sm sm:text-base">DETAILS - M14860</h2>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        {/* Top Section - Machine Info and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Left Card - Machine Info */}
          <div className="bg-[#172334] rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col items-center">
              {/* Machine Icon/Image */}
              <div className="bg-[#29384e] rounded-xl p-8 mb-6">
                <img src={Logo} alt="Logo" className="w-16 sm:w-20 md:w-24 h-auto" />
              </div>

              {/* Machine ID and Name */}
              <div className="w-full space-y-3">
                <div className="bg-linear-to-b from-[#1F3A5F] to-[#4D648D] rounded-lg p-3 text-center">
                  <p className="text-white text-sm font-semibold">ID : 1123</p>
                </div>
                <div className="bg-linear-to-b from-[#1F3A5F] to-[#4D648D] rounded-lg p-3 text-center">
                  <p className="text-white text-sm"><span className="font-semibold">Product Name:</span> M14860</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Air Temperature */}
            <div className="bg-[#172334] rounded-xl p-4 shadow-lg">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Air Temperature</p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xl sm:text-2xl font-bold">298.1/ <span className="text-red-400">305</span></p>
                <p className="text-gray-300 text-lg sm:text-xl font-semibold">K</p>
              </div>
            </div>

            {/* Tool Wear */}
            <div className="bg-[#172334] rounded-xl p-4 shadow-lg">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Tool Wear</p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xl sm:text-2xl font-bold">50/ <span className="text-red-400">300</span></p>
                <p className="text-gray-300 text-lg sm:text-xl font-semibold">Minutes</p>
              </div>
            </div>

            {/* Process Temperature */}
            <div className="bg-[#172334] rounded-xl p-4 shadow-lg">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Process Temperature</p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xl sm:text-2xl font-bold">308.7/ <span className="text-red-400">315</span></p>
                <p className="text-gray-300 text-lg sm:text-xl font-semibold">K</p>
              </div>
            </div>

            {/* Temperature Diff */}
            <div className="bg-[#172334] rounded-xl p-4 shadow-lg">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Temperature Diff</p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xl sm:text-2xl font-bold">10.20</p>
              </div>
            </div>

            {/* Rotational Speed */}
            <div className="bg-[#172334] rounded-xl p-4 shadow-lg">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Rotational Speed</p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xl sm:text-2xl font-bold">1500/ <span className="text-red-400">3000</span></p>
                <p className="text-gray-300 text-lg sm:text-xl font-semibold">RPM</p>
              </div>
            </div>

            {/* Power W */}
            <div className="bg-[#172334] rounded-xl p-4 shadow-lg">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Power W</p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xl sm:text-2xl font-bold">7099.99</p>
              </div>
            </div>

            {/* Torque */}
            <div className="bg-[#172334] rounded-xl p-4 shadow-lg">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Torque</p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xl sm:text-2xl font-bold">45.2/ <span className="text-red-400">100</span></p>
                <p className="text-gray-300 text-lg sm:text-xl font-semibold">Nm</p>
              </div>
            </div>

            {/* Product Type */}
            <div className="bg-[#172334] rounded-xl p-4 shadow-lg">
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Product Type</p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xl sm:text-2xl font-bold">M (Medium)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Anomaly Detection */}
        <div className="bg-linear-to-b from-[#1F3A5F] to-[#4D648D] rounded-2xl p-6 shadow-xl">
          <h3 className="text-white font-semibold text-lg mb-6">Anomaly Detection</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Risk Level Card */}
            <div className="bg-[#5a748a] rounded-xl p-6 flex flex-col items-center justify-center">
              <div className="bg-[#6B7F5C] rounded-lg px-8 py-12 w-full flex items-center justify-center">
                <p className="text-4xl sm:text-5xl font-bold text-yellow-300">MEDIUM</p>
              </div>
            </div>

            {/* Prediction Analysis Card */}
            <div className="bg-[#6B8094] rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4 text-center">Prediction Analysis</h4>
              <div className="bg-[#5a748a] rounded-lg p-4 min-h-[150px]">
                <p className="text-white text-sm">
                  The machine shows moderate wear levels with elevated process temperature. 
                  Tool wear is at 16.67% capacity. Rotational speed is within normal operating range at 50% of maximum capacity.
                </p>
              </div>
            </div>

            {/* Recommendation Card */}
            <div className="bg-[#6B8094] rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4 text-center">Recommendation</h4>
              <div className="bg-[#5a748a] rounded-lg p-4 min-h-[150px]">
                <p className="text-white text-sm">
                  Schedule routine maintenance within the next 100 operating hours. 
                  Monitor temperature differential closely. Consider tool replacement when wear reaches 250 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 bg-white rounded-full p-4 shadow-2xl hover:bg-gray-100 transition-colors">
        <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </button>
    </div>
  );
};

export default DetailPage;
