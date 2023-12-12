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
            src="https://i.ibb.co/h96Wzy2/html5-3384014-1280.png"
            alt=""
          />
          <img className="w-20 mx-14" src="https://i.ibb.co/JsPn4nk/css.jpg" alt="" />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/dWF8Kmm/3542736-21cf-1024x573.jpg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/GnNdTJj/js.jpg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/nndPctC/th.jpg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/ZHS9dCm/1-WSP9-OMy-Xb-ULdf-Zmx8-t6-Vw.jpg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/p0Nm0Dp/nd.png"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/FmcPdLh/expressjsframework.webp"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/1TvTsFk/f.jpg"
            alt=""
          />
          <img className="w-20 mx-14" src="https://i.ibb.co/cFyLRqB/git.jpg" alt="" />
        </Marquee>
        <Marquee pauseOnHover={true} speed={100}>
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/h96Wzy2/html5-3384014-1280.png"
            alt=""
          />
           <img className="w-20 mx-14" src="https://i.ibb.co/JsPn4nk/css.jpg" alt="" />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/dWF8Kmm/3542736-21cf-1024x573.jpg"
            alt=""
          />
         <img className="w-20 mx-14" src="https://i.ibb.co/cFyLRqB/git.jpg" alt="" />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/ZHS9dCm/1-WSP9-OMy-Xb-ULdf-Zmx8-t6-Vw.jpg"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/GnNdTJj/js.jpg"
            alt=""
          />
           <img
            className="w-20 mx-14"
            src="https://i.ibb.co/FmcPdLh/expressjsframework.webp"
            alt=""
          />
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/nndPctC/th.jpg"
            alt=""
          />
          
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/p0Nm0Dp/nd.png"
            alt=""
          />
         
          <img
            className="w-20 mx-14"
            src="https://i.ibb.co/1TvTsFk/f.jpg"
            alt=""
          />
          
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;
