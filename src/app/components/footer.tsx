import Logo from "@/public/logo";
import Instagram from "@/public/instagram";
import Linkedin from "@/public/linkedin";
import Facebook from "@/public/facebook";
import Youtube from "@/public/youtube";
const Footer = () => {
  return (
    <footer id="contact" className="bg-accent text-secondary py-10 px-10">
      <div className="container mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-start gap-4 space-y-4">
        <div>
          <a className="btn btn-ghost pl-1 btn-no-bg-hover border">
            <Logo colorVariant="white" />
          </a>
          <div className="">
            <div className="text-2xl">Plan</div>
            <div className="text-2xl">Visualise</div>
            <div className="text-2xl">Transform</div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact Us</h4>
          <p className="space-y-2">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <b>contact@feeldx.com.au</b>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <b>1800 333 539</b>
            </span>
            <span className="flex items-center space-x-1">
              <a href="https://www.instagram.com/feeldx/">
                <Instagram colorVariant="white" />
              </a>
              <a href="https://www.linkedin.com/company/feeldx/">
                <Linkedin colorVariant="white" />
              </a>
              <a href="https://www.facebook.com/feeldx">
                <Facebook colorVariant="white" />
              </a>
              <a href="https://www.youtube.com/channel/UC9kmR0LVnaZahPLxodFdesQ">
                <Youtube colorVariant="white" />
              </a>
            </span>
          </p>
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
