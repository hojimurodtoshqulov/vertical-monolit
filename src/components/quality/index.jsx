import scss from "./quality.module.scss";
import img1 from "../../assets/logo.png";
const Quality = () => {
	return (
		<div className={scss.quality}>
			<h2 className={scss.quality__description}>
				"Качество, которому можно доверять:
				<span>Vertical Monolit</span> "
			</h2>
			<img className={scss.quality__img1} src={img1} alt={img1} />
			<img className={scss.quality__img2} src={img1} alt={img1} />
			<img className={scss.quality__img3} src={img1} alt={img1} />
		</div>
	);
};

export default Quality;
