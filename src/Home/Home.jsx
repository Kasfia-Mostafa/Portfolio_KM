import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Project from "../Projects/Project";
import Skill from "../Skill/Skill";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="bg-[#fcdac1] max-w-full max-h-screen font-DM">
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
