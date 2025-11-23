import React from "react";
import DataTable from "../components/DataTable";
import { machineData } from "../data/machineData";
import Logo from "../assets/logo.svg";

const Dashboard = () => {
  return (
    <div className="bg-[#0f1c2e] min-h-screen">
      <div className="">
        <header className="p-4 flex justify-center">
          <img src={Logo} alt="Logo" className="w-24 h-auto" />
        </header>
        <div className="bg-[#1F2B3E]/50 w-full py-2 px-8 border border-[#2A3A4E] rounded-b-lg">
          <h2 className="text-white font-semibold">Dashboard</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* Left Card */}
            <div className="md:w-1/3">
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
            <div className="md:flex-1">
              <div className="bg-[#172334] rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between text-center">
                    <div className="flex-1">
                      <div className="text-white font-medium">Machines Wealth</div>
                      <div className="text-[6.5rem] sm:text-[8rem] leading-none font-extrabold text-[#7fffd4]">50</div>
                    </div>

                    <div className="h-32 w-px bg-white/20 mx-6 hidden sm:block" />

                    <div className="flex-1">
                      <div className="text-white font-medium">Machines Maintenance</div>
                      <div className="text-[6.5rem] sm:text-[8rem] leading-none font-extrabold text-[#fff88c]">25</div>
                    </div>

                    <div className="h-32 w-px bg-white/20 mx-6 hidden sm:block" />

                    <div className="flex-1">
                      <div className="text-white font-medium">Machines Broken</div>
                      <div className="text-[6.5rem] sm:text-[8rem] leading-none font-extrabold text-[#ffb2b5]">10</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-white font-semibold">Units</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <DataTable data={machineData} itemsPerPage={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
