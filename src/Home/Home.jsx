import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div className="bg-[#fcdac1] max-w-full max-h-screen">
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
