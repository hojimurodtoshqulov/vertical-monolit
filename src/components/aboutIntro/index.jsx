import scss from "./aboutIntro.module.scss";
import img2 from "../../assets/home-about-1.png";
import img1 from "../../assets/home-about-2.png";
import Title from "../title";
import { Tilt } from "react-tilt";
import { useTranslation } from "react-i18next";
const AboutIntro = () => {
	const { t } = useTranslation();
	const defaultOptions = {
		reverse: false, // reverse the tilt direction
		max: 35, // max tilt rotation (degrees)
		perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
		scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
		speed: 1000, // Speed of the enter/exit transition
		transition: true, // Set a transition on enter/exit.
		axis: null, // What axis should be disabled. Can be X or Y.
		reset: true, // If the tilt effect has to be reset on exit.
		easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
	};
	return (
		<div className="container">
			<div className={scss.wrapper}>
				<div className={scss.wrapper__left}>
					<div className={scss.images}>
						<div className={scss.image1}>
							<Tilt options={defaultOptions}>
								<img src={img1} alt={img1} />
							</Tilt>
						</div>
						<div className={scss.image2}>
							<Tilt options={defaultOptions}>
								<img src={img2} alt={img2} />
							</Tilt>
						</div>
					</div>
				</div>
				<div className={scss.wrapper__right}>
					{/* <h3 className={scss.heading}></h3> */}
					<Title titleName={t("about.aboutIntro.title")} />
					<p className={scss.text}>{t("about.aboutIntro.text1")}</p>
					<p className={scss.text}>{t("about.aboutIntro.text2")}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutIntro;
