const TopNav = () => {
  return (
    <div className="navbar bg-neutral hidden lg:block">
      <div className="container mx-auto flex">
        <div className="navbar-start"></div>
        <div className="navbar-center"></div>
        <div className="navbar-end hidden lg:flex">
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
                    <a>Aec</a>
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
      </div>
    </div>
  );
};

export default TopNav;
