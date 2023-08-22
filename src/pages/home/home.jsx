import React from "react";
import Certificates from "../../components/certificate/certificate";
import Header from "../../components/showcase/showcase";
import Categories from "../../components/category";
import HomeAbout from "../../components/HomeAbout";

const Home = () => {
  return (
    <div>
      <Header head1={"Architecture"} head2={"center."} />
      <div style={{ margin: "50px 10px" }}>
        <Categories />
      </div>
      <div style={{ margin: "150px 10px" }}>
        <HomeAbout />
      </div>
      <Certificates />
    </div>
  );
};

export default Home;
