import scss from "./HomeAbout.module.scss";
import img1 from "../../assets/home-about-1.png";
import img2 from "../../assets/home-about-2.png";
import img3 from "../../assets/home-about-3.png";
import Title from "../title";

const HomeAbout = () => {
	return (
		<>
			{/* <div className="container"> */}
			<div className={scss.section__wrapper}>
				<div className={scss.section__left}>
					<div className={scss.img}>
						<img src={img1} alt="img1" />
					</div>
					<div className={scss.img}>
						<img src={img2} alt="img2" />
					</div>
					<div className={scss.img}>
						<img src={img3} alt="img3" />
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
