import scss from "./HomeAbout.module.scss";
import img1 from "../../assets/home-about-1.png";
import img2 from "../../assets/home-about-2.png";
import img3 from "../../assets/home-about-3.png";

const HomeAbout = () => {
  return (
    <>
      {/* <div className="container"> */}
      <div className={scss.section__wrapper}>
        <div className={scss.section__left}>
          <div className={scss.img}>
            <img src={img1} alt="img1" />
          </div>
          <div className={scss.img}>
            <img src={img2} alt="img2" />
          </div>
          <div className={scss.img}>
            <img src={img3} alt="img3" />
          </div>
        </div>
        <div className={scss.section__right}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic,
            veniam non eos accusantium quas ipsum dolore amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic,
            veniam non eos accusantium quas ipsum dolore amet.
          </p>
        </div>
      </div>
      {/* </div>   */}
    </>
  );
};

export default HomeAbout;
