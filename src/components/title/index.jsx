import scss from "./title.module.scss";

const Title = ({ titleName, color, spanColor }) => {
	return (
		<h2
			className={scss.title}
			style={{ color: `${color}`, position: "relative" }}
		>
			<span style={{ color: `${spanColor}` }}>{titleName.slice(0, 1)} </span>
			{titleName}
		</h2>
	);
};

export default Title;
