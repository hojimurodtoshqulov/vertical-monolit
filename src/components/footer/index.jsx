import scss from "./footer.module.scss";
import Logo from "../../assets/footer__logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className={scss.footer__wrapper}>
        <div className={scss.footer__left}>
          <div className={scss.logo}>
            <img src={Logo} alt="logo" />
          </div>
          <p className={scss.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>
        </div>
        <div className={scss.footer__middle}>
          <h4>About</h4>
          <div className={scss.links}>
            <p>
              <Link to="/about">About us</Link>
            </p>
            <p>
              <Link to="/news">News</Link>
            </p>
            <p>
              <Link to="/about">Pricing</Link>
            </p>
            <p>
              <Link to="/about">New property</Link>
            </p>
          </div>
        </div>
        <div className={scss.footer__right}>
          <h4>Our Location</h4>
          <div className={scss.address}>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <div className={scss.social__icons}>
              <div className={scss.social__icon}>
                <a href="https://facebook.com" target={"_blank"}>
                  <FaFacebookF />
                </a>
              </div>
              <div className={scss.social__icon}>
                <a href="https://facebook.com" target={"_blank"}>
                  <FaTwitter />
                </a>
              </div>
              <div className={scss.social__icon}>
                <a href="https://facebook.com" target={"_blank"}>
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <a href="tel:+998935952204">+998 93 595 22 04</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
