import React from "react";
import scss from "./contact.module.scss";
import ContactIntro from "../../components/contactIntro";
import { useTranslation } from "react-i18next";
const Contact = () => {
	const { t } = useTranslation();
	return (
		<div>
			<ContactIntro />
		</div>
	);
};

export default Contact;
