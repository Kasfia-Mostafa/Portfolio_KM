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
        <div className="flex items-center justify-center ">
          <div className="bg-gradient-to-tr from-[#000000d6]">
            <img
              className="w-[100vw] h-[100vh] bg-cover mix-blend-overlay "
              src="https://i.ibb.co/DgnsmTB/Untitled-design.png"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="absolute right-[100px] top-36"
        >
          <img
            className="w-full h-[600px] rounded-full"
            src="/src/assets/Untitled design.png"
            alt=""
          />
        </div>
        <div>
          <div className="absolute left-40 top-64 mr-6 ">
            <div className="text-7xl font-extrabold text-[#fafafa]">
              <div>
                <div className="flex gap-2 ">
                  <div data-aos="fade-right">
                    <h1 className="bg-gradient-to-tr from-orange-600 to-slate-200">
                      Kasfia
                    </h1>
                  </div>
                  <div className="w-80 h-18 bg-[#fafafa]"></div>
                </div>
                <div className="flex gap-2 mt-2 ">
                  <div data-aos="fade-right">
                    <h1 className="bg-gradient-to-tr from-orange-600 to-slate-200">
                      Mostafa
                    </h1>
                  </div>
                  <div className="w-80 h-18 bg-[#fafafa]"></div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div data-aos="fade-right">
                    <h1 className="bg-gradient-to-tr from-orange-600 to-slate-200">
                      Front-End
                    </h1>
                  </div>
                  <div className="w-80 h-18 bg-[#fafafa]"></div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div data-aos="fade-right">
                    <h1 className="bg-gradient-to-tr from-orange-600 to-slate-200">
                      Developer
                    </h1>
                  </div>
                  <div className="w-80 h-18 bg-[#fafafa]"></div>
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
