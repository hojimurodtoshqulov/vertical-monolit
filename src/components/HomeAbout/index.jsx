import scss from "./HomeAbout.module.scss";
import img1 from "../../assets/home-about-1.png";
import img2 from "../../assets/home-about-2.png";
import img3 from "../../assets/home-about-3.png";
import Title from "../title";
import { Tilt } from "react-tilt";
const HomeAbout = () => {
	const defaultOptions = {
		reverse: false, // reverse the tilt direction
		max: 35, // max tilt rotation (degrees)
		perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
		scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
		speed: 2000, // Speed of the enter/exit transition
		transition: true, // Set a transition on enter/exit.
		axis: null, // What axis should be disabled. Can be X or Y.
		reset: true, // If the tilt effect has to be reset on exit.
		easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
	};
	return (
		<>
			{/* <div className="container"> */}
			<div className={scss.section__wrapper}>
				<div className={scss.section__left}>
					<div className={scss.img}>
						<Tilt options={defaultOptions}>
							{/* <div>👽</div> */}
							<img src={img1} alt="img1" />
						</Tilt>
					</div>
					<div className={scss.img}>
						<Tilt options={defaultOptions}>
							<img src={img2} alt="img2" />
						</Tilt>
					</div>
					<div className={scss.img}>
						<Tilt options={defaultOptions}>
							<img src={img3} alt="img3" />
						</Tilt>
					</div>
				</div>
				<div className={scss.section__right}>
					<Title titleName={"О нас"} />
					<p>
						"Vertical Monolit" - это группа опытных строительных экспертов,
						которые успешно справляются с самыми сложными задачами.
					</p>
					<p>
						Команда состоит из профессионалов с опытом работы более 20 лет, а
						также молодых и перспективных инженеров с опытом не менее 10 лет.
					</p>
				</div>
			</div>
			{/* </div>   */}
		</>
	);
};

export default HomeAbout;
