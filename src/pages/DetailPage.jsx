import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const DetailPage = () => {
  return (
    <div className="bg-[#0f1c2e] min-h-screen">
      <div className="">
        <header className="p-4 flex justify-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-24 h-auto" />
          </Link>
        </header>
        <div className="bg-[#1F2B3E]/50 w-full py-2 px-8 border border-[#2A3A4E] rounded-b-lg">
          <h2 className="text-white font-semibold">Detail - M14860</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex gap-8 justify-center mb-8">
            <div className="md:w-1/4">
              <div className="bg-[#172334] rounded-2xl p-6 shadow-xl h-full">
                <h3 className="text-lg font-semibold text-white">
                  Equipment Details
                </h3>
                <div className="py-8">
                  <img src={Logo} alt="Logo" className="w-24 h-auto" />
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Product Name: M14860
                </h2>
                <div className="text-white text-sm">
                  <ul>
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

            <div className="w-32">
              <div className="bg-[#172334] rounded-2xl p-6 shadow-xl h-full">
                <div className="flex flex-col items-center justify-center space-y-6 py-2">
                  <h2 className="text-white font-semibold">Condition</h2>
                  <div className="w-16 h-16 rounded-full bg-[#172334] shadow-lg shadow-red-500/50 ring-4 ring-red-500/30"></div>
                  <div className="w-16 h-16 rounded-full bg-[#172334] shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/30"></div>
                  <div className="w-16 h-16 rounded-full bg-green-500 shadow-lg shadow-green-500/50 ring-4 ring-green-500/30"></div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="p-8 bg-linear-to-b from-[#1F3A5F] to-[#4D648D] rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto rounded-2xl">
                  <h2 className="text-white mb-4 font-semibold">
                    Maintenance History
                  </h2>
                  <table className="w-full rounded">
                    <thead>
                      <tr className="bg-[#2A3A50]">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white border-r border-[#3A4A60]">
                          Product Name
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white border-r border-[#3A4A60]">
                          Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white border-r border-[#3A4A60]">
                          Air Temperature
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white border-r border-[#3A4A60]">
                          Process Temperature
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white border-r border-[#3A4A60]">
                          Rotational Speed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#2A3A50] bg-white/10 hover:bg-[#1F2B3E]/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test1
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test2
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test3
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test4
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test5
                        </td>
                      </tr>
                      <tr className="border-b border-[#2A3A50] bg-white/10 hover:bg-[#1F2B3E]/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test1
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test2
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test3
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test4
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          test5
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-4 mt-4 rounded-2xl p-4 bg-[#1F2B3E]/30 w-fit mx-auto">
                  <span className="text-white text-sm">
                    Showing 1 to 1 of 1 entries
                  </span>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                      ←
                    </button>
                    <button className="px-4 py-2 bg-[#2A3A50] text-white rounded-lg hover:bg-[#3A4A60] disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 justify-center">
            {/* Alert Card */}
            <div className="md:w-1/4">
              <div className="bg-[#172334] rounded-2xl p-6 shadow-xl h-full">
                <div className="mb-4">
                  <button className="text-white text-sm px-4 py-2 bg-[#2A3A50] rounded-lg hover:bg-[#3A4A60] transition-colors">
                    Alert
                  </button>
                  <button className="text-white text-sm px-4 py-2 ml-2 hover:bg-[#2A3A50] rounded-lg transition-colors">
                    Ticket
                  </button>
                </div>
                <div className="space-y-2 text-sm text-white">
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
            <div className="md:w-1/2">
              <div className="bg-[#172334] rounded-2xl p-6 shadow-xl h-full">
                <h3 className="text-white font-semibold mb-4">
                  Anomaly Detection
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#2A3A50] rounded-lg p-4 text-center">
                    <div className="text-6xl font-bold text-[#7fffd4] mb-2">
                      NORMAL
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
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
            <div className="md:w-1/4">
              <div className="bg-[#172334] rounded-2xl p-6 shadow-xl h-full">
                <h3 className="text-white font-semibold mb-4">
                  Tool Wear (Min)
                </h3>
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-[#7fffd4] mb-4">
                      0
                    </div>
                    <span className="text-white text-lg">min</span>
                  </div>
                </div>
                <div className="mt-6 bg-linear-to-b from-[#1F3A5F] to-[#4D648D] rounded-lg p-4 text-center">
                  <p className="text-white text-sm">
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
