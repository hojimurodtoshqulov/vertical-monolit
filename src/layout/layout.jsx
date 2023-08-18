import { Suspense } from "react";
import { Nav } from "../components/navbar/nav";
import { useEffect } from "react";
import Aos from "aos";
// import i18next from "i18next";
// import Footer from "../components/footer/footer";
// import MobileNav from "../components/mobileNav";

const Layout = ({ children }) => {
	// const handleClick = (e) => {
	//   i18next.changeLanguage(e.target.value);
	// };
	useEffect(() => {
		if (typeof window !== null) {
			Aos.init({ duration: 1000, mirror: true });
		}
	}, []);
	return (
		<Suspense fallback="loading">
			<div className="app-wrap">
				<>
					<Nav />
					{/* <div className="mobileNav"><MobileNav /></div> */}
				</>
				{children}
				{/* <Footer /> */}
			</div>
		</Suspense>
	);
};

export default Layout;
