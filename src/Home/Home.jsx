import About from "../About/About";
import Banner from "../Banner/Banner";
import Drawer from "../Drawer/Drawer";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div className="bg-[#f0ba91] max-w-full max-h-screen">
      {/* <Drawer></Drawer> */}
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
    </div>
  );
};

export default Home;
