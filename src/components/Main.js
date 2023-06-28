import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";

const Main = () => {
  return (
    /* Dashboard and generate Report Section */
    <div className="pt-6 px-6 bg-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-600 text-lg leading-9 font-normal cursor-pointer">
          Dashboard
        </h1>
        <button className="bg-blue-600 h-8 rounded text-white flex items-center justify-center px-4 cursor-pointer">
          Generate Report
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6 pb-4">
        {/* First Card */}
        <div className="h-[100px] rounded-lg bg-white border-l-4 border-blue-600 flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-purple-500 text-xs leading-4 font-bold">
              EARNINGS (MONTHLY)
            </h2>
            <h1 className="text-md leading-6 font-bold text-gray-600 mt-1">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus
            className="text-3xl"
            color=""
          />
        </div>
        {/* End of First Card */}

        {/* Second Card */}
        <div className="h-[100px] rounded-lg bg-white border-l-4 border-blue-600 flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-lime-500 text-xs leading-4 font-bold">
              PENDING REQUESTS
            </h2>
            <h1 className="text-md leading-6 font-bold text-gray-600 mt-1">
              16 Tasks
            </h1>
          </div>
          <FaRegCalendarMinus
            className="text-3xl"
            color=""
          />
        </div>
        {/* End of Second Card */}

        {/* Third Card */}
        <div className="h-[100px] rounded-lg bg-white border-l-4 border-blue-600 flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-purple-500 text-xs leading-4 font-bold">
              ON-GOING TASKS
            </h2>
            <h1 className="text-md leading-6 font-bold text-gray-600 mt-1">
              64 Tasks
            </h1>
          </div>
          <FaRegCalendarMinus
            className="text-3xl"
            color=""
          />
        </div>
        {/* End of Third Card */}

        {/* Fourth Card */}
        <div className="h-[100px] rounded-lg bg-white border-l-4 border-blue-600 flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-lime-500 text-xs leading-4 font-bold">
              COMPLETED TASKS
            </h2>
            <h1 className="text-md leading-6 font-bold text-gray-600 mt-1">
              1024
            </h1>
          </div>
          <FaRegCalendarMinus
            className="text-3xl"
            color=""
          />
        </div>
        {/* End of Fourth Card */}
      </div>
      {/* End of Grid */}
    </div>
  );
};

export default Main;
