import React from "react";
import Header from "../../components/showcase/showcase";
import Categories from "../../components/category";
import HomeAbout from "../../components/HomeAbout";
import Adventure from "../../components/adventure";
import OurWorks from "../../components/our-works";
import Title from "../../components/title";
import Services from "../../components/services";
import Perfect from "../../components/perfect";

const Home = () => {
  return (
    <div>
      <Header head1={"Architecture"} head2={"center."} />
      <br />
      {/* title component */}
      {/* <div>
        <Title titleName={"Title component"} />
      </div> */}
      {/* title component */}

    <Services />

    {/*  */}
    <Perfect />
    {/*  */}

      <div style={{ margin: "50px 10px" }}>
        <Categories />
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
