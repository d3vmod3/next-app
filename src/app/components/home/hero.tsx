const Hero = () => {
  return (
    <>
      <section className="bg-neutral py-20 text-center">
        <div className="mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-primary">
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

          {/* Optional: Vimeo Video */}
          <div className="mt-12 aspect-video w-full max-w-6xl mx-auto">
            <iframe
              src="https://vimeo.com/showcase/11524616/video/1049585198/embed?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NTMyNTg2ODAsInVzZXJfaWQiOm51bGwsImFwcF9pZCI6NTg0NzksInNjb3BlcyI6InB1YmxpYyIsInRlYW1fdXNlcl9pZCI6bnVsbCwianRpIjoiYmNlMjZmMWItZDBlNy00MmY4LWJhMmUtMDY0ZDc5MGY3ZTNjIn0.USyfoPP4Vfk8bQMfQ6voXv292CovSoOlTzh5VFM21qM&autoplay=1&autopause=0"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allowFullScreen
              title="FeelDX Video"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
