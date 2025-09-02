import React from "react";
import { BounceLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <BounceLoader color="#0406ff" size={60} speedMultiplier={1.2} />
      <p className="mt-4 text-blue-500 font-semibold text-sm">Loading...</p>
    </div>
  );
};

export default Spinner;
