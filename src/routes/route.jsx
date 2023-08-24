import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import ErrorPage from "../error-page/index";
import AboutUs from "../pages/aboutUs/aboutUs";
import Projects from "../pages/projects";

const RoutesWrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default RoutesWrapper;
