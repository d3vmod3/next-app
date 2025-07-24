"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Bounce animation
      gsap.from(cardRefs.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "bounce.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#services",
          start: "top 80%",
        },
      });

      // Hover scale
      cardRefs.current.forEach((card) => {
        if (!card) return;

        const handleEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        };

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);

        // Clean up
        return () => {
          card.removeEventListener("mouseenter", handleEnter);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });
    });

    return () => mm.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-8 text-primary">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "3D ‑ 7D BIM & Digital Twin",
              desc: "Create visual project models that integrate construction schedules, cost data, and lifecycle insights.",
            },
            {
              title: "Multimedia Visualisation",
              desc: "Stunning renders, flythroughs, and VR/AR experiences to bring infrastructure projects to life.",
            },
            {
              title: "Project Control & Forensics",
              desc: "Tender planning, scheduling validation, claim analysis, and contract support throughout your project lifecycle.",
            },
            {
              title: "Construction Lifecycle Management",
              desc: "End‑to‑end collaboration from concept, to tender package, to delivery and post‑completion optimization.",
            },
            {
              title: "Education & Training Solutions",
              desc: "Interactive VR/AR training content for organisations like RTOs, universities, and construction businesses.",
            },
            {
              title: "Infrastructure & Data Centre Planning",
              desc: "Specialist planning and control services for infrastructure builds and data centre developments.",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={addToRefs}
              className="bg-secondary p-6 shadow rounded-md"
            >
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.feeldx.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-secondary px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
