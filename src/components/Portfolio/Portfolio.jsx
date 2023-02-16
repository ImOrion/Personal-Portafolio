import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      <span>
        "Soon they will be deployed so you can take a look, for now you can see
        the repositories at{" "}
        <a href="https://github.com/ImOrion?tab=repositories" target="_blank">
          this link
        </a>
        , Or by clicking on each one respectively and directly see their
        repository."
      </span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://orion-proyect.web.app/" target="_blank">
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/ImOrion/RickAndMorty-Proyect"
            target="_blank"
          >
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/ImOrion/Individual-Proyect-Dogs-Henry-"
            target="_blank"
          >
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=xAfoPNh4Ps4" target="_blank">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
