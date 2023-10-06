import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import scss from "./mobileNav.module.scss";
import { useTranslation } from "react-i18next";
import navLogo from "../../assets/footer__logo.png";

const MobileNav = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const openHandler = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	return (
		<>
			<div
				className={`${isOpen ? scss.active : scss.mobileNavWrap}`}
				onClick={openHandler}
			>
				<div className={scss.bars}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={scss.links}>
					<Link to="/" onClick={scrollToTop}>
						<img src={navLogo} alt={navLogo} />
					</Link>
					<NavLink to="/about" onClick={scrollToTop}>
						{t("О нас")}
					</NavLink>{" "}
					<NavLink
						onClick={scrollToTop}
						className={scss.dropdown}
						to={"projects"}
					>
						{t("Проекты")}
					</NavLink>{" "}
					<NavLink to="/news" onClick={scrollToTop}>
						{t("Новости")}
					</NavLink>{" "}
					<NavLink to="/contact" onClick={scrollToTop}>
						{t("Контакты")}
					</NavLink>
					<a href="tel:+998777777777">+998 77 777 77 77</a>
				</div>
				<div className={scss.navBG}></div>
			</div>
		</>
	);
};

export default MobileNav;
