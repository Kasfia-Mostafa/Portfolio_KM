import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
// import Drawer from "../Drawer/Drawer";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div className="bg-[#fcdac1] max-w-full max-h-screen">
      {/* <Drawer></Drawer> */}
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Contact></Contact>
    </div>
  );
};

export default Home;
