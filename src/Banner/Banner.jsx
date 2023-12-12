import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CiSaveDown1 } from "react-icons/ci";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-tr from-[#000000d6]">
            <img
              className="lg:w-[100vw] h-[100vh] lg:h-[100vh] bg-cover mix-blend-overlay"
              src="https://i.ibb.co/DgnsmTB/Untitled-design.png"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="absolute right-[100px] top-8 lg:top-36"
        >
          <img
            className="w-full h-60 lg:h-[600px] rounded-full px-12"
            src="/src/assets/Untitled design.png"
            alt=""
          />
        </div>
        <div>
          <div className="absolute left-12 lg:left-40 top-64 mr-6 mt-10">
            <div className="text-4xl lg:text-7xl font-extrabold text-[#fafafa]">
              <div>
                <div className="flex gap-2 ">
                  <div data-aos="fade-right">
                    <h1 className="">
                      Kasfia
                    </h1>
                  </div>
                  <div className="w-40 h-10 lg:w-80 lg:h-16 bg-[#fafafa]"></div>
                </div>
                <div className="flex gap-2 mt-2 ">
                  <div data-aos="fade-right">
                    <h1 className="">
                      Mostafa
                    </h1>
                  </div>
                  <div className="w-40 h-10 lg:w-80 lg:h-16 bg-[#fafafa]"></div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div data-aos="fade-right">
                    <h1 className="">
                      Front-End
                    </h1>
                  </div>
                  <div className="w-40 h-10 lg:w-80 lg:h-16 bg-[#fafafa]"></div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div data-aos="fade-right">
                    <h1 className="">
                      Developer
                    </h1>
                  </div>
                  <div className="w-40 h-10 lg:w-80 lg:h-16 bg-[#fafafa]"></div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
