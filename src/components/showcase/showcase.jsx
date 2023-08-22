import { useState, useEffect } from "react";
import scss from "./showcase.module.scss";
/* Images */
import img1 from "../../assets/show1.png";
import img2 from "../../assets/show6.jpg";
import img3 from "../../assets/show5.jpg";
import img4 from "../../assets/show4.webp";
// import img5 from "../../assets/logo_head.png";
// import Button from "../button/button";
/* Translation */
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ head1, head2, paragraph }) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const headerData = [
    {
      img: img1,
      title: t("home.q&a.slider1.title"),
      text: t("home.q&a.slider1.text"),
    },
    {
      img: img3,
      title: t("home.q&a.slider2.title"),
      text: t("home.q&a.slider2.text"),
    },
  ];
  const headerData2 = [
    {
      img: img2,
      title: t("home.q&a.slider1.title"),
      text: t("home.q&a.slider1.text"),
    },
    {
      img: img4,
      title: t("home.q&a.slider2.title"),
      text: t("home.q&a.slider2.text"),
    },
  ];
  const tLength = headerData.length;
  const transition = { type: "spring", duration: 2 };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const texts = [<>{t("home.hero.text")}</>, <>{t("home.hero.text2")}</>];
  // const btnLinks = ["/cho'lquvar", "/paxtazor"];
  useEffect(() => {
    const interval = setInterval(() => {
      selected === tLength - 1
        ? setSelected(0)
        : setSelected((prev) => (prev ? 0 : 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={scss.header}>
        <div className="container">
          <div className={scss.header__container}>
            <motion.div className={scss.header__container_elements}>
              <h1 data-aos="zoom-in-up" data-aos-delay="300">
                {head1 ? head1 : null}
                <br />
                {head2 ? head2 : null}
              </h1>
              {paragraph ? (
                <AnimatePresence exitBeforeEnter>
                  <motion.p
                    // key={selected}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ ...transition, duration: 2 }}
                  >
                    {paragraph}
                  </motion.p>
                </AnimatePresence>
              ) : null}
              <div className={scss.header__container_elements_buttons}></div>
            </motion.div>
            <AnimatePresence exitBeforeEnter>
              <motion.img
                className={scss.header__container_img2}
                key={selected}
                initial={{}}
                animate={{}}
                exit={{}}
                transition={{ duration: 3 }}
                src={headerData2[selected].img}
                alt={headerData2[selected].img}
              />
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              <motion.img
                className={scss.header__container_img}
                key={selected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
                src={headerData[selected].img}
                alt={headerData[selected].img}
              />
            </AnimatePresence>
            <div
              className={scss.header__container_elements_button}
              onClick={scrollToTop}
            ></div>
            {/* <img
              className={scss.header__container_elements_whiteLogo}
              src={img5}
              alt={img5}
              data-aos="fade-up"
            />
            <div className={scss.header__container_elements_whiteLogo2}>
              <img src={img5} alt={img5} data-aos="fade-up" />
            </div> */}
          </div>
        </div>
        <div className={scss.bgDiv}></div>
      </div>
    </>
  );
};

export default Header;
