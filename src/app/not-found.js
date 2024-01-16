
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="flex justify-center items-center">
        <div>
        
          <div className="text-center py-10">
            <h1 className="text-4xl pb-5">OOOPS!!!! Page not found</h1>
            <Link href="/">
              <button className="bg-blue-700 text-white text-lg  px-7 py-3 rounded transition-all hover:bg-blue-900">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;
