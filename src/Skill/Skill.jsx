import Marquee from "react-fast-marquee";
import Aos from "aos";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
};

const Skill = () => {
  return (
    <div className="bg-[#fcdac1] max-w-full h-[80vh]">
      <div data-aos="zoom-in">
        <h2 className="text-7xl text-center pt-10 text-orange-600 font-bold ">
          Skills
        </h2>
      </div>
      <div className=" grid justify-center items-center h-[40vh]">
        <Marquee pauseOnHover={true} speed={100}>
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/HTML.svg"
            alt=""
          />
          <img className="w-20 mx-14" src="/src/assets/Skills/CSS.svg" alt="" />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/TailwindCSS-Light.svg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/JavaScript.svg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/React-Light.svg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/MongoDB.svg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/NodeJS-Light.svg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/ExpressJS-Light.svg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/Firebase-Light.svg"
            alt=""
          />
          <img className="w-20 mx-14" src="/src/assets/Skills/Git.svg" alt="" />
        </Marquee>
        <Marquee pauseOnHover={true} speed={100}>
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/HTML.svg"
            alt=""
          />
          <img className="w-20 mx-14" src="/src/assets/Skills/CSS.svg" alt="" />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/TailwindCSS-Light.svg"
            alt=""
          />
          <img className="w-20 mx-14" src="/src/assets/Skills/Git.svg" alt="" />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/MongoDB.svg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/JavaScript.svg"
            alt=""
          />
           <img
            className="w-20 mx-14"
            src="/src/assets/Skills/ExpressJS-Light.svg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/React-Light.svg"
            alt=""
          />
          
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/NodeJS-Light.svg"
            alt=""
          />
         
          <img
            className="w-20 mx-14"
            src="/src/assets/Skills/Firebase-Light.svg"
            alt=""
          />
          
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;
