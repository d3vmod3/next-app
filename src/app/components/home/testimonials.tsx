"use client";

import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const startAutoplay = () => {
    if (intervalRef.current || isPaused || !carouselRef.current) return;

    intervalRef.current = setInterval(() => {
      if (!carouselRef.current) return;

      const items = carouselRef.current.querySelectorAll(".carousel-item");
      const currentScroll = carouselRef.current.scrollLeft;
      const containerWidth = carouselRef.current.clientWidth;

      const currentIndex = Math.round(currentScroll / containerWidth);
      const nextIndex = (currentIndex + 1) % items.length;

      carouselRef.current.scrollTo({
        left: nextIndex * containerWidth,
        behavior: "smooth",
      });
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isPaused) startAutoplay();

    return () => stopAutoplay();
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-20 bg-neutral text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-primary">
          What Our Clients Say
        </h3>
        <div className="container mx-auto">
          <div
            ref={carouselRef}
            className="carousel w-full"
            onMouseEnter={() => {
              setIsPaused(true);
              stopAutoplay();
            }}
            onMouseLeave={() => {
              setIsPaused(false);
            }}
          >
            <div id="item1" className="carousel-item w-full">
              <blockquote className="italic mx-auto">
                “They were friendly, professional, ethical people who understood
                exactly what we required in order to deliver a very complex
                project.”
                <br />
                <span className="mt-2 block font-bold">— Director</span>
                <p>Tier 2 Construction – National</p>
              </blockquote>
            </div>
            <div id="item2" className="carousel-item w-full">
              <blockquote className="italic mx-auto">
                “When we received our deliverables from FeelDX, we saw that
                something felt different. We knew there was an element missing
                but weren’t sure how to make it happen and under strict time
                pressure they worked tirelessly for us and added the “wow”
                factor our projects needed.Thank you team, just had a look –
                everything looks really well put together! Thanks again for
                being so responsive and making the process easy for us.”
                <br />
                <span className="mt-2 block font-bold">
                  — Preconstruction Manager
                </span>
                <p>Tier 2 - National NSW & VIC</p>
              </blockquote>
            </div>
            <div id="item3" className="carousel-item w-full">
              <blockquote className="italic mx-auto">
                “The team understood the build process and we didn’t have to
                hold their hands. FeelDX went over and above with their quality
                of service.”
                <br />
                <span className="mt-2 block font-bold">— Chief Estimator</span>
                <p>Tier 3 Builder - GEELONG</p>
              </blockquote>
            </div>
            <div id="item4" className="carousel-item w-full">
              <blockquote className="italic mx-auto">
                “Quality of visuals and attention to detail captured the intent
                of our programme and methodology.”
                <br />
                <span className="mt-2 block font-bold">
                  — Estimating Manager
                </span>
                <p>TIER 2 VIC</p>
              </blockquote>
            </div>
          </div>

          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
