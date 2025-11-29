import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../components/DataTable";
import { machineData } from "../data/machineData";
import Logo from "../assets/logo.svg";
import Header from "../components/Header";
import { mlApi } from "../services/mlApi";
import { sampleMachines } from "../data/machineData";

const Dashboard = () => {

  // Predictions
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    predictAllSamples();
  }, []);

  const predictAllSamples = async () => {
    setLoading(true);
    setError(null);

    try {
      const results = await Promise.all(
        sampleMachines.map(async (machine) => {
          try {
            const result = await mlApi.predict({
              machine_id: machine.machine_id,
              air_temperature: machine.air_temperature,
              process_temperature: machine.process_temperature,
              rotational_speed: machine.rotational_speed,
              torque: machine.torque,
              tool_wear: machine.tool_wear,
              type: machine.type
            });
            return {
              ...machine,
              prediction: result
            };
          } catch (err) {
            return {
              ...machine,
              prediction: null,
              error: err.message
            };
          }
        })
      );
      setPredictions(results);
    } catch (err) {
      setError(`Failed to load predictions: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Tables
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(sampleMachines.length / 5);
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const currentData = predictions.slice(startIndex, endIndex);
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f1c2e] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
          <p className="mt-4 text-lg text-gray-200">Loading Data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0f1c2e] min-h-screen">
      <div className="">
        <Header />
        <div className="bg-[#1F2B3E]/50 w-full py-2 px-8 border border-[#2A3A4E] rounded-b-lg">
          <h2 className="text-white font-semibold">Dashboard</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Left Card */}
            <div className="lg:w-1/3">
              <div className="bg-[#172334] rounded-2xl p-6 shadow-xl h-full">
                <h3 className="text-lg font-semibold text-white">Maintenance History (3 months)</h3>

                <div className="mt-8 relative">
                  <div className="absolute left-4 right-4 bottom-2 h-px bg-white/30"></div>

                  <div className="relative flex items-end justify-between gap-6 pt-2">
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-16 rounded-t-full bg-[#D6E9FF]" style={{ height: '120px' }}></div>
                      <div className="h-2"></div>
                    </div>

                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-16 rounded-t-full bg-[#5B7095]" style={{ height: '150px' }}></div>
                      <div className="h-2"></div>
                    </div>

                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-16 rounded-t-full bg-[#C6D4FF]" style={{ height: '90px' }}></div>
                      <div className="h-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card*/}
            <div className="lg:flex-1">
              {predictions.length > 0 && (
                <div className="bg-[#172334] rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center justify-between text-center">
                      <div className="flex-1">
                        <div className="text-white font-medium">Low Severity</div>
                        <div className="text-[4.5rem] sm:text-[8rem] leading-none font-extrabold text-[#7fffd4]">{predictions.filter(p => p.prediction?.diagnostics?.severity === 'LOW').length}</div>
                      </div>

                      <div className="h-32 w-px bg-white/20 mx-6 hidden sm:block" />

                      <div className="flex-1">
                        <div className="text-white font-medium">Medium Severity</div>
                        <div className="text-[4.5rem] sm:text-[8rem] leading-none font-extrabold text-[#fff88c]">{predictions.filter(p => p.prediction?.diagnostics?.severity === 'MEDIUM').length}</div>
                      </div>

                      <div className="h-32 w-px bg-white/20 mx-6 hidden sm:block" />

                      <div className="flex-1">
                        <div className="text-white font-medium">High Severity</div>
                        <div className="text-[4.5rem] sm:text-[8rem] leading-none font-extrabold text-[#ffb2b5]">{predictions.filter(p => p.prediction?.diagnostics?.severity === 'HIGH').length}</div>
                      </div>

                      <div className="h-32 w-px bg-white/20 mx-6 hidden sm:block" />

                      <div className="flex-1">
                        <div className="text-white font-medium">Critical Severity</div>
                        <div className="text-[4.5rem] sm:text-[8rem] leading-none font-extrabold text-[#ff646a]">{predictions.filter(p => p.prediction?.diagnostics?.severity === 'CRITICAL').length}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="text-white font-semibold">Units</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="mt-8">
            <div className="p-8 bg-linear-to-b from-[#1F3A5F] to-[#4D648D] rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto rounded-2xl">
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
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white border-r border-[#3A4A60]">
                        Torque
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white border-r border-[#3A4A60]">
                        Tool Wear
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-[#2A3A50] bg-white/10 hover:bg-[#1F2B3E]/50 transition-colors"
                        onClick={() => navigate(`/details/${row.id}`, { state: { row }})}
                      >
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          {row.machine_id}
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          {row.type}
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          {row.air_temperature}
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          {row.process_temperature}
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          {row.rotational_speed}
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          {row.torque}
                        </td>
                        <td className="px-6 py-4 text-sm text-white border-r border-[#2A3A50]">
                          {row.tool_wear}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link to={`/details`} className="text-white hover:text-blue-400 transition-colors">
                          <button className="text-white hover:text-blue-400 transition-colors">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-4 mt-4 rounded-2xl p-4 bg-[#1F2B3E]/30 w-fit mx-auto">
                <span className="text-white text-sm">
                  Showing {startIndex + 1}-{Math.min(endIndex, sampleMachines.length)}/{sampleMachines.length}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-[#2A3A50] text-white rounded-lg hover:bg-[#3A4A60] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    →
                  </button>
                </div>
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

export default Dashboard;
