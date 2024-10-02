import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
	return (
		<>
			<Header />
			<main className="flex flex-col h-full w-full">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default Layout;
