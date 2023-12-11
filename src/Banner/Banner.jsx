import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Drawer from "../Drawer/Drawer";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="flex items-center justify-center w-full ml-10 ">
          <div className="bg-gradient-to-tr from-[#000000d6] w-4/6 h-[100vh]">
            <img
              className="w-full h-[100vh] mix-blend-overlay "
              src="/src/assets/OIG (1).jpeg"
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
                    <h1>Kasfia</h1>
                  </div>
                  <div className="w-80 h-18 bg-[#fafafa]"></div>
                </div>
                <div className="flex gap-2 mt-2 ">
                  <div data-aos="fade-right">
                    <h1>Mostafa</h1>
                  </div>
                  <div className="w-80 h-18 bg-[#fafafa]"></div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div data-aos="fade-right">
                    <h1>Front-End</h1>
                  </div>
                  <div className="w-80 h-18 bg-[#fafafa]"></div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div data-aos="fade-right">
                    <h1>Developer</h1>
                  </div>
                  <div className="w-80 h-18 bg-[#fafafa]"></div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in">
              <button className="w-40 h-16 mt-8 bg-white text-black">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <label htmlFor="my-drawer" className="text-black mx-20 mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Banner;
