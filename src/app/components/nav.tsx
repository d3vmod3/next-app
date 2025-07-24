"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "@/public/logo";
import TopNav from "@/components/topnav";

const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        gsap.to(nav, { y: -150, duration: 0.3, ease: "power2.out" }); // Hide nav
      } else {
        gsap.to(nav, { y: 0, duration: 0.3, ease: "power2.out" }); // Show nav
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={navRef} className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <TopNav />
      <div className="navbar bg-secondary shadow-sm py-6">
        <div className="container mx-auto flex">
          <div className="navbar-start">
            <a className="btn btn-ghost btn-no-bg-hover">
              <Logo />
            </a>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#why">Why FEELDX</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#clients">Clients</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Mobile Drawer */}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-1">
                <li className="mb-4">
                  <a className="btn btn-ghost btn-no-bg-hover">
                    <Logo />
                  </a>
                </li>
                <li>
                  <a href="#why">Why FEELDX</a>
                </li>
                <li>
                  <a href="#services">Our Services</a>
                </li>
                <li>
                  <a href="#clients">Clients</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <hr className="my-6 border-t border-gray-300" />
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
                <li className="flex">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    1800 333 539
                  </a>
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
