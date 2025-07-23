const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary p-6 shadow rounded-md">
            <h4 className="font-bold mb-2">UI/UX Design</h4>
            <p>Crafting intuitive and elegant user experiences.</p>
          </div>
          <div className="bg-secondary p-6 shadow rounded-md">
            <h4 className="font-bold mb-2">Web Development</h4>
            <p>Responsive, accessible, and high-performance websites.</p>
          </div>
          <div className="bg-secondary p-6 shadow rounded-md">
            <h4 className="font-bold mb-2">Brand Strategy</h4>
            <p>Positioning your brand to stand out and scale.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
