import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import lifedemo from "../../img/lifedemo.jpeg";
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
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const Chatapp = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="o" id="o">
        <div className="l">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
          >
            <SwiperSlide>
              <img
                src={lifedemo}
                style={{ width: "60vw", height: "60vh" }}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="right">
          <h1>MERN Stack ChatApp</h1>
          <a href="https://devchatt.herokuapp.com/">
            <button className="m">
              Click here to view this project online
            </button>
          </a>

          <br />
          <br />

          <span>
            This is MERN stack web applicaiton which i have developed to test my
            tech stack with react js as frontend and mongodb and node js as
            backend part , i have used web sockets to achieve real time
            messaging features like whatsapp has and one can create group , all
            the message will be stored in the database which is mongodb atlas,it
            also has notificaiton badge which shows if anyone send you any
            message.
          </span>
        </div>
      </div>
    </>
  );
};

export default Chatapp;
