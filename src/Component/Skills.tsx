import React from "react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import express from "../assets/express1.png";
import git from "../assets/git1.png";
import github from "../assets/github1.png";
import js from "../assets/JavaScript.png";
import mongo from "../assets/MongoDB.png";
import mysql from "../assets/mySql1.png";
import nodeJs from "../assets/nodeJs.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";

const skills = [
  { name: "React", image: react },
  { name: "TypeScript", image: typescript },
  { name: "Node.js", image: nodeJs },
  { name: "Express.js", image: express },
  { name: "MySQL", image: mysql },
  { name: "MongoDB", image: mongo },
  { name: "JavaScript", image: js },
  { name: "Git", image: git },
  { name: "GitHub", image: github },
];

const SkillsCarousel: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-fit p-6 mt-[20vh]">
      <div className="w-full max-w-4xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="p-4"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SkillsCarousel;
