import style from "./cards.module.scss";
import { Tilt } from "react-tilt";
import { useTranslation } from "react-i18next";
export default function Workscard() {
	const { t } = useTranslation();
	const data = [
		{ title: t("projects.cards.title1") },
		{ title: t("projects.cards.title2") },
		{ title: t("projects.cards.title3") },
		{ title: t("projects.cards.title4") },
		{ title: t("projects.cards.title5") },
		{ title: t("projects.cards.title6") },
	];
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
		<>
			<div className={style.workscard}>
				<div className="container">
					<div className={style.cards}>
						{data?.map((item, index) => (
							<>
								<Tilt
									options={defaultOptions}
									className={style.card}
									key={index}
								>
									<h2 className={style.h2}>{item.title}</h2>
								</Tilt>
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
