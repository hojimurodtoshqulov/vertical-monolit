import React from "react";
import Header from "../../components/showcase/showcase";
import Categories from "../../components/category";
import HomeAbout from "../../components/HomeAbout";
import Adventure from "../../components/adventure";
import OurWorks from "../../components/our-works";
import scss from "./home.module.scss";

const Home = () => {
  return (
    <div>
      <Header head1={"Architecture"} head2={"center."} />
      <div className={scss.category}>
        {/* <div> */}
        <Categories />
        {/* </div> */}
      </div>
      <div style={{ margin: "150px 10px" }}>
        <HomeAbout />
      </div>
      <div style={{ margin: "250px 0px 100px" }}>
        <OurWorks />
      </div>
      <Adventure />
    </div>
  );
};

export default Home;
