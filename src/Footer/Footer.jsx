import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="footer items-center   text-neutral-content p-10 max-w-7xl mx-auto bg-white" >
        <aside className="items-center grid-flow-col">
          <p className="text-black font-semibold">
            Copyright © 2023 - All right reserved to Kasfia Mostafa
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.linkedin.com/in/kasfia-mostafa-95825a2a4/">
            <FaLinkedin className="text-2xl text-orange-600" />
          </a>
          <a href="https://www.facebook.com/KasfiaSworna/">
            <FaFacebookF className="text-2xl text-orange-600"/>
          </a>
          <a href="https://twitter.com/Kasfia_Mostafa">
            <FaTwitter className="text-2xl text-orange-600"/>
          </a>
          <a href="https://github.com/Kasfia-Mostafa">
            <FaGithub className="text-2xl text-orange-600"/>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
