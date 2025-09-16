import Hero from "@/components/home/hero";
import Why from "@/components/home/why";
import Services from "@/components/home/services";
import Clients from "@/components/home/clients";
import Testimonials from "@/components/home/testimonials";
import GoToPageButton from "@/components/gotoTopPage";
export default function Home() {
  return (
    <>
      <GoToPageButton />
      <Hero />
      <Why />
      <Services />
      <Clients />
      <Testimonials />
    </>
  );
}
