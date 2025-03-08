export const NavDrawer: React.FC = () => {
  return (
    <div className="drawer drawer-end flex md:hidden">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="nav-drawer"
          className="btn btn-primary btn-ghost btn-circle drawer-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer-side  z-100">
        <ul className="menu bg-[#fad9da] text-black min-h-full w-[60vw] p-4 absolute">
          {/* Close Buthrefn */}
          <label
            htmlFor="nav-drawer"
            className="drawer-overlay btn btn-primary btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>

          {/* Nav Links with Close Function */}
          <li className="mt-2">
            <a href="#home" className={"link no-underline"}>
              Home
            </a>
          </li>
          <li>
            {/* <a href="#about" className={"link no-underline"}>
              About
            </a> */}
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
          <li className="mt-5">
            <a
              className="btn btn-primary rounded-3xl"
              href="mailto:harshan.l@outlook.com"
              target="blank"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
