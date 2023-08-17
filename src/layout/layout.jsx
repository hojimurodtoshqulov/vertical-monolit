import { Suspense } from "react";
import { Nav } from "../components/navbar/nav";
import i18next from "i18next";
// import Footer from "../components/footer/footer";
// import MobileNav from "../components/mobileNav";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  const [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 4000);
  }, []);
  return (
    <Suspense fallback="loading">
      <div className="app-wrap">
        {active ? (
          <>
            {/* <video
							src={video}
							autoPlay
							muted
							playsInline
							style={{
								width: "100%",
								height: "100vh",
								position: "fixed",
								inset: 0,
								background: "white",
								zIndex: 100,
							}}
						></video> */}
          </>
        ) : (
          // <Navbar />
          <>
            <Nav onClick={(e) => handleClick(e)} />
            {/* <div className="mobileNav"><MobileNav /></div> */}
          </>
        )}
        {children}
        {/* <Footer /> */}
      </div>
    </Suspense>
  );
};

export default Layout;
