import Image from "next/image";
import logo from "@/public/logo-sample.jpg";
const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-primary">
          Trusted by Leading Brands
        </h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-90">
          <Image src={logo} height={100} width={100} alt="Client 1" />
          <Image src={logo} height={100} width={100} alt="Client 2" />
          <Image src={logo} height={100} width={100} alt="Client 3" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
