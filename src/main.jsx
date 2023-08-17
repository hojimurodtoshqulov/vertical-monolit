import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ErrorPage from "./error-page";
// import Contact from "./routes/contact";
// import Root from "./routes/root.jsx";
// import Home from "./pages/home/home.jsx";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Root />,
// 		errorElement: <ErrorPage />,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 		],
// 	},
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <RouterProvider router={router} /> */}
		<App />
	</React.StrictMode>
);
