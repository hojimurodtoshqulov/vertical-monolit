import scss from "./quality.module.scss";
import img1 from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
const Quality = () => {
	const { t } = useTranslation();
	return (
		<div className={scss.quality}>
			<h2 className={scss.quality__description}>
				"{t("home.quality.title")} <span>Vertical Monolit</span> "
			</h2>
			<img className={scss.quality__img1} src={img1} alt={img1} />
			<img className={scss.quality__img2} src={img1} alt={img1} />
			<img className={scss.quality__img3} src={img1} alt={img1} />
		</div>
	);
};

export default Quality;
