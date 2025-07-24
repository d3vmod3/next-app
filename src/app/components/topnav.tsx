const TopNav = () => {
  return (
    <div className="navbar bg-neutral hidden lg:block">
      <div className="container mx-auto flex">
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            <li>
              <details className="dropdown">
                <summary className="">About Us</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li>
                    <a>Who we are</a>
                  </li>
                  <li>
                    <a>Capability Statement</a>
                  </li>
                  <li>
                    <a>Architechture, Engineering & Construction</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>News</a>
            </li>
            <li className="bg-primary rounded text-secondary">
              <a>1800 333 539</a>
            </li>
          </ul>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <input
            type="text"
            placeholder="Search services, projects, or insights..."
            className="input input-bordered focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
