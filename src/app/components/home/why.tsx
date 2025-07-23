const Why = () => {
  return (
    <section id="why" className="py-20 bg-secondary">
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
