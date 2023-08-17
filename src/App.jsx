import "./styles/main.scss";

import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import Layout from "./layout/layout";
const App = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      Aos.init({ duration: 1000, mirror: true });
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
          {/* <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/news" element={<News />} />
          <Route path="/cho'lquvar" element={<Cholquvar />} />
          <Route path="/paxtazor" element={<Paxtazor />} /> */}
      </Routes>
    </>
  );
};

export default App;
