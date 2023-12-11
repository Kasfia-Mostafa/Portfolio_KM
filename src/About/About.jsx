import Aos from "aos";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
};

const About = () => {
  return (
    <section className="">
      <div className="bg-[#fcdac1] max-w-full h-[100vh] flex justify-center items-center">
        <div data-aos="zoom-in">
          <div className="flex">
            <div className="w-2/6 border-r border-orange-500 mx-20">
              <img
                className="h-96 rounded-full"
                src="/src/assets/About Image.png"
                alt=""
              />
            </div>
            <div className="w-2/4  space-y-4 mx-10">
              <h2 className="text-8xl text-orange-800  font-bold">About Me</h2>
              <h2 className="text-4xl text-orange-600">Kasfia Mostafa</h2>
              <p className="text-lg text-orange-500">
                I'm front-end developer skilled in HTML, CSS, JavaScript,
                React.js, MongoDB.js, Node.js and Express.js .I'm passionate about
                creating intuitive interfaces, merging design with
                functionality, and staying updated with evolving technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
