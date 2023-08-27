import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import scss from "./ourworks.module.scss";
import "./slider.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img1 from "../../assets/show1.png";
import img2 from "../../assets/show2.jpg";
import img3 from "../../assets/show3.jpg";

const items = [
  {
    imageUrl: img1,
  },
  {
    imageUrl: img2,
  },
  {
    imageUrl: img3,
  },
];

const OurWorks = () => {
  const splideOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 3000,
  };
  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        <h3 className={scss.heading}>Наши работы</h3>
        <div className={scss.slider}>
          <Splide options={splideOptions}>
            {items.map((item, index) => (
              <SplideSlide key={index}>
                <div className={scss.slider__image}>
                  <img src={item.imageUrl} alt={`Slide ${index}`} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
