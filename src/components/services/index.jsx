import Title from "../title";
import scss from "./services.module.scss";
// images //
import img1 from "../../assets/man-slice1.png";
import img2 from "../../assets/man-slice2.png";
import img3 from "../../assets/man-slice3.png";
// import border from "../../assets/border.png";
// images //
import { useTranslation } from "react-i18next";

const Services = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="container">
				<div className={scss.services__head}>
					<Title titleName={t("home.service.title")} />
					<img src="" alt="" />
				</div>
				<div className={scss.services}>
					<div className={scss.services__left}>
						<div className={scss.img}>
							<img src={img3} alt="vertical-monolit" className={scss.image} />
							{/* <img src={border} className={scss.border} /> */}
						</div>
						<div className={scss.img}>
							<img src={img2} alt="vertical-monolit" className={scss.image} />
						</div>
						<div className={scss.img}>
							<img src={img1} alt="vertical-monolit" className={scss.image} />
						</div>
					</div>
					<div className={scss.services__right}>
						<div className={scss.services__right__blog}>
							<p>{t("home.service.text1")}</p>
						</div>
						<hr />
						<div className={scss.services__right__blog}>
							<p>{t("home.service.text2")}</p>
						</div>
						<hr />
						<div className={scss.services__right__blog}>
							<p>
								{t("home.service.text3")} 
							</p>
						</div>
						<hr />
						<div className={scss.services__right__blog}>
							<p>
								{t("home.service.text4")} 
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
