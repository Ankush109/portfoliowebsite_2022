import React from "react";
import "./Footer.css";
import op from "../../img/op.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={op} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        
        <div className="f-icons">
        <span> Developed & Maintained by Ankush Banerjee</span>
          <br/>
          
          <br/>
          <br/>
          <br/>
            
          Ⓒ Ankush Banerjee 2022
        </div>
      </div>
    </div>
  );
};

export default Footer;
