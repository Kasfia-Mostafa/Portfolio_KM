// import { Link } from "react-router-dom";
// import Banner from "../Banner/Banner";

import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Drawer = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
         
          <Banner></Banner>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 h-[100vh] bg-[#fafafa]  text-orange-600 text-4xl flex justify-center items-center">
            <li className="border-b-2 border-orange-100">
              <a>Home</a>
            </li>
            <Link to="about">
              <li className="border-b-2 border-orange-100">
                <a>About</a>
              </li>
            </Link>
            <li className="border-b-2 border-orange-100">
              <a>Product</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
