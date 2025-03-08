import React from "react";

export const DesktopMenu: React.FC = () => {
  return (
    <ul className="menu menu-horizontal justify-between items-center gap-10 poppins font-bold hidden md:flex">
      <li className="cursor-pointer">
        <a href="#home" className={"link no-underline"}>
          Home
        </a>
      </li>
      <li className="cursor-pointer">
        <details>
          <summary>About</summary>
          <ul className="bg-[#fad9da] rounded-t-none p-2 scroll-auto">
            <li>
              <a href="#about" className={"link no-underline"}>
                About Me
              </a>
            </li>
            <li>
              <a href="#workExperience" className={"link no-underline"}>
                Experience
              </a>
            </li>
            <li>
              <a href="#project" className={"link no-underline"}>
                Projects
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a
          className="btn btn-primary rounded-3xl"
          href="mailto:harshan.l@outlook.com"
          target="blank"
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
};
