import Aos from "aos";
import { useEffect } from "react";
import { CiSaveDown1 } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
};

const About = () => {
  return (
    <section>
      <div className="bg-[#fcdac1] max-w-full h-[220vh] lg:h-[150vh] flex justify-center items-center">
        <div data-aos="zoom-in">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-4/6 lg:border-r border-orange-500 ml-20 lg:ml-32">
              <img
                className="lg:h-96 rounded-full"
                src="/src/assets/About Image.png"
                alt=""
              />
            </div>
            <div className="w-3/4 space-y-5 mx-10 my-5">
              <h2 className="text-6xl lg:text-8xl text-orange-800  font-bold">About Me</h2>
              <h2 className="text-4xl lg:text-5xl text-orange-600">Kasfia Mostafa</h2>
              <p className="text-2xl lg:text-2xl text-orange-500">
                I'm a front-end developer skilled in HTML, CSS, JavaScript,
                React.js, MongoDB.js, Node.js and Express.js . I'm passionate
                about creating intuitive interfaces, merging design with
                functionality, and staying updated with evolving technologies.
              </p>
              <div className="flex gap-10 ">
                <div
                  className="flex text-center bg-gradient-to-tr from-orange-600 to-orange-100 w-[170px] h-16 mt-8 p-5 btn bg-white border-none hover:bg-orange-200 text-black"
                  data-aos="zoom-in"
                >
                  <a
                    className="text-lg text-white"
                    href="/src/assets/Branding.pdf"
                    download
                  >
                    Resume
                  </a>
                  <CiSaveDown1 className="ml-2 text-2xl text-white " />
                </div>
                <nav className="grid grid-cols-4 mt-14 lg:mt-6 gap-4 md:place-self-center md:justify-self-end">
                  <a href="https://www.linkedin.com/in/kasfia-mostafa-95825a2a4/">
                    <FaLinkedin className="text-2xl text-orange-600" />
                  </a>
                  <a href="https://www.facebook.com/KasfiaSworna/">
                    <FaFacebookF className="text-2xl text-orange-600" />
                  </a>
                  <a href="https://twitter.com/Kasfia_Mostafa">
                    <FaTwitter className="text-2xl text-orange-600" />
                  </a>
                  <a href="https://github.com/Kasfia-Mostafa">
                    <FaGithub className="text-2xl text-orange-600" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
