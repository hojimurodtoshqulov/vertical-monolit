import scss from "./category.module.scss";
import Icon from "../../assets/category-icon.png";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GiTeePipe, GiWarpPipe } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const Categories = () => {
	const { t } = useTranslation();
	const categories = [
		{
			icon: <MdOutlineMiscellaneousServices />,
			heading: t("home.categ.title1"),
			text: t("home.categ.text1"),
		},
		{
			icon: <GiTeePipe />,
			heading: t("home.categ.title2"),
			text: t("home.categ.text2"),
		},
		{
			icon: <GiWarpPipe />,
			heading: t("home.categ.title3"),
			text: t("home.categ.text3"),
		},
	];
	return (
		<>
			<div className="container">
				<div className={scss.category__wrapper}>
					{categories.map((c, i) => (
						<CategoryItem key={i} {...c} />
					))}
				</div>
			</div>
		</>
	);
};

export default Categories;

const CategoryItem = ({ icon, heading, text }) => {
	return (
		<>
			<div className={scss.category__item}>
				<div className={scss.category__item__icon}>
					{/* <img src="/add2.png" alt={heading} /> */}
					{icon}
				</div>
				<h4>{heading}</h4>
				<p>{text}</p>
			</div>
		</>
	);
};
