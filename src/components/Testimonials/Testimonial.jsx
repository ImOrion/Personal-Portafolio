import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Link } from "react-scroll";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        `Rick and morty app is an integration project which was carried out to put into practice the Front End learning, for this project 
        i used the following technologies and tools:
        °JavaScript-React-Redux-HTML5-CSS3-Boostrap-ReactBoostrap-Vercel-Git-GitHub°`,
      link: "https://github.com/ImOrion/RickAndMorty-Proyect",
      btnDesc:"Do you want to know the universe of Rick and morty?"
    },
    {
      img: profilePic2,
      review:
        `Dogs app is part of the practical process of my instance in Henry, in which all my previous learning was put to the test, putting my face only against them, I worked creating the application from scratch, my biggest challenge was the back, in the extension of the word, this is a full stack project. The technologies and tools used were:
        °JavaScript-React-Redux-Sequelize-MySQL-Postgress-Express-Node-HTML5-CSS3-°`,
        link: "https://github.com/ImOrion/Individual-Proyect-Dogs-Henry-",
      btnDesc:"Come and discover dogs that you did not know 🐶 "
    },
    {
      img: profilePic3,
      review:
        `OriOn MusicX, just like the dogs app, is part of the practical stage at Henry, there I had to form a work team to develop a web application, we found a problem and decided to find a solution, we discovered that the distribution of content from producers/singers/creators of content, it was often stagnant due to music or because it was not easy to obtain it, so we created a platform, an e-Commerce where user licenses can be obtained for this audience.
        The technologies and tools used were:
        °JavaScript-React-Redux-Firebase-Figma-FontAwesome-CSS3-HTML5-Boostrap-ReactBoostrap-PayPal-Trello°`,
        link: "https://orion-proyect.web.app/",
      btnDesc:"Come and exploit your talent with our tools🤩 "
    },
    {
      img: profilePic4,
      review:
        `And this is my most important project; I.
        Since I discovered the world of development, I have been passionate about what I do, my great passion is music, OriOn MusicX was born that way, I had this problem and why not combine two things that I love to do?
        Lastly, I didn't want them not to know a part that i love about myself, music.`,
        link: "https://www.youtube.com/watch?v=xAfoPNh4Ps4",
      btnDesc:"Go listen to me🫠 "
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Here a little of the details of </span>
        <span>The Projects In Which I Worked </span>
        <span>or of which I was part...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <a href={client.link} target="_blank">
                  <input
                    type="submit"
                    value={client.btnDesc}
                    className="button"
                  />
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
