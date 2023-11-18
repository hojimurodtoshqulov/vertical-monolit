import Showcase from "../../components/showcase/showcase";
import AboutIntro from "../../components/aboutIntro";
import Adventure from "../../components/adventure";
import Perfect from "../../components/perfect";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
	const { t } = useTranslation();
	return (
		<>
			<Showcase
				head1={t("about.showcase.title")}
				paragraph={t("about.showcase.text")}
			/>
			<AboutIntro />
			<Perfect />
			<Adventure />
		</>
	);
};

export default AboutUs;
