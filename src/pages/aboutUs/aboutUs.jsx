import Showcase from "../../components/showcase/showcase";
import AboutIntro from "../../components/aboutIntro";
import Adventure from "../../components/adventure";
import Perfect from "../../components/perfect";

const AboutUs = () => {
	return (
		<>
			<Showcase
				head1={"о нас"}
				paragraph={
					"Мы предоставляем широкий спектр услуг, включая строительство и реконструкцию как подземных, так и надземных стальных труб, а также ремонт фасадов зданий и теплоизоляцию труб в труднодоступных местах. Мы используем строительные материалы только от проверенных производителей с сертификатами качества."
				}
			/>
			<AboutIntro />
			<Perfect />
			<Adventure />
		</>
	);
};

export default AboutUs;
