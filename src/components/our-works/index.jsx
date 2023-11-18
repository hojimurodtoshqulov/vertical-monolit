// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import scss from "./ourworks.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/show7.png";
import img2 from "../../assets/show2.jpg";
import img3 from "../../assets/show3.jpg";
import Title from "../title";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const OurWorks = () => {
	const { t } = useTranslation();
	const items = [
		{
			imageUrl: img1,
		},
		{
			imageUrl: img2,
		},
		{
			imageUrl: img3,
		},
	];
	const NextArrow = ({ onClick }) => (
		<div className={`${scss.arrow} ${scss.next}`} onClick={onClick}>
			<FaArrowRight />
		</div>
	);
	const PrevArrow = ({ onClick }) => (
		<div className={`${scss.arrow} ${scss.prev}`} onClick={onClick}>
			<FaArrowLeft />
		</div>
	);
	// const [imageIndex, setImageIndex] = useState(0);
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		// beforeChange: (current, next) => setImageIndex(next),
	};

	return (
		<div className={scss.wrapper}>
			<img src="/vlogo.png" alt="/vlogo.png" className={scss.vector} />
			<img src="/vlogo2.png" alt="/vlogo2.png" className={scss.vector2} />
			<div className={scss.container}>
				<Title titleName={t("home.works.title")} color="white" spanColor="#ffffff27" />
				{/* <h3 className={scss.heading}></h3> */}
				<div className={scss.slider}>
					<Slider {...settings}>
						{items.map((item, index) => (
							<div className={scss.slider__image} key={index}>
								<img src={item.imageUrl} alt={`Slide ${item.imageUrl}`} />
							</div>
						))}
					</Slider>
					{/* <Splide options={splideOptions}>
						{items.map((item, index) => (
							<SplideSlide key={index}>
								<div className={scss.slider__image}>
									<img src={item.imageUrl} alt={`Slide ${index}`} />
								</div>
							</SplideSlide>
						))}
					</Splide> */}
				</div>
			</div>
		</div>
	);
};

export default OurWorks;
