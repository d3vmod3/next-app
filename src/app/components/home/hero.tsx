"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: -50,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      }
    });

    return () => mm.revert(); // clean up matchMedia listeners
  }, []);

  return (
    <div className="bg-neutral py-20 text-center">
      <div className="mx-auto px-4">
        <h2 ref={headingRef} className="text-4xl font-bold mb-4 text-primary">
          We Design Experiences that Connect
        </h2>
        <p className="text-lg text-accent mb-8">
          Empowering brands through seamless digital solutions.
        </p>
        <a
          href="#contact"
          className="bg-primary text-secondary px-6 py-3 rounded-md hover:opacity-90"
        >
          Get Started
        </a>

        <div className="mt-12 aspect-video w-full max-w-6xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/Cj68vo6jfgg"
            className="w-full h-full rounded-lg"
            allowFullScreen
            title="FeelDX Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
