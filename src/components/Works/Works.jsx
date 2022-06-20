import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <><div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            About Me
          </span>
          <span>Highly Intruiged to work upon new tech</span>

          <spane>
            <h1 className="o">
              hello there,

            </h1>


            <h1 className="o">I am currently in my 2nd Year of Computer Science Btech form Techno Main Saltake</h1>
            <span className="i">
              I did my schooling from Nava Nalanda High School
              I used to love computer from childhood, i always had a  curiosity to learn new things in computer
              Then I started learning the basics of programming languages i.e C .
              After getting in the first year of college i learned html,css,javascript
              after thinking about which framework to learn i went for React js as i could shift to react native to do android development
              I also learned C++ and learned about object oriented programming
              I am a fitness freak and i also love travelling :)
            </span>
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <div>

        </div>
        {/* background Circles */}
     
      </div>
    </div>
    <div>
    
      </div></>
  );
};

export default Works;
