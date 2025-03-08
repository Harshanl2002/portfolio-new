import React from "react";
import { NavDrawer } from "./Drawer";
import { DesktopMenu } from "./DesktopMenu";

const Navbar: React.FC = () => {
  // Function href close the drawer

  return (
    <div className="flex text-black sticky top-0 poppins justify-center bg-[#fbe0e2]">
      <nav className="flex justify-between items-center h-20 min-w-[90dvw] md:min-w-4xl md:max-w-4xl ">
        <h6 className="arizonia text-3xl font-bold ml-2 md:text-5xl md:ml-0">
          Harshan
        </h6>
        <div>
          <NavDrawer />
          <DesktopMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
