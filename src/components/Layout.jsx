import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
	return (
		<>
			<Header />
			<main className="flex flex-grow flex-col h-full w-full items-center justify-center">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default Layout;
