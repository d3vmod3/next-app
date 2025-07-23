const Footer = () => {
  return (
    <footer id="contact" className="bg-accent text-secondary py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold mb-2">FeelDX</h4>
          <p>Digital experience agency committed to innovation and impact.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p>Email: hello@feeldx.com</p>
          <p>Phone: +1 234 567 8901</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#why" className="hover:underline">
                Why FeelDX
              </a>
            </li>
            <li>
              <a href="#clients" className="hover:underline">
                Clients
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:underline">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        &copy; {new Date().getFullYear()} FeelDX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
