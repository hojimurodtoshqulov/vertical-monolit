import scss from "./category.module.scss";
import Icon from "../../assets/category-icon.png";

const categories = [
	{
		icon: Icon,
		heading: "Lorem ipsum dolor",
		text: "Lorem ipsum dolor sit amet consectetur. Magnis dictumst dictum eget vestibulum",
	},
	{
		icon: Icon,
		heading: "Lorem ipsum dolor",
		text: "Lorem ipsum dolor sit amet consectetur. Magnis dictumst dictum eget vestibulum",
	},
	{
		icon: Icon,
		heading: "Lorem ipsum dolor",
		text: "Lorem ipsum dolor sit amet consectetur. Magnis dictumst dictum eget vestibulum",
	},
];

const Categories = () => {
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
					<img src="/add2.png" alt={heading} />
				</div>
				<h4>{heading}</h4>
				<p>{text}</p>
			</div>
		</>
	);
};
