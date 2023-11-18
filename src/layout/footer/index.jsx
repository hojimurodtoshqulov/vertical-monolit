import scss from "./footer.module.scss";
import Logo from "../../assets/footer__logo.png";
import { Link } from "react-router-dom";
import { FaTelegramPlane , FaInstagram , FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className="container">
			<div className={scss.footer__wrapper}>
				<div className={scss.footer__left}>
					<div className={scss.logo}>
						<img src={Logo} alt="logo" />
					</div>
					<div className={scss.social__icons}>
						<div className={scss.social__icon}>
							<a href="https://telegram.com" target={"_blank"}>
								<FaTelegramPlane  />
							</a>
						</div>
						<div className={scss.social__icon}>
							<a href="https://facebook.com" target={"_blank"}>
								<FaInstagram  />
							</a>
						</div>
						<div className={scss.social__icon}>
							<a href="https://facebook.com" target={"_blank"}>
								<FaFacebookF />
							</a>
						</div>
					</div>
				</div>
				<div className={scss.footer__middle}>
					<h4>{t("footer.links")}</h4>
					<div className={scss.links}>
						<p>
							<Link to="/about" onClick={scrollToTop}>
								{t("nav.about")}
							</Link>
						</p>
						<p>
							<Link to="/projects" onClick={scrollToTop}>
								{t("nav.projects")}
							</Link>
						</p>
						{/* <p>
							<Link to="/news" onClick={scrollToTop}>
								{t("nav.projects")}
							</Link>
						</p> */}
						<p>
							<Link to="/contact" onClick={scrollToTop}>
								{t("nav.contact")}
							</Link>
						</p>
					</div>
				</div>
				<div className={scss.footer__right}>
					<h4>{t("footer.addressTitle")}</h4>
					<div className={scss.address}>
						<p>{t("footer.address")}</p>
						<a href="tel:+998901863333">+998 90 186 33 33</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
