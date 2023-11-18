import React from "react";
import scss from "./contactIntro.module.scss";
import { useTranslation } from "react-i18next";
const ContactIntro = () => {
	const { t } = useTranslation();
	return (
		<div className={scss.wrapper}>
			<div className="container">
				<h2>{t("contact.contact")}</h2>
				<div className={scss.phones}>
					<a href="tel:+998991112233">+998 (99) 111 - 22 - 33</a>
					<a href="tel:+998991112233">+998 (99) 111 - 22 - 33</a>
				</div>
				<h2>{t("contact.address")}</h2>
				<p className={scss.text}>
					{t("footer.address")}
				</p>
			</div>
		</div>
	);
};

export default ContactIntro;
