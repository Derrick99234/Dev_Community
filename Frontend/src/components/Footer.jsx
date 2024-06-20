import { Link } from "react-router-dom";
import {
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const usefulLinks = [
  { route: "#", linkText: "Discover" },
  { route: "#", linkText: "Safety" },
  { route: "#", linkText: "Support" },
  { route: "#", linkText: "Blog" },
  { route: "/login", linkText: "Login" },
];

const resources = [
  { route: "#", linkText: "About" },
  { route: "#", linkText: "Jobs" },
  { route: "#", linkText: "Brand" },
  { route: "#", linkText: "Newsroom" },
  { route: "#", linkText: "Community" },
];

const policies = [
  { route: "#", linkText: "Terms" },
  { route: "#", linkText: "Privacy" },
  { route: "#", linkText: "Guidelines" },
  { route: "#", linkText: "Acknowledgements" },
  { route: "#", linkText: "Licences" },
];

const Footer = () => {
  return (
    <footer className="bg-blue px-3 md:px-6 py-4">
      <div className="flex justify-start gap-8 sm:flex-row flex-col">
        <div className="basis basis-[25%]">
          <h2 className="font-bold text-[25px] mb-4">
            Dev<span className="text-white">Community</span>
          </h2>

          <p className="text-white">
            Start Chatting with friends and families, anywhere, anytime. Great
            software that allows you to chat with anyone, anywhere, anytime
            without interruption.
          </p>
        </div>
        <div className="basis basis-[25%]">
          <h2 className="font-bold text-[25px] text-white">Useful Links</h2>

          <ul>
            {usefulLinks.map((link) => (
              <li
                key={link.linkText}
                className="transition-all flex items-center justify-start gap-1 cursor-pointer hover:ml-1 text-white text-white hover:text-black"
              >
                <FaAngleRight />
                <Link to={link.route}>{link.linkText}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis basis-[25%]">
          <h2 className="font-bold text-[25px] text-white">Resources</h2>

          {resources.map((link) => (
            <li
              key={link.linkText}
              className="transition-all flex items-center justify-start gap-1 cursor-pointer hover:ml-1 text-white hover:text-black"
            >
              <FaAngleRight />
              <Link to={link.route}>{link.linkText}</Link>
            </li>
          ))}
        </div>
        <div className="basis basis-[25%]">
          <h2 className="font-bold text-[25px] text-white">Policies</h2>

          {policies.map((link) => (
            <li
              key={link.linkText}
              className="transition-all flex items-center justify-start gap-1 cursor-pointer hover:ml-1 text-white hover:text-black"
            >
              <FaAngleRight />
              <Link to={link.route}>{link.linkText}</Link>
            </li>
          ))}
        </div>
      </div>

      <hr className="my-8 bg-white p-[.3px] border-none rounded-full" />

      <div className="flex items-center justify-center gap-10">
        <FaFacebook className="text-[30px] text-white hover:text-black cursor-pointer" />
        <FaTwitter className="text-[30px] text-white hover:text-black cursor-pointer" />
        <FaLinkedin className="text-[30px] text-white hover:text-black cursor-pointer" />
        <FaInstagram className="text-[30px] text-white hover:text-black cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
