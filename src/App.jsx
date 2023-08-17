import "./styles/main.scss";

import Aos from "aos";
import { useEffect } from "react";
import Layout from "./layout/layout";
import RoutesWrapper from "./routes/route";
const App = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init({ duration: 1000, mirror: true });
    }
  }, []);
  return (
    <>
      <Layout>
        <RoutesWrapper />
      </Layout>
    </>
  );
};

export default App;
