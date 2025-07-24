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
                <a href="#work">Our Work</a>
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
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
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
                  <a href="#work">Our Work</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
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
