import Logo from "@/public/logo";
import TopNav from "@/components/topnav";

const Nav = () => {
  return (
    <div>
      <div>
        <TopNav />
      </div>
      <div className="navbar shadow-sm py-12">
        <div className="container mx-auto flex">
          <div className="navbar-start">
            <div>
              <a className="btn btn-ghost text-xl btn-no-bg-hover">
                <Logo />
              </a>
            </div>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Studio</a>
              </li>
              <li>
                <a>Project Control</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Technology</a>
              </li>
              <li>
                <a>Our Work</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="drawer drawer-end lg:hidden navbar-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="drawer-button btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-12 w-12 stroke-current"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>{" "}
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Studio</a>
                </li>
                <li>
                  <a>Project Control</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Technology</a>
                </li>
                <li>
                  <a>Our Work</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
