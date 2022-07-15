import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import mainp from "../../img/mainp.jpeg";
import productsp from "../../img/productsp.jpeg";
import productsad from "../../img/productsad.jpeg";
import admin from "../../img/admin.jpeg";
import userorder from "../../img/userorder.jpeg";
import orderadm from "../../img/orderadm.jpeg";
import users from "../../img/users.jpeg";
import r from "../../img/r.jpeg";
import cart from "../../img/cart.jpeg";
import { themeContext } from "../../Context";
import p from "../../img/p.jpeg";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const Po = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <><div className="o" id="o">

         <div className="l">
         <Swiper
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider"
          >
              <SwiperSlide>
                  <img src={p} style={{width: "60vw", height: "60vh"}} alt="" />
              </SwiperSlide>

          </Swiper>
         </div>
         <div className="right">
            <h1>Weatheropify (API Project)</h1>
            <a href="https://weather-app-2022-new.vercel.app/" ><button className="m">Click here to view this project online</button></a>

            <br/>
            <br/>

            <span>This is a simple weather app where you can type any valid location around the globe and see its weather conditions, i have used opne weather api to fetch the data. </span>
        <br />
        <br/>
        <span>
            If you want to know the details ,here is my github repo link where i
            have explained every functionality of this applicaiton in details
            with images.
            <br />
            <a href="https://github.com/Ankush109/Weather_app-2022_new-">
              <button className="github">For more details</button>
            </a>
          </span>      
      </div>



      </div></>
  );
};

export default Po;
