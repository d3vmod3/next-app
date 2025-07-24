"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const companyDomains = [
  "apple.com",
  "microsoft.com",
  "google.com",
  "airbnb.com",
  "spotify.com",
  "tesla.com",
  "adobe.com",
  "dropbox.com",
  "netflix.com",
  "slack.com",
];

const getCompanies = (count: number) => {
  return companyDomains.slice(0, count);
};

const Clients = () => {
  const [randomCompanies, setRandomCompanies] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setRandomCompanies(getCompanies(6));
  }, []);

  useEffect(() => {
    // Skip animation on mobile
    if (window.innerWidth < 768 || !sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="clients" className="py-20 bg-secondary" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-primary">
          Trusted by Leading Brands
        </h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-90">
          {randomCompanies.map((domain, index) => (
            <Image
              key={index}
              src={`https://logo.clearbit.com/${domain}`}
              alt={`${domain} Logo`}
              height={60}
              width={120}
              className="grayscale hover:grayscale-0 transition duration-300 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
