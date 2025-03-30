import { FaRegClock } from "react-icons/fa";

export const ComingSoon = ({ tabName }) => (
  <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center p-10">
    <FaRegClock className="text-4xl text-[#232323] mb-4" />
    <h2 className="text-xl font-semibold text-[#232323] mb-2">Coming Soon</h2>
    <p className="text-gray-500">
      The <strong>{tabName}</strong> feature is under construction. Stay tuned
      for updates!
    </p>
  </div>
);
