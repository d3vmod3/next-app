"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Why = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="why" className="py-20 bg-secondary" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-6 text-center text-primary">
          Why Choose FeelDX
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center text-accent">
          <div>
            <h4 className="font-bold text-lg mb-2">Experienced Team</h4>
            <p>
              Over 10 years of delivering digital innovation across industries.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Client-First Approach</h4>
            <p>Every design decision is made to support your business goals.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">End-to-End Service</h4>
            <p>From strategy to execution — we handle it all seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
