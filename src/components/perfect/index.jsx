import React from "react";
import scss from "./perfect.module.scss";
// image
import Img from "../../assets/perfect.png";
// image
import { Tilt } from "react-tilt";
import Title from "../title";

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
const Perfect = () => {
	return (
		<>
			<div className={scss.perfectWrapper}>
				<div className="container">
					<div className={scss.perfect}>
						<div className={scss.perfect__left}>
							<Title
								titleName={"We love to make perfect home"}
								color="white"
								spanColor="#ffffff27"
							/>
							<p>
								The staff of the company "Bekzod holding" is equipped with
								specialists with relevant specialized education and extensive
								experience in the development of complex web projects and
								information systems. All the company's developers have completed
								the necessary training and received certificates confirming
								their competence and the level of qualification achieved.
							</p>
						</div>
						<div className={scss.perfect__right}>
							<Tilt options={defaultOptions}>
								<img src={Img} alt="Vertical-monolit" />
							</Tilt>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Perfect;
