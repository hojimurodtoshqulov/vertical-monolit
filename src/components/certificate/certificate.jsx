import "./certificate.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../assets/show1.1.png";
import img2 from "../../assets/show5.jpg";
import img3 from "../../assets/show6.jpg";
import img4 from "../../assets/show4.webp";
// import img5 from "../../assets/logo_white.png";
// import logo1 from "../../assets/cholquvar.png";
// import logo2 from "../../assets/paxtazor.png";
const Certificates = () => {
	const data = [
		{
			img: img1,
			// logo: logo1,
			link: "/cho'lquvar",
			title: "Cho'lquvar",
		},
		{
			img: img2,
			// logo: logo2,
			link: "/paxtazor",
			title: "Paxtazor",
		},
		{
			img: img3,
			// logo: logo1,
			link: "/cho'lquvar",
			title: "Bla bla",
		},
		{
			img: img4,
			// logo: logo2,
			link: "/paxtazor",
			title: "Big house",
		},
	];
	const NextArrow = ({ onClick }) => (
		<div className="arrow next" onClick={onClick}>
			<FaArrowRight />
		</div>
	);
	const PrevArrow = ({ onClick }) => (
		<div className="arrow prev" onClick={onClick}>
			<FaArrowLeft />
		</div>
	);
	const [imageIndex, setImageIndex] = useState(0);
	const settings = {
		infinite: true,
		lazyload: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	};
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className="projects">
			<div className="container">
				<h2 data-aos="fade-up">Наши проекты</h2>
				<div className="resourses">
					<Slider {...settings}>
						{data.map((item, index) => (
							<div
								key={index}
								className={index === imageIndex ? "slide active" : "slide"}
								onClick={scrollToTop}
							>
								<Link onClick={scrollToTop} to={item.link} >
									<img className="img" src={item.img} alt={item.img} onClick={scrollToTop} />
									<img className="link" src={item.logo} alt={item.logo} />
								</Link>
							</div>
						))}
					</Slider>
				</div>
			</div>
			{/* <img className="logo1" src={img5} alt={img5} data-aos="fade-up" />
			<div className="logo2">
				<img data-aos="fade-up" src={img5} alt={img5} />
			</div> */}
		</div>
	);
};

export default Certificates;
