// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import scss from "./ourworks.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/show7.png";
import img2 from "../../assets/show2.jpg";
import img3 from "../../assets/show3.jpg";

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

const OurWorks = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className={scss.wrapper}>
			<img src="/vlogo.png" alt="/vlogo.png" className={scss.vector} />
			<img src="/vlogo2.png" alt="/vlogo2.png" className={scss.vector2} />
			<div className={scss.container}>
				<h3 className={scss.heading}>Наши работы</h3>
				<div className={scss.slider}>
					<Slider {...settings}>
						{items.map((item, index) => (
							<div className={scss.slider__image}>
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
