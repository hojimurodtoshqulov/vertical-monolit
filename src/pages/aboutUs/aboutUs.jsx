import Showcase from "../../components/showcase/showcase";
import AboutIntro from "../../components/aboutIntro";

const AboutUs = () => {
  return (
    <>
      <Showcase
        head1={"о нас"}
        paragraph={
          'The company LLC "Bekzod holding", established in June 2012, specializes in the development of complex web projects and information systems, directly for government agencies, taking into account the requirements.'
        }
      />
      <AboutIntro />
    </>
  );
};

export default AboutUs;
