"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0.1,
      ease: "power2.out",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed cursor-pointer hover:bg-neutral hover:text-accent shadow-sm bottom-6 right-6 z-50 rounded-full bg-primary text-white p-3 shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      ↑ Top
    </button>
  );
};

export default ScrollToTop;
