// import React from "react";
import Header from "../../components/showcase/showcase";
import Categories from "../../components/category";
import HomeAbout from "../../components/HomeAbout";
import Adventure from "../../components/adventure";
import OurWorks from "../../components/our-works";
// import Title from "../../components/title";
import Services from "../../components/services";
import Quality from "../../components/quality";
// import Perfect from "../../components/perfect";

const Home = () => {
	return (
		<div>
			<Header head1={"Модернизация технологической"} head2={""} />
			<Categories />
			<div style={{ margin: "200px 0" }}>
				<HomeAbout />
			</div>
			<div style={{ margin: "150px 0px 100px" }}>
				<Services />
			</div>
			<OurWorks />
			<Adventure />
			<Quality />
		</div>
	);
};

export default Home;
