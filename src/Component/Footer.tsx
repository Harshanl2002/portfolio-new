import React from "react";
import { HomeIconButtonGroup } from "./HomeIconButtonGroup";

const Footer: React.FC = () => {
  return (
    <footer className="pb-10">
      <div className="max-w-[90vw] container md:max-w-4xl mx-auto px-6 flex flex-col justify-between items-center">
        <h6 className="arizonia text-3xl font-bold ml-2 md:text-5xl md:ml-0">
          Harshan
        </h6>
        
        <HomeIconButtonGroup />
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-4 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Harshan Loganthan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
