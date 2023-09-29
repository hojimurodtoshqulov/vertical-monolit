import scss from "./category.module.scss";
import Icon from "../../assets/category-icon.png";

const categories = [
	{
		icon: Icon,
		heading: "Проектирование под ключ",
		text: "Мы предоставляем комплекс услуг, благодаря которым проект будет завершен в краткие сроки.",
	},
	{
		icon: Icon,
		heading: "Качественный сервис",
		text: "Благодаря количеству наших отделов, ваш проект будет выполнен качественно и в сроки",
	},
	{
		icon: Icon,
		heading: "Гарантия",
		text: "Многолетний опыт наших специалистов гарантирует своевременную сдачу проекта, не забывая о качестве выполнения",
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
