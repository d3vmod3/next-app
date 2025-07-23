const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-neutral text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-primary">
          What Our Clients Say
        </h3>
        <div className="space-y-10 text-accent">
          <blockquote className="italic">
            “FeelDX transformed our digital presence. Their team was incredibly
            professional and creative.”
            <br />
            <span className="mt-2 block font-bold">— Jane D., CEO</span>
          </blockquote>
          <blockquote className="italic">
            “We’ve seen real results since partnering with FeelDX. Highly
            recommended!”
            <br />
            <span className="mt-2 block font-bold">
              — John S., Marketing Director
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
