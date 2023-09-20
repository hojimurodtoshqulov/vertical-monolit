import scss from "./aboutIntro.module.scss";
import img2 from "../../assets/home-about-1.png";
import img1 from "../../assets/home-about-2.png";
import Title from "../title";

const AboutIntro = () => {
	return (
		<div className="container">
			<div className={scss.wrapper}>
				<div className={scss.wrapper__left}>
					<div className={scss.images}>
						<div className={scss.image1}>
							<img src={img1} alt="" />
						</div>
						<div className={scss.image2}>
							<img src={img2} alt="" />
						</div>
					</div>
				</div>
				<div className={scss.wrapper__right}>
					{/* <h3 className={scss.heading}></h3> */}
					<Title titleName={"Мы предоставляем широкий спектр услуг"} />
					<p className={scss.text}>
						Включая строительство и реконструкцию как подземных, так и надземных
						стальных труб, а также ремонт фасадов зданий и теплоизоляцию труб в
						труднодоступных местах. Мы используем строительные материалы только
						от проверенных производителей с сертификатами качества.
					</p>
					<p className={scss.text}>
						Мы осуществляем комплексный подход к выполнению проектов, включающий
						благоустройство объекта, раскопку с учетом городских коммуникаций и
						обратную засыпку с уплотнением грунта.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutIntro;
