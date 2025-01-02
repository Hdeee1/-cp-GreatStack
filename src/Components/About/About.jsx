/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import about_play from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={about_play} alt="" className="play-icon" />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow`s Leaders Today </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic et
          obcaecati velit laudantium, error qui quia officia architecto itaque,
          accusantium eum. Ipsum voluptatum quia inventore laboriosam fugit
          repellendus est atque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque
          quo non delectus. Ipsam, voluptas quae ratione ducimus non corporis
          sed dolore ipsum temporibus aliquam architecto facilis, eveniet, aut
          fuga?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          pariatur laudantium natus corrupti sunt, ad, atque quidem voluptatum,
          doloremque accusantium aut. Neque at debitis, ad animi eum accusantium
          incidunt laudantium.
        </p>
      </div>
    </div>
  );
};

export default About;
