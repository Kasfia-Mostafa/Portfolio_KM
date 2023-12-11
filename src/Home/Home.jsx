import About from "../About/About";
import Banner from "../Banner/Banner";
import Drawer from "../Drawer/Drawer";

const Home = () => {
  return (
    <div className="bg-[#f0ba91] max-w-full max-h-screen">
      {/* <Drawer></Drawer> */}
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;
