import { Suspense, useRef } from "react";
import { useState, useEffect } from "react";
import navLogo from "../../assets/logo_head.png";
import scss from "./nav.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa";
import "./dropdown.scss";
const langs = ["en", "ru", "uz"];
const Nav = () => {
  const [navColorBg, setnavColorBg] = useState(0);
  const [navSize, setnavSize] = useState("12vh");
  const [navSizeMobile, setnavSizeMobile] = useState("9.4vh");
  const [navBg, setNavBg] = useState("transparent");
  const [navLinkColor, setNavLinkColor] = useState("");
  const [navBoxShadow, setNavBoxShadow] = useState("inset 0px 0px 0px #ff00");
  const ref = useRef(null);
  const [currentLang, setCurrentLang] = useState("en");
  // const [navContainerBR, setNavContainerBR] = useState("2px solid #fff");
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavColorBg(10) : setnavColorBg(0);
    window.scrollY > 80 ? setnavSize("10vh") : setnavSize("12vh");
    window.scrollY > 80 ? setNavLinkColor("#fff") : setNavLinkColor("");
    window.scrollY > 80 ? setnavSizeMobile("9.4vh") : setnavSizeMobile("9.4vh");
    window.scrollY > 80 ? setNavBg("#009d9d1d") : setNavBg("transparent");
    window.scrollY > 80
      ? setNavBoxShadow("inset 0px 0px 50px #009D9D")
      : setNavBoxShadow("inset 0px 0px 0px #ff00");
    // window.scrollY > 80
    // 	? setNavContainerBR("2px solid #ff00")
    // 	: setNavContainerBR("2px solid #fff");
  };
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  // const [langCheck, setLangCheck] = useState(1);
  // const [langColor, _] = useState("");
  // const currentLang = i18n.language === "en-US" ? "ru" : i18n.language;
  // const checkLangImg = (e) => {
  //   if (e.target.value === "ru") {
  //     i18n.changeLanguage("ru");
  //     setLangCheck(2);
  //   } else {
  //     setLangCheck(1);
  //     i18n.changeLanguage("uz");
  //   }
  // };
  function myFunction() {
    ref.current?.classList.toggle("show");
  }
  const langBtnClick = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setCurrentLang(lang);
    myFunction();
  };

  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    } else {
      setCurrentLang(localStorage.getItem("lang"));
      i18n.changeLanguage(localStorage.getItem("lang"));
    }
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const width = () => {
    if (window.innerWidth > 765) {
      return navSize;
    } else {
      return navSizeMobile;
    }
  };

  return (
    <Suspense fallback="loading">
      <nav
        className={scss.nav}
        style={{
          backdropFilter: `blur(${navColorBg}px)`,
          background: navBg,
          transition: "all 0.8s",
          height: width(),
          boxShadow: navBoxShadow,
        }}
      >
        <div className="container" data-aos="fade-left">
          <div className={scss.nav__container}>
            <Link
              style={{ color: navLinkColor }}
              onClick={scrollToTop}
              className={scss.nav__container_logo}
              to="/"
            >
              <img src={navLogo} alt={navLogo} />
            </Link>
            <div className={scss.nav__container_links}>
              <NavLink
                style={{ color: navLinkColor }}
                to="/about"
                onClick={scrollToTop}
              >
                {t("О нас")} <span></span>
              </NavLink>{" "}
              <Link
                style={{ color: navLinkColor }}
                onClick={scrollToTop}
                className={scss.dropdown}
                to={"projects"}
              >
                {t("Проекты")}

                <span></span>
              </Link>{" "}
              <NavLink
                style={{ color: navLinkColor }}
                to="/news"
                onClick={scrollToTop}
              >
                {t("Новости")} <span></span>
              </NavLink>{" "}
              <NavLink
                style={{ color: navLinkColor }}
                to="/contact"
                onClick={scrollToTop}
              >
                {t("Контакты")} <span></span>
              </NavLink>
            </div>
            <div className={scss.nav__container_lang}>
              {/* <span
                className={scss.nav__container_lang_ru}
                onClick={checkLangImg}
                value={"ru"}
              >
                <button
                  className={scss.ru}
                  // className={currentLang === "ru" && scss.active}
                  value={"ru"}
                  // onClick={onClick}
                  type="btn"
                  style={{ color: langColor }}
                ></button>
                <div></div>
              </span>
              <span
                className={scss.nav__container_lang_uz}
                onClick={checkLangImg}
                value={"uz"}
              >
                <button
                  className={scss.uz}
                  value={"uz"}
                  // onClick={onClick}
                  type="btn"
                  style={{ color: langColor }}
                ></button>
                <div></div>
              </span> */}
              <div className="dropdown">
                <button className="dropbtn" onClick={() => myFunction()}>
                  {/* <HiLanguage /> */}
                  {currentLang}
                </button>
                <div id="myDropdown" ref={ref} className="dropdown-content">
                  {langs.map((l, i) => (
                    <span
                      className={currentLang === l ? "active" : ""}
                      onClick={() => langBtnClick(l)}
                      key={i}
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={scss.nav__container_phoneLink}>
              <a href="tel:+998777777777">+998 77 777 77 77</a>
              <a href="tel:+998777777777">{<FaPhone />}</a>
            </div>
          </div>
        </div>
      </nav>
    </Suspense>
  );
};
export { Nav };
