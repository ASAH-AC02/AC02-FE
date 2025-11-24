import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const DetailPage = () => {
  return (
    <div className="bg-[#0f1c2e] min-h-screen">
      <div className="">
        {/* Header */}
        <header className="p-4 flex justify-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-16 sm:w-20 md:w-24 h-auto" />
          </Link>
        </header>
        
        {/* Title Bar */}
        <div className="bg-[#1F2B3E]/50 w-full py-2 px-4 sm:px-6 md:px-8 border border-[#2A3A4E] rounded-b-lg">
          <h2 className="text-white font-semibold text-sm sm:text-base">Detail - M14860</h2>
        </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
          {/* Top Section - Equipment, Condition, History */}
          <div className="flex flex-col md:grid md:grid-cols-[70%_20%] lg:grid-cols-[80%_16%] xl:grid-cols-[35%_10%_23%_24%] gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {/* Equipment Details Card */}
            <div className="w-full">
              <div className="bg-[#172334] rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl h-full">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
                  Equipment Details
                </h3>
                <div className="py-4 sm:py-6 md:py-8 flex justify-center">
                  <img src={Logo} alt="Logo" className="w-16 sm:w-20 md:w-24 h-auto" />
                </div>
                <h2 className="text-white font-semibold text-xs sm:text-sm mb-2">
                  Product Name: M14860
                </h2>
                <div className="text-white text-xs sm:text-sm">
                  <ul className="space-y-1">
                    <li>Type: M</li>
                    <li>Air Temperature: 298.1 K</li>
                    <li>Process Temperature: 310.5 K</li>
                    <li>Rotational Speed: 1500 rpm</li>
                    <li>Torque: 45.2 Nm</li>
                    <li>Tool Wear: 0 Min</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Condition Indicators - Hidden on mobile, shown on tablet+ */}
            <div className="hidden sm:block sm:w-auto lg:w-32">
              <div className="bg-[#172334] rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl h-full">
                <div className="flex sm:flex-col items-center justify-center sm:space-y-4 md:space-y-6 space-x-4 sm:space-x-0 py-2">
                  <h2 className="text-white font-semibold text-sm sm:text-base sm:mb-2">Condition</h2>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#172334] shadow-lg shadow-red-500/50 ring-4 ring-red-500/30"></div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#172334] shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"></div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-500 shadow-lg shadow-green-500/50 ring-4 ring-green-500/30"></div>
                </div>
              </div>
            </div>

            {/* Maintenance History Table */}
            <div className="w-full md:col-span-2 lg:flex-1">
              <div className="p-4 sm:p-6 md:p-8 bg-linear-to-b from-[#1F3A5F] to-[#4D648D] rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto rounded-2xl">
                  <h2 className="text-white mb-3 sm:mb-4 font-semibold text-sm sm:text-base">
                    Maintenance History
                  </h2>
                  <div className="min-w-[600px]">
                    <table className="w-full rounded">
                      <thead>
                        <tr className="bg-[#2A3A50]">
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-white border-r border-[#3A4A60]">
                            Product Name
                          </th>
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-white border-r border-[#3A4A60]">
                            Type
                          </th>
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-white border-r border-[#3A4A60]">
                            Air Temperature
                          </th>
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-white border-r border-[#3A4A60]">
                            Process Temperature
                          </th>
                          <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-white border-r border-[#3A4A60]">
                            Rotational Speed
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#2A3A50] bg-white/10 hover:bg-[#1F2B3E]/50 transition-colors">
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test1
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test2
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test3
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test4
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test5
                          </td>
                        </tr>
                        <tr className="border-b border-[#2A3A50] bg-white/10 hover:bg-[#1F2B3E]/50 transition-colors">
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test1
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test2
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test3
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test4
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-white border-r border-[#2A3A50]">
                            test5
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 rounded-2xl p-3 sm:p-4 bg-[#1F2B3E]/30 w-full sm:w-fit mx-auto">
                  <span className="text-white text-xs sm:text-sm">
                    Showing 1 to 1 of 1 entries
                  </span>
                  <div className="flex gap-2">
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm">
                      ←
                    </button>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2A3A50] text-white rounded-lg hover:bg-[#3A4A60] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Alert, Anomaly, Tool Wear */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
            {/* Alert Card */}
            <div className="w-full lg:w-1/4">
              <div className="bg-[#172334] rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl h-full">
                <div className="mb-4 flex flex-wrap gap-2">
                  <button className="text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2A3A50] rounded-lg hover:bg-[#3A4A60] transition-colors">
                    Alert
                  </button>
                  <button className="text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-[#2A3A50] rounded-lg transition-colors">
                    Ticket
                  </button>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-white">
                  <div className="flex justify-between py-2 border-b border-[#2A3A50]">
                    <span className="text-gray-400">Alert Information</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#2A3A50]">
                    <span className="text-gray-400">Alert Created</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Anomaly Detection Card */}
            <div className="w-full lg:w-1/2">
              <div className="bg-[#172334] rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl h-full">
                <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
                  Anomaly Detection
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#2A3A50] rounded-lg p-4 sm:p-6 text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7fffd4] mb-2">
                      NORMAL
                    </div>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-2 border-b border-[#2A3A50]">
                      <span className="text-gray-400">Detail 1</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#2A3A50]">
                      <span className="text-gray-400">Detail 2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool Wear Card */}
            <div className="w-full lg:w-1/4">
              <div className="bg-[#172334] rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl h-full">
                <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
                  Tool Wear (Min)
                </h3>
                <div className="flex items-center justify-center py-4 sm:py-6 md:py-8">
                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#7fffd4] mb-2 sm:mb-4">
                      0
                    </div>
                    <span className="text-white text-base sm:text-lg">min</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 bg-linear-to-b from-[#1F3A5F] to-[#4D648D] rounded-lg p-3 sm:p-4 text-center">
                  <p className="text-white text-xs sm:text-sm">
                    0% Until 180 min [Maximum Tool Wear]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
