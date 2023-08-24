import scss from "./aboutIntro.module.scss";
import img2 from "../../assets/home-about-1.png";
import img1 from "../../assets/home-about-2.png";

const AboutIntro = () => {
  return (
    <div className="container">
      <div className={scss.wrapper}>
        <div className={scss.wrapper__left}>
          <div className={scss.images}>
            <div className={scss.image1}>
              <img src={img1} alt="" />
            </div>
            <div className={scss.image2}>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className={scss.wrapper__right}>
          <h3 className={scss.heading}>Here were the story begins</h3>
          <p className={scss.text}>
            The company LLC "Bekzod holding", established in June 2012,
            specializes in the development of complex web projects and
            information systems, directly for government agencies, taking into
            account the requirements.{" "}
            <div>
              <br />
            </div>
            One of the priority goals of the company "Bekzod holding" is direct
            participation in the development and implementation of information
            and communication technologies for all sectors of the economy,
            management and social sphere of the Republic.To date, the company
            has more than twenty successfully implemented solutions, gaining the
            status of a gold certified partner of 1C–Bitrix, obtaining the
            competence "Participant in the implementation quality program".
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
