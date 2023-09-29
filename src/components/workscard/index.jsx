import style from "./cards.module.scss";
import { Tilt } from "react-tilt";

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
export default function Workscard() {
	return (
		<>
			<div className={style.workscard}>
				<div className="container">
					<div className={style.cards}>
						<Tilt options={defaultOptions} className={style.card}>
							<h2 className={style.h2}>1. Lorem ipsum</h2>
						</Tilt>

						<Tilt
							options={defaultOptions}
							className={`${style.card} ${style.card22}`}
						>
							<h2 className={style.h2}>2. Lorem ipsum</h2>
						</Tilt>
						<Tilt
							options={defaultOptions}
							className={`${style.card} ${style.card3}`}
						>
							<h2 className={style.h2}>3. Lorem ipsum</h2>
						</Tilt>
						<Tilt
							options={defaultOptions}
							className={`${style.card} ${style.card4}`}
						>
							<h2 className={style.h2}>4. Lorem ipsum</h2>
						</Tilt>
						<Tilt
							options={defaultOptions}
							className={`${style.card} ${style.card5}`}
						>
							<h2 className={style.h2}>5. Lorem ipsum</h2>
						</Tilt>
						<Tilt
							options={defaultOptions}
							className={`${style.card} ${style.card6}`}
						>
							<h2 className={style.h2}>6. Lorem ipsum</h2>
						</Tilt>
					</div>
				</div>
			</div>
		</>
	);
}
